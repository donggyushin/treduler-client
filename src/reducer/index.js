import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authentication from "./authentication"
import user from './user'
import board from './board'
import list from './list'
import card from './card'
import comment from './comment'
import checklist from './checklist'
import changeProfile from './changeProfile'
import addNewTeamForm from './AddNewTeamForm'
import createNewTeamBoard from './CreateNewTeamBoard'
import team from './team'
import notification from './notification'
import Invitation from './Invitation'

const initialState = {};

const allReducers = combineReducers({
    authentication,
    user,
    board,
    list,
    card,
    comment,
    checklist,
    changeProfile,
    addNewTeamForm,
    team,
    createNewTeamBoard,
    notification,
    Invitation
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReducers, initialState, composeEnhancer(
        applyMiddleware(thunk)
    )
)

export default store;