import { FETCH_CHECKLISTS, TOGGLE_CHECKLIST, CHANGE_CONTENT, DELETE_CHECKLIST, POST_NEW_CHECKLIST } from "../actions/type";

const initialState = {
    checklists: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CHECKLISTS:
            return fetchChecklists(state, action)
        case TOGGLE_CHECKLIST:
            return toggleChecklist(state, action)
        case CHANGE_CONTENT:
            return changeChecklist(state, action)
        case DELETE_CHECKLIST:
            return deleteChecklist(state, action)
        case POST_NEW_CHECKLIST:
            return postNewChecklist(state, action)
        default:
            return state;
    }
}

const postNewChecklist = (state, action) => {
    return {
        ...state,
        checklists: [
            ...state.checklists,
            action.payload
        ]
    }
}

const deleteChecklist = (state, action) => {
    const updatedChecklists = state.checklists.filter(checklist => checklist.id !== action.payload.id)
    return {
        ...state,
        checklists: updatedChecklists
    }
}

const changeChecklist = (state, action) => {
    const updatedChecklists = []
    state.checklists.map(checklist => {
        if (checklist.id === action.payload.id) {
            const updatedChecklist = {
                ...checklist,
                content: action.payload.content
            }
            updatedChecklists.push(updatedChecklist)
        } else {
            updatedChecklists.push(checklist)
        }
    })
    return {
        ...state,
        checklists: updatedChecklists
    }
}

const toggleChecklist = (state, action) => {
    const updatedChecklists = []
    state.checklists.map(checklist => {
        if (checklist.id === action.payload) {
            const updatedChecklist = {
                ...checklist,
                checked: !checklist.checked
            }
            updatedChecklists.push(updatedChecklist)
        } else {
            updatedChecklists.push(checklist)
        }
    })
    return {
        checklists: updatedChecklists
    }
}

const fetchChecklists = (state, action) => {
    return {
        ...state,
        checklists: action.payload
    }
}