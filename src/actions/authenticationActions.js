import axios from 'axios';
import { LOGIN_USER } from './type';

export const loginUser = (email, password) => dispatch => {
    console.log(email, password)
    axios.post('/api/user/login', {
        email,
        password
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: LOGIN_USER,
                    token: data.token
                })
                window.location.href = "/"
                return;
            } else {
                window.localStorage.setItem('email', email)
                alert(data.message)
                window.location.href = "/send-email-page"
                return;
            }
        })
}