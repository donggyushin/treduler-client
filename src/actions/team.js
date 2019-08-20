import axios from 'axios';
import { FETCH_TEAMS, POST_NEW_TEAM } from './type';

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