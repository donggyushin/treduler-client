import { TURN_CHATTING_BOX_ON, TURN_CHATTING_BOX_DOWN, RECEIVE_CHATTING_MESSAGE } from "./type"

export const receiveChattingMessage = (chattingMessage) => dispatch => {
    dispatch({
        type: RECEIVE_CHATTING_MESSAGE,
        payload: chattingMessage
    })
}

export const turnChattingBoxOn = () => dispatch => {
    dispatch({
        type: TURN_CHATTING_BOX_ON
    })
}

export const turnChattingBoxDown = () => dispatch => {
    dispatch({
        type: TURN_CHATTING_BOX_DOWN
    })
}