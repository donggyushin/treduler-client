import { TURN_CHATTING_BOX_ON } from "../actions/type";

const initialState = {
    visiable: false,
    chats: [],
    members: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TURN_CHATTING_BOX_ON:
            return turnChattingBoxOn(state, action);
        default:
            return state;
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

