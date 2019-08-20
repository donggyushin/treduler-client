import { TURN_ON_CREATE_NEW_TEAM_BOARD, TURN_DOWN_CREATE_NEW_TEAM_BOARD } from "../actions/type";

const initialState = {
    view: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TURN_ON_CREATE_NEW_TEAM_BOARD:
            return turnOnCreateNewTeamBoard(state, action)
        case TURN_DOWN_CREATE_NEW_TEAM_BOARD:
            return turnDownCreateNewTeamBoard(state, action)
        default:
            return state
    }
}

const turnDownCreateNewTeamBoard = (state, action) => {
    if (state.view === true) {
        return {
            ...state,
            view: false
        }
    } else {
        return state
    }
}

const turnOnCreateNewTeamBoard = (state, action) => {
    if (state.view === false) {
        return {
            ...state,
            view: true
        }
    } else {
        return state
    }
}