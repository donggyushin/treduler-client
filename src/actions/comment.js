import axios from 'axios';
import { FETCH_COMMENTS, POST_COMMENT, DELETE_COMMENT } from './type';

export const deleteComment = commentId => dispatch => {
    axios.delete(`/api/comment/${commentId}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: DELETE_COMMENT,
                    payload: data.comment
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const postComment = (cardId, message) => dispatch => {
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