import { TURN_ADD_NEW_TEAM_FORM_ON, TURN_ADD_NEW_TEAM_FORM_DOWN } from './type';

export const turnAddNewTeamOn = () => dispatch => {
    dispatch({
        type: TURN_ADD_NEW_TEAM_FORM_ON
    })
}

export const turnAddNewTeamDown = () => dispatch => {
    dispatch({
        type: TURN_ADD_NEW_TEAM_FORM_DOWN
    })
}