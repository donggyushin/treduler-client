import { FETCH_ALL_LIST_WITH_CARDS } from "../actions/type";

const initialState = {
    lists: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_LIST_WITH_CARDS:

            return fetchAllListWithCards(state, action)
        default:
            return state;
    }
}

const fetchAllListWithCards = (state, action) => {
    console.log(action.payload)
    return {
        ...state,
        lists: action.payload
    }
}

