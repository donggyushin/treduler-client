import React from 'react';
import styled from 'styled-components';
import Navigation from './nav'
import { connect } from 'react-redux'
import { getUserInfo } from '../../../actions/user'
import { fetchAllBoards } from '../../../actions/board'
import Body from './body';
import { Helmet } from 'react-helmet'
import ChangeProfile from './ChangeProfile';


const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`



class Main extends React.Component {


    componentDidMount() {
        const { getUserInfo, fetchAllBoards } = this.props;
        getUserInfo()
        fetchAllBoards()
    }

    render() {
        const { changeProfile } = this.props;
        return (
            <Container>
                <Helmet>
                    <title>
                        Boards | Treduler
                    </title>
                </Helmet>
                <Navigation />
                <Body />
                {changeProfile && <ChangeProfile />}
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        changeProfile: state.changeProfile.changeProfile
    }
}

export default connect(mapStateToProps, { getUserInfo, fetchAllBoards })(Main) 