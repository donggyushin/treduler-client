import axios from 'axios';
import { FETCH_TEAMS, POST_NEW_TEAM, FETCH_A_TEAM, CREATE_NEW_TEAM_BOARD } from './type';

export const createNewTeamBoard = (title, backgroundImage, team) => dispatch => {
    console.log('create new team board')
    axios.post(`/api/team/board`, {
        title,
        backgroundImage,
        team
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: CREATE_NEW_TEAM_BOARD,
                    payload: data.board
                })
            } else {
                alert(data.message)
            }
        })
}

export const inviteNewMember = (teamId, email) => dispatch => {
    axios.post(`/api/team/add-member`, {
        email,
        teamId
    }, {
            headers: {
                jwt: localStorage.getItem('jwt')
            }
        })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                alert(`Success to send a invitation to ${email}! Wait for the response :D`)
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const fetchATeam = (teamId) => dispatch => {
    axios.get(`/api/team/${teamId}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: FETCH_A_TEAM,
                    payload: data.team
                })
            } else {
                console.log(data.error)
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const postNewTeam = (name, description) => dispatch => {
    axios.post(`/api/team`, {
        name,
        description
    }, {
            headers: {
                jwt: localStorage.getItem('jwt')
            }
        })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: POST_NEW_TEAM,
                    payload: data.team
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const fetchTeams = () => dispatch => {
    axios.get(`/api/team`, {
        headers: {
            jwt: localStorage.getItem('jwt')
        }
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: FETCH_TEAMS,
                    payload: data.teams
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}