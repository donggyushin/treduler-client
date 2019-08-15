import axios from 'axios';
import { FETCH_CARD, PUT_DESC, FETCH_CHECKLISTS, TOGGLE_CHECK, CHANGE_CHECKLIST_CONTENT, POST_CHECKLIST, DELETE_CHECKLIST } from './type';

export const deleteChecklist = checklistId => dispatch => {
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

export const postCheckList = (cardId, content) => dispatch => {
    axios.post(`/api/checklist/${cardId}`, {
        content
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: POST_CHECKLIST,
                    payload: data.checklist
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const changeChecklistContent = (checklistId, content) => dispatch => {
    axios.put(`/api/checklist/content/${checklistId}`, {
        content
    })
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: CHANGE_CHECKLIST_CONTENT,
                    payload: data.checklist
                })
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
}

export const toggleCheck = (checklistId) => dispatch => {

    axios.put(`/api/checklist/checked/${checklistId}`)
        .then(res => res.data)
        .then(data => {
            if (data.ok) {
                dispatch({
                    type: TOGGLE_CHECK,
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