import { TURN_ON_TEAM_PHOTO_CHANGE_FORM, TURN_DOWN_TEAM_PHOTO_CHANGE_FORM } from "./type";

export const turnDownTeamPhotoChangeForm = () => dispatch => {
    dispatch({
        type: TURN_DOWN_TEAM_PHOTO_CHANGE_FORM
    })
}

export const turnOnTeamPhotoChangeForm = () => dispatch => {
    dispatch({
        type: TURN_ON_TEAM_PHOTO_CHANGE_FORM
    })
}