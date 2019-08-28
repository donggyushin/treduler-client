import axios from 'axios';
import { SET_USER_INFO, CHANGE_PROFILE_PHOTO } from './type';

export const getOutOfTeam = (teamId) => dispatch => {
    axios.delete(`/api/user/${teamId}`, {
        headers: {
            jwt: localStorage.getItem('jwt')
        }
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                window.location.href = "/"
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const acceptInvitation = (teamId) => dispatch => {
    axios.post(`/api/user/accept-invitation`, {
        teamId
    }, {
            headers: {
                jwt: localStorage.getItem('jwt')
            }
        })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                window.location.href = "/"
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const changeProfilePhotoV2 = (profilePhoto) => dispatch => {
    const token = localStorage.getItem('jwt');
    axios.post(`/api/user/profile`, { profilePhoto }, {
        headers: {
            token
        }
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: CHANGE_PROFILE_PHOTO,
                    payload: data.profilePhoto
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const changeProfilePhoto = (profilePhoto) => dispatch => {
    const token = localStorage.getItem('jwt')
    axios.post(`/api/user/profile`, profilePhoto, {
        headers: {
            token
        }
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: CHANGE_PROFILE_PHOTO,
                    payload: data.profilePhoto
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

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