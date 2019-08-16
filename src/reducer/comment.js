import { FETCH_COMMENTS } from "../actions/type";

const initialState = {
    comments: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return fetchComments(state, action)

        default:
            return state;
    }
}

const fetchComments = (state, action) => {
    return {
        ...state,
        comments: action.payload
    }
}