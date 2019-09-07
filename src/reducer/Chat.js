import { TURN_CHATTING_BOX_ON, TURN_CHATTING_BOX_DOWN, RECEIVE_CHATTING_MESSAGE } from "../actions/type";

const initialState = {
    visiable: false,
    chats: [],
    members: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TURN_CHATTING_BOX_ON:
            return turnChattingBoxOn(state, action);
        case TURN_CHATTING_BOX_DOWN:
            return turnChattingBoxDown(state, action);
        case RECEIVE_CHATTING_MESSAGE:
            return receiveChattingMessage(state, action);
        default:
            return state;
    }
}

const receiveChattingMessage = (state, action) => {
    return {
        ...state,
        chats: [
            ...state.chats,
            action.payload
        ]
    }
}

const turnChattingBoxDown = (state, action) => {
    if (state.visiable === true) {
        return {
            ...state,
            visiable: false
        }
    } else {
        return state
    }
}

const turnChattingBoxOn = (state, action) => {
    if (state.visiable === false) {

        return {
            ...state,
            visiable: true
        }
    } else {
        return state
    }
}

