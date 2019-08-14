import { FETCH_CARD, PUT_DESC } from "../actions/type";

const initialState = {
    card: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CARD:
            return fetchCard(state, action)
        case PUT_DESC:
            return putCard(state, action)
        default:
            return state;
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
        card
    }
}