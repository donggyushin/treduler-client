import axios from 'axios';
import { FETCH_CARD, PUT_DESC, SHUT_DOWN_CARD, } from './type';

export const shutDownCard = () => dispatch => {
    dispatch({
        type: SHUT_DOWN_CARD
    })
}



export const putDesc = (id, desc) => dispatch => {
    axios.put(`/api/card/desc/${id}`, { desc })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: PUT_DESC,
                    payload: data.card
                })
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