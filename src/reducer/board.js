import { MAKE_NEW_BOARD, FETCH_ALL_BOARDS, FETCH_A_BOARD } from "../actions/type";

const initialState = {
    boards: [],
    board: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case MAKE_NEW_BOARD:
            return makeNewBoard(state, action)
        case FETCH_ALL_BOARDS:
            return fetchAllBoards(state, action)
        case FETCH_A_BOARD:
            return fetchABoard(state, action)
        default:
            return state;
    }
}

const fetchABoard = (state, action) => {
    return {
        ...state,
        board: action.payload
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