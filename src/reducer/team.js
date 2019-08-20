import { FETCH_TEAMS, POST_NEW_TEAM } from "../actions/type";

const initialState = {
    teams: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TEAMS:
            return fetchTeams(state, action)
        case POST_NEW_TEAM:
            return postNewTeam(state, action)
        default:
            return state;
    }
}

const postNewTeam = (state, action) => {
    return {
        ...state,
        teams: [
            ...state.teams,
            action.payload
        ]
    }
}

const fetchTeams = (state, action) => {
    return {
        ...state,
        teams: action.payload
    }
}