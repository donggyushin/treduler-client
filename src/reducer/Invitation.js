import { TURN_ON_INVITATION, TURN_DOWN_INVITATION } from "../actions/type";

const initialState = {
    show: false,
    senderEmail: "",
    teamId: "",
    user: {},
    team: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TURN_ON_INVITATION:
            return turnOnInvitation(state, action)
        case TURN_DOWN_INVITATION:
            return turnDownInvitation(state, action)
        default:
            return state
    }
}

const turnDownInvitation = (state, action) => {
    if (state.show === true) {
        return {
            ...state,
            show: false,

        }
    } else {
        return state;
    }
}

const turnOnInvitation = (state, action) => {
    if (state.show === false) {
        return {
            ...state,
            show: true,
            senderEmail: action.payload.senderEmail,
            teamId: action.payload.teamId,
            user: action.payload.user,
            team: action.payload.team
        }
    } else {
        return state;
    }
}