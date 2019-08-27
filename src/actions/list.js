import axios from 'axios';
import { FETCH_ALL_LIST_WITH_CARDS, CREATE_NEW_LIST, DELETE_LIST, CREATE_NEW_CARD, DELETE_CARD } from './type';
import socketIOClient from 'socket.io-client';

export const socketDeleteCard = data => dispatch => {
    dispatch({
        type: DELETE_CARD,
        payload: data
    })
}

export const DeleteCard = (cardId) => (dispatch, getState) => {
    axios.delete(`/api/card/${cardId}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: DELETE_CARD,
                    payload: data.card
                })
                const endpoint = "http://127.0.0.1:8081"
                const socket = socketIOClient(endpoint);
                const { user, board } = getState()
                const boardId = board.board.id;
                const dataToSocket = {
                    board: {
                        id: boardId
                    },
                    user: {
                        email: user.email
                    }
                }
                socket.emit('login', dataToSocket);
                socket.emit('delete-card', data.card)
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const socketCreateNewCard = data => dispatch => {
    dispatch({
        type: CREATE_NEW_CARD,
        payload: data
    })
}

export const CreateNewCard = (listId, title) => (dispatch, getState) => {
    axios.post('/api/card/', {
        listId,
        title
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: CREATE_NEW_CARD,
                    payload: data.card
                })
                const endpoint = "http://127.0.0.1:8081"
                const socket = socketIOClient(endpoint);
                const { user, board } = getState()
                const boardId = board.board.id;
                const dataToSocket = {
                    board: {
                        id: boardId
                    },
                    user: {
                        email: user.email
                    }
                }
                socket.emit('login', dataToSocket);
                socket.emit('post-card', data.card)
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const socketDeleteList = (listId) => dispatch => {
    dispatch({
        type: DELETE_LIST,
        payload: listId
    })
}

export const DeleteList = (listId) => (dispatch, getState) => {
    axios.delete(`/api/list/${listId}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: DELETE_LIST,
                    payload: listId
                })
                const endpoint = "http://127.0.0.1:8081"
                const socket = socketIOClient(endpoint);
                const { user, board } = getState()
                const boardId = board.board.id;
                const dataToSocket = {
                    board: {
                        id: boardId
                    },
                    user: {
                        email: user.email
                    }
                }
                socket.emit('login', dataToSocket);
                socket.emit('delete-list', listId)
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const socketCreateNewList = data => dispatch => {
    dispatch({
        type: CREATE_NEW_LIST,
        payload: data
    })
}

export const createNewList = (title, boardId) => (dispatch, getState) => {
    axios.post(`/api/list/`, {
        title,
        boardId
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                const newList = data.list
                console.log('here')
                dispatch({
                    type: CREATE_NEW_LIST,
                    payload: newList
                })
                const endpoint = "http://127.0.0.1:8081"
                const socket = socketIOClient(endpoint);
                const { user } = getState()
                const data2 = {
                    board: {
                        id: boardId
                    },
                    user: {
                        email: user.email
                    }
                }
                socket.emit('login', data2)
                socket.emit('post-new-list', newList)

            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const fetAllListsWithCards = boardId => dispatch => {
    axios.get(`/api/list/${boardId}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: FETCH_ALL_LIST_WITH_CARDS,
                    payload: data.lists
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}