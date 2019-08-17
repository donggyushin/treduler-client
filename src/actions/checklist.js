import axios from 'axios';
import { FETCH_CHECKLISTS, TOGGLE_CHECKLIST, CHANGE_CONTENT, DELETE_CHECKLIST, POST_NEW_CHECKLIST } from './type';

export const postNewChecklist = (cardId, content) => dispatch => {
    axios.post(`/api/checklist/${cardId}`, {
        content
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: POST_NEW_CHECKLIST,
                    payload: data.checklist
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const deleteChecklist = (checklistId) => dispatch => {
    axios.delete(`/api/checklist/${checklistId}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: DELETE_CHECKLIST,
                    payload: data.checklist
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const changeContent = (checklistId, content) => dispatch => {
    axios.put(`/api/checklist/content/${checklistId}`, {
        content
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: CHANGE_CONTENT,
                    payload: data.checklist
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

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