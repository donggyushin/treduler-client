import { TURN_ADD_NEW_TEAM_FORM_ON, TURN_ADD_NEW_TEAM_FORM_DOWN } from "../actions/type";

const initialState = {
    view: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TURN_ADD_NEW_TEAM_FORM_ON:
            return turnAddNewTeamFormOn(state, action)
        case TURN_ADD_NEW_TEAM_FORM_DOWN:
            return turnAddNewTeamDown(state, action)
        default:
            return state
    }
}

const turnAddNewTeamDown = (state, action) => {
    if (state.view === true) {
        return {
            ...state,
            view: false
        }
    } else {
        return state
    }

}

const turnAddNewTeamFormOn = (state, action) => {
    if (state.view === false) {
        return {
            ...state,
            view: true
        }
    } else {
        return state
    }

}