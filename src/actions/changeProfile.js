import { CHANGE_PROFILE_TRUE, CHANGE_PROFILE_FALSE } from "./type";

export const changeProfileTrue = () => dispatch => {
    dispatch({
        type: CHANGE_PROFILE_TRUE
    })
}

export const changeProfileFalse = () => dispatch => {
    dispatch({
        type: CHANGE_PROFILE_FALSE
    })
}