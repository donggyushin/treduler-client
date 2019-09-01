import { TURN_NEW_PASSWORD_FORM, TURN_NEW_PASSWORD_FORM_DOWN } from "../actions/type";

const initialState = {
    view: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TURN_NEW_PASSWORD_FORM:
            return turnNewPasswordFormOn(state, action);
        case TURN_NEW_PASSWORD_FORM_DOWN:
            return turnNewPasswordFormDown(state, action)
        default:
            return state;
    }
}

const turnNewPasswordFormDown = (state, action) => {
    if (state.view === true) {
        return {
            ...state,
            view: false
        }
    } else {
        return state;
    }
}

const turnNewPasswordFormOn = (state, action) => {
    if (state.view === false) {
        return {
            ...state,
            view: true
        }
    } else {
        return state;
    }
}

