import { FETCH_CHECKLISTS, TOGGLE_CHECKLIST } from "../actions/type";

const initialState = {
    checklists: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CHECKLISTS:
            return fetchChecklists(state, action)
        case TOGGLE_CHECKLIST:
            return toggleChecklist(state, action)
        default:
            return state;
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