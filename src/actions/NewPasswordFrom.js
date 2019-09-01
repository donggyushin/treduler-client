import { TURN_NEW_PASSWORD_FORM, TURN_NEW_PASSWORD_FORM_DOWN } from "./type";

export const turnNewPasswordFromOn = () => dispatch => {
    dispatch({
        type: TURN_NEW_PASSWORD_FORM
    })
}

export const turnNewPasswordFormDown = () => dispatch => {
    dispatch({
        type: TURN_NEW_PASSWORD_FORM_DOWN
    })
}