import { TURN_ON_TEAM_PHOTO_CHANGE_FORM, TURN_DOWN_TEAM_PHOTO_CHANGE_FORM } from "../actions/type";

const initialState = {
    view: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TURN_ON_TEAM_PHOTO_CHANGE_FORM:
            return turnOnTeamPhotoChangeForm(state, action)
        case TURN_DOWN_TEAM_PHOTO_CHANGE_FORM:
            return turnDownTeamPhotoChangeForm(state, action)
        default:
            return state;
    }
}

const turnDownTeamPhotoChangeForm = (state, action) => {
    if (state.view === true) {
        return {
            ...state,
            view: false
        }
    } else {
        return state;
    }
}

const turnOnTeamPhotoChangeForm = (state, action) => {
    if (state.view === false) {
        return {
            ...state,
            view: true
        }
    } else {
        return state;
    }
}