import { FETCH_TEAMS, POST_NEW_TEAM, FETCH_A_TEAM } from "../actions/type";

const initialState = {
    teams: [],
    team: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TEAMS:
            return fetchTeams(state, action)
        case POST_NEW_TEAM:
            return postNewTeam(state, action)
        case FETCH_A_TEAM:
            return fetchATeam(state, action)

        default:
            return state;
    }
}

const fetchATeam = (state, action) => {
    return {
        ...state,
        team: action.payload
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