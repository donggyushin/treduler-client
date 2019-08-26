import { FETCH_TEAMS, POST_NEW_TEAM, FETCH_A_TEAM, CREATE_NEW_TEAM_BOARD, CHANGE_TEAM_PHOTO } from "../actions/type";

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
        case CREATE_NEW_TEAM_BOARD:
            return createNewTeamBoard(state, action)
        case CHANGE_TEAM_PHOTO:
            return changeTeamPhoto(state, action)
        default:
            return state;
    }
}

const changeTeamPhoto = (state, action) => {
    return {
        ...state,
        team: {
            ...state.team,
            photo: action.payload.photo
        }
    }
}

const createNewTeamBoard = (state, action) => {

    const updatedTeams = []
    state.teams.map(team => {
        console.log('team.id: ', team.id)
        console.log('action payload team: ', action.payload.team)
        if (team.id === parseInt(action.payload.team)) {
            console.log('here')
            const updatedTeam = {
                ...team,
                boards: [
                    ...team.boards,
                    action.payload
                ]
            }
            updatedTeams.push(updatedTeam)
        } else {
            return updatedTeams.push(team)
        }
    })

    return {
        ...state,
        teams: updatedTeams
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