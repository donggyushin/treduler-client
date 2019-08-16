import { FETCH_CARD, PUT_DESC, SHUT_DOWN_CARD } from "../actions/type";

const initialState = {
    visible: false,
    card: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CARD:
            return fetchCard(state, action)
        case PUT_DESC:
            return putCard(state, action)
        case SHUT_DOWN_CARD:
            return shutdownCard(state, action)
        default:
            return state;
    }
}

const shutdownCard = (state, action) => {
    return {
        visible: false,
        card: {}
    }
}

const putCard = (state, action) => {
    return {
        ...state,
        card: {
            ...state.card,
            description: action.payload.description
        }
    }
}

const fetchCard = (state, action) => {
    const card = action.payload
    return {
        ...state,
        visible: true,
        card
    }
}