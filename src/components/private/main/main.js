import React from 'react';
import styled from 'styled-components';
import Navigation from './nav'
import { connect } from 'react-redux'
import { getUserInfo } from '../../../actions/user'
import { fetchAllBoards } from '../../../actions/board'
import { fetchTeams } from '../../../actions/team'
import Body from './body';
import { Helmet } from 'react-helmet'
import ChangeProfile from './ChangeProfile';
import AddNewTeamForm from './AddNewTeamForm/AddNewTeamForm';
import CreateNewTeamBoardForm from './CreateNewTeamBoardForm';


const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`



class Main extends React.Component {


    componentDidMount() {
        const { getUserInfo, fetchAllBoards, fetchTeams } = this.props;
        getUserInfo()
        fetchAllBoards()
        fetchTeams()

    }

    render() {
        const { changeProfile, addNewTeamForm, createNewTeamBoardFormView } = this.props;
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
                {addNewTeamForm.view && <AddNewTeamForm />}
                {createNewTeamBoardFormView && <CreateNewTeamBoardForm />}
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        changeProfile: state.changeProfile.changeProfile,
        addNewTeamForm: state.addNewTeamForm,
        createNewTeamBoardFormView: state.createNewTeamBoard.view
    }
}

export default connect(mapStateToProps, { getUserInfo, fetchAllBoards, fetchTeams })(Main) 