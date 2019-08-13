import { FETCH_ALL_LIST_WITH_CARDS, CREATE_NEW_LIST, DELETE_LIST, CREATE_NEW_CARD } from "../actions/type";

const initialState = {
    lists: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_LIST_WITH_CARDS:
            return fetchAllListWithCards(state, action)
        case CREATE_NEW_LIST:
            return createNewList(state, action)
        case DELETE_LIST:
            return deleteList(state, action)
        case CREATE_NEW_CARD:
            return createNewCard(state, action)
        default:
            return state;
    }
}

const createNewCard = (state, action) => {
    const newLists = []
    state.lists.map(list => {
        if (list.id === action.payload.listId) {
            const newCard = action.payload
            const updatedList = {
                ...list,
                cards: [
                    ...list.cards,
                    { ...newCard }
                ]
            }
            newLists.push(updatedList)
        } else {
            newLists.push(list)
        }
    })
    return {
        ...state,
        lists: newLists
    }
}

const deleteList = (state, action) => {
    const newLists = state.lists.filter(list => list.id !== action.payload)
    return {
        lists: newLists
    }
}

const createNewList = (state, action) => {
    console.log('here')
    return {
        ...state,
        lists: [
            ...state.lists,
            action.payload
        ]
    }
}

const fetchAllListWithCards = (state, action) => {

    return {
        ...state,
        lists: action.payload
    }
}

