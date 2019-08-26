import React from 'react';
import styled from 'styled-components';
import Navagation from '../main/nav'
import Header from './Header';
import { connect } from 'react-redux';
import { fetchATeam } from '../../../actions/team'
import NavigationBar from './Nav';
import { Route, Switch } from "react-router-dom";
import Boards from './routes/Boards'
import Members from './routes/Members';
import TeamPhotoChangeForm from './TeamPhotoChangeForm';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`

class Team extends React.Component {

    state = {
        loading: true
    }


    componentDidMount() {
        const { fetchATeam } = this.props;
        fetchATeam(this.props.match.params.id)
    }



    render() {
        const { teamPhotoChangeView } = this.props;
        return <Container>
            <Navagation />
            <Header />
            <NavigationBar />
            <Switch>
                <Route path="/team/:id" exact component={Boards} />
                <Route path="/team/:id/members" component={Members} />
            </Switch>
            {teamPhotoChangeView && <TeamPhotoChangeForm />}
        </Container>
    }
}

const mapStateToProps = state => {
    return {
        teamPhotoChangeView: state.TeamPhotoChangeForm.view
    }
}

export default connect(mapStateToProps, { fetchATeam })(Team)