import { TURN_CHATTING_BOX_ON } from "./type"

export const turnChattingBoxOn = () => dispatch => {
    dispatch({
        type: TURN_CHATTING_BOX_ON
    })
}