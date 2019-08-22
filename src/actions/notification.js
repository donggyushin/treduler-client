import axios from 'axios';
import { FETCH__UNREAD_NOTIFICATIONS_NUMBER } from './type';

export const getUnreadNotificationsNumber = () => dispatch => {

    axios.get(`/api/notification/unread`, {
        headers: {
            jwt: localStorage.getItem('jwt')
        }
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: FETCH__UNREAD_NOTIFICATIONS_NUMBER,
                    payload: data.unreadNotificationsNumber
                })
            } else {

                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}