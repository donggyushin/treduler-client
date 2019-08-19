import { FETCH_TEAMS } from "../actions/type";

const initialState = {
    teams: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TEAMS:
            return fetchTeams(state, action)
        default:
            return state;
    }
}

const fetchTeams = (state, action) => {
    return {
        ...state,
        teams: action.payload
    }
}