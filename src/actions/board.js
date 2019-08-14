import Axios from "axios";
import { MAKE_NEW_BOARD, FETCH_ALL_BOARDS, FETCH_A_BOARD, DELETE_BOARD } from "./type";

export const deleteBoard = (id) => dispatch => {
    Axios.delete(`/api/board/${id}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: DELETE_BOARD,
                    payload: id
                })
                window.location.href = "/"
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const fetABoard = (id) => dispatch => {
    Axios.get(`/api/board/${id}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: FETCH_A_BOARD,
                    payload: data.board
                })
            } else {
                alert(data.message)
            }
        })
}

export const fetchAllBoards = () => dispatch => {
    Axios.get('/api/board/', {
        headers: {
            'token': window.localStorage.getItem('jwt')
        }
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: FETCH_ALL_BOARDS,
                    payload: data.boards
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const postNewBoard = (title, backgroundImage) => dispatch => {
    Axios.post('/api/board/', {
        title, backgroundImage
    }, {
            headers: {
                'token': window.localStorage.getItem('jwt')
            }
        })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                console.log(data.board)
                dispatch({
                    type: MAKE_NEW_BOARD,
                    payload: data.board
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}