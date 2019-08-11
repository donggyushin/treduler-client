import axios from 'axios';
import { LOGIN_USER, LOGOUT_USER, REMOVE_USER_INFO } from './type';

export const logoutUser = () => dispatch => {

    window.location.href = "/loggedOut"

    dispatch({
        type: LOGOUT_USER
    })
    dispatch({
        type: REMOVE_USER_INFO
    })


}

export const loginUser = (email, password) => dispatch => {
    axios.post('/api/user/login', {
        email,
        password
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                window.location.href = "/";
                dispatch({
                    type: LOGIN_USER,
                    token: data.token
                })
                return;
            } else {
                window.localStorage.setItem('email', email)
                alert(data.message)
                window.location.href = "/send-email-page"
                return;
            }
        })
}