import { TURN_ON_CREATE_NEW_TEAM_BOARD, TURN_DOWN_CREATE_NEW_TEAM_BOARD } from "./type";

export const turnDownCreateNewBoard = () => dispatch => {
    dispatch({
        type: TURN_DOWN_CREATE_NEW_TEAM_BOARD
    })
}

export const turnOnCreateNewBoard = () => dispatch => {
    dispatch({
        type: TURN_ON_CREATE_NEW_TEAM_BOARD
    })
}