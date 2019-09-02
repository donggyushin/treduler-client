import axios from 'axios';
import { FETCH_CARD, PUT_DESC, SHUT_DOWN_CARD, } from './type';
import socketIOClient from 'socket.io-client';
import { ENDPOINT } from '../constants/endpoint';
const SOCKET_ENDPOINT = ENDPOINT + ':8082'

export const shutDownCard = () => dispatch => {
    dispatch({
        type: SHUT_DOWN_CARD
    })
}

export const socketPutDesc = data => (dispatch) => {
    dispatch({
        type: PUT_DESC,
        payload: data
    })
}

export const putDesc = (id, desc) => (dispatch, getState) => {
    axios.put(`/api/card/desc/${id}`, { desc })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: PUT_DESC,
                    payload: data.card
                })
                const socket = socketIOClient(SOCKET_ENDPOINT);
                const { user } = getState();
                const data2 = {
                    userEmail: user.email,
                    cardId: id
                }
                socket.emit('login', data2)
                socket.emit('edit-card-description', data.card)

            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const fetchCard = (id) => dispatch => {
    axios.get(`/api/card/${id}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: FETCH_CARD,
                    payload: data.card
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}