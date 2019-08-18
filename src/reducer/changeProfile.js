import { CHANGE_PROFILE_TRUE, CHANGE_PROFILE_FALSE } from "../actions/type";

const initialState = {
    changeProfile: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_PROFILE_TRUE:
            return changeProfileTrue(state, action)
        case CHANGE_PROFILE_FALSE:
            return changeProfileFalse(state, action)
        default:
            return state;
    }
}

const changeProfileFalse = (state, action) => {
    if (state.changeProfile === true) {
        return {
            ...state,
            changeProfile: false
        }
    } else {
        return state
    }
}

const changeProfileTrue = (state, action) => {
    if (state.changeProfile === false) {
        return {
            ...state,
            changeProfile: true
        }
    } else {
        return state
    }
}