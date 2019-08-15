import { FETCH_CARD, PUT_DESC, FETCH_CHECKLISTS, TOGGLE_CHECK, CHANGE_CHECKLIST_CONTENT, POST_CHECKLIST, DELETE_CHECKLIST } from "../actions/type";

const initialState = {
    card: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CARD:
            return fetchCard(state, action)
        case PUT_DESC:
            return putCard(state, action)
        case FETCH_CHECKLISTS:
            return fetchChecklists(state, action)
        case TOGGLE_CHECK:
            return toggleCheck(state, action)
        case CHANGE_CHECKLIST_CONTENT:
            return changeContent(state, action)
        case POST_CHECKLIST:
            return postChecklist(state, action)
        case DELETE_CHECKLIST:
            return deleteChecklist(state, action)
        default:
            return state;
    }
}

const deleteChecklist = (state, action) => {
    const updatedLists = []
    state.card.checklists.map(checklist => {
        if (checklist.id !== action.payload.id) {
            updatedLists.push(checklist)
        }
    })

    return {
        ...state,
        card: {
            ...state.card,
            checklists: updatedLists
        }
    }
}

const postChecklist = (state, action) => {
    if (state.card.checklists) {
        return {
            ...state,
            card: {
                ...state.card,
                checklists: [
                    ...state.card.checklists,
                    action.payload
                ]
            }
        }
    } else {
        return {
            ...state,
            card: {
                ...state.card,
                checklists: [
                    action.payload
                ]
            }
        }
    }
}

const changeContent = (state, action) => {
    const updatedChecklists = []
    state.card.checklists.map(checklist => {
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
        card: {
            ...state.card,
            checklists: updatedChecklists
        }
    }

}

const toggleCheck = (state, action) => {
    const updatedChecklists = []
    state.card.checklists.map(checklist => {
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
        ...state,
        card: {
            ...state.card,
            checklists: updatedChecklists
        }
    }
}

const fetchChecklists = (state, action) => {
    return {
        ...state,
        card: {
            ...state.card,
            checklists: action.payload
        }
    }
}

const putCard = (state, action) => {
    return {
        ...state,
        card: {
            ...state.card,
            description: action.payload.description
        }
    }
}

const fetchCard = (state, action) => {
    const card = action.payload
    return {
        ...state,
        card
    }
}