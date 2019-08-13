import axios from 'axios';
import { FETCH_ALL_LIST_WITH_CARDS, CREATE_NEW_LIST, DELETE_LIST, CREATE_NEW_CARD } from './type';

export const CreateNewCard = (listId, title) => dispatch => {
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
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const DeleteList = (listId) => dispatch => {
    axios.delete(`/api/list/${listId}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: DELETE_LIST,
                    payload: listId
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const createNewList = (title, boardId) => dispatch => {
    axios.post(`/api/list/`, {
        title,
        boardId
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                const newList = data.list
                dispatch({
                    type: CREATE_NEW_LIST,
                    payload: newList
                })
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