import axios from 'axios';
import { FETCH__UNREAD_NOTIFICATIONS_NUMBER, FETCH_ALL_NOTIFICATIONS, READ_ALL_NOTIFICATIONS, DELETE_NOTIFICATION, DELETE_ALL_NOTIFICATIONS, ADD_NUMBER_ONE_UNREAD_NOTIFICATION } from './type';

export const addNumberOneUnreadNotificationNumbers = () => dispatch => {
    dispatch({
        type: ADD_NUMBER_ONE_UNREAD_NOTIFICATION
    })
}

export const deleteAllNotifications = () => dispatch => {
    axios.delete(`/api/notification`, {
        headers: {
            jwt: localStorage.getItem('jwt')
        }
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: DELETE_ALL_NOTIFICATIONS
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const deleteNotification = (id) => dispatch => {
    axios.delete(`/api/notification/${id}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: DELETE_NOTIFICATION,
                    payload: id
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const readAllNotifications = () => dispatch => {
    axios.put(`/api/notification/read-all`, {}, {
        headers: {
            jwt: localStorage.getItem('jwt')
        }
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: READ_ALL_NOTIFICATIONS
                })
            } else {
                alert(data.message)
            }
        })
}

export const fetchAllNotifications = () => dispatch => {
    axios.get(`/api/notification`, {
        headers: {
            jwt: localStorage.getItem('jwt')
        }
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: FETCH_ALL_NOTIFICATIONS,
                    payload: data.notifications
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

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