import axios from 'axios';
import { FETCH_COMMENTS } from './type';

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