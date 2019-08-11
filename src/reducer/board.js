import { MAKE_NEW_BOARD, FETCH_ALL_BOARDS } from "../actions/type";

const initialState = {
    boards: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case MAKE_NEW_BOARD:
            return makeNewBoard(state, action)
        case FETCH_ALL_BOARDS:
            return fetchAllBoards(state, action)
        default:
            return state;
    }
}

const fetchAllBoards = (state, action) => {
    return {
        ...state,
        boards: action.payload
    }
}

const makeNewBoard = (state, action) => {
    const newBoard = action.payload;
    return {
        ...state,
        boards: [
            ...state.boards,
            newBoard
        ]
    }
}