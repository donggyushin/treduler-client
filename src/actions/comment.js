import axios from 'axios';
import { FETCH_COMMENTS, POST_COMMENT, DELETE_COMMENT } from './type';
import socketIOClient from 'socket.io-client';
import { ENDPOINT } from '../constants/endpoint';
const SOCKET_ENDPOINT = ENDPOINT + ':8082'

export const socketDeleteComment = data => dispatch => {
    dispatch({
        type: DELETE_COMMENT,
        payload: data
    })
}

export const deleteComment = commentId => (dispatch, getState) => {
    axios.delete(`/api/comment/${commentId}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: DELETE_COMMENT,
                    payload: data.comment
                })
                const socket = socketIOClient(SOCKET_ENDPOINT)
                const { user, card } = getState()
                const dataToSocketLogin = {
                    userEmail: user.email,
                    cardId: card.card.id
                }
                socket.emit('login', dataToSocketLogin)
                socket.emit('delete-comment', data.comment)
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const socketPostComment = (data) => dispatch => {
    dispatch({
        type: POST_COMMENT,
        payload: data
    })
}

export const postComment = (cardId, message) => (dispatch, getState) => {
    axios.post(`/api/comment/${cardId}`, {
        message
    }, {
            headers: {
                token: localStorage.getItem('jwt')
            }
        })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: POST_COMMENT,
                    payload: data.comment
                })
                const socket = socketIOClient(SOCKET_ENDPOINT)
                const { user, card } = getState()
                const dataToSocketLogin = {
                    userEmail: user.email,
                    cardId: card.card.id
                }
                socket.emit('login', dataToSocketLogin)
                socket.emit('add-comment', data.comment)

            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const fetchComments = (cardId) => dispatch => {
    axios.get(`/api/comment/${cardId}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                console.log(data.comments)
                dispatch({
                    type: FETCH_COMMENTS,
                    payload: data.comments
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}