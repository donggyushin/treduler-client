import { FETCH_COMMENTS, POST_COMMENT, DELETE_COMMENT } from "../actions/type";

const initialState = {
    comments: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return fetchComments(state, action)
        case POST_COMMENT:
            return postComment(state, action)
        case DELETE_COMMENT:
            return deleteComment(state, action)
        default:
            return state;
    }
}

const deleteComment = (state, action) => {
    const updatedComments = state.comments.filter(comment => comment.id !== action.payload.id)
    return {
        ...state,
        comments: updatedComments
    }
}

const postComment = (state, action) => {
    return {
        ...state,
        comments: [
            ...state.comments,
            action.payload
        ]
    }
}

const fetchComments = (state, action) => {
    return {
        ...state,
        comments: action.payload
    }
}