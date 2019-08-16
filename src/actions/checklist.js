import axios from 'axios';
import { FETCH_CHECKLISTS, TOGGLE_CHECKLIST } from './type';

export const toggleChecklist = (checklistId) => dispatch => {
    axios.put(`/api/checklist/checked/${checklistId}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: TOGGLE_CHECKLIST,
                    payload: checklistId
                })
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