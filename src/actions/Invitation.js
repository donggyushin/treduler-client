import axios from 'axios';
import { TURN_ON_INVITATION, TURN_DOWN_INVITATION } from './type';

export const turnOnInvitation = (senderEmail, teamId) => async dispatch => {

    const user = await axios.get(`/api/user/${senderEmail}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                return data.user
            } else {
                alert(data.message)
                return;
            }
        })
        .catch(err => console.error(err))

    const team = await axios.get(`/api/team/${teamId}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                return data.team;
            } else {
                alert(data.message)
                return;
            }
        })
        .catch(err => console.error(err))

    if (user === null || team === null) {
        alert('Fail to find user or team');
        return;
    }



    dispatch({
        type: TURN_ON_INVITATION,
        payload: {
            senderEmail,
            teamId,
            user,
            team
        }
    })
}

export const turnDownInvitation = () => dispatch => {
    dispatch({
        type: TURN_DOWN_INVITATION
    })
}