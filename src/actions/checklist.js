import axios from 'axios';
import { FETCH_CHECKLISTS, TOGGLE_CHECKLIST, CHANGE_CONTENT, DELETE_CHECKLIST, POST_NEW_CHECKLIST } from './type';
import socketIOClient from 'socket.io-client';
const SOCKET_ENDPOINT = 'http://127.0.0.1:8082'

export const socketPostNewChecklist = data => dispatch => {
    dispatch({
        type: POST_NEW_CHECKLIST,
        payload: data
    })
}

export const postNewChecklist = (cardId, content) => (dispatch, getState) => {
    axios.post(`/api/checklist/${cardId}`, {
        content
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: POST_NEW_CHECKLIST,
                    payload: data.checklist
                })
                const socket = socketIOClient(SOCKET_ENDPOINT);
                const { user } = getState()
                const data2 = {
                    userEmail: user.email,
                    cardId
                }
                socket.emit('login', data2);
                socket.emit('add-new-checklist', data.checklist)
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const socketDeleteChecklist = data => dispatch => {
    dispatch({
        type: DELETE_CHECKLIST,
        payload: data
    })
}

export const deleteChecklist = (checklistId) => (dispatch, getState) => {
    axios.delete(`/api/checklist/${checklistId}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: DELETE_CHECKLIST,
                    payload: data.checklist
                })
                const socket = socketIOClient(SOCKET_ENDPOINT);
                const { user, card } = getState()
                const data2 = {
                    userEmail: user.email,
                    cardId: card.card.id
                }
                socket.emit('login', data2);
                socket.emit('delete-checklist', data.checklist)

            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const socketChangeContent = data => dispatch => {
    dispatch({
        type: CHANGE_CONTENT,
        payload: data
    })
}

export const changeContent = (checklistId, content) => (dispatch, getState) => {
    axios.put(`/api/checklist/content/${checklistId}`, {
        content
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: CHANGE_CONTENT,
                    payload: data.checklist
                })
                const socket = socketIOClient(SOCKET_ENDPOINT);
                const { user, card } = getState()
                const data2 = {
                    userEmail: user.email,
                    cardId: card.card.id
                }
                socket.emit('login', data2);
                socket.emit('edit-checklist', data.checklist)
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const socketToggleChecklist = (data) => dispatch => {
    dispatch({
        type: TOGGLE_CHECKLIST,
        payload: data
    })
}

export const toggleChecklist = (checklistId) => (dispatch, getState) => {
    axios.put(`/api/checklist/checked/${checklistId}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: TOGGLE_CHECKLIST,
                    payload: checklistId
                })
                const socket = socketIOClient(SOCKET_ENDPOINT);
                const { user, card } = getState()
                const data2 = {
                    userEmail: user.email,
                    cardId: card.card.id
                }
                socket.emit('login', data2);
                socket.emit('toggle-checklist', checklistId)

            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const fetchChecklists = (cardId) => dispatch => {
    axios.get(`/api/checklist/${cardId}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: FETCH_CHECKLISTS,
                    payload: data.checklists
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}