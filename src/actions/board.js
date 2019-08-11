import Axios from "axios";
import { MAKE_NEW_BOARD, FETCH_ALL_BOARDS } from "./type";

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