import axios from 'axios';
import { SET_USER_INFO } from './type';



export const getUserInfo = () => dispatch => {
    axios.get('/api/user/', {
        headers: {
            token: localStorage.getItem('jwt')
        }
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: SET_USER_INFO,
                    payload: data.user
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}