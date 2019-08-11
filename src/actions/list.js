import axios from 'axios';
import { FETCH_ALL_LIST_WITH_CARDS } from './type';

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