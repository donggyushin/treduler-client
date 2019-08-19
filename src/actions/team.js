import axios from 'axios';
import { FETCH_TEAMS } from './type';

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