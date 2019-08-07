import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authentication from "./authentication"

const initialState = {};

const allReducers = combineReducers({
    authentication
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReducers, initialState, composeEnhancer(
        applyMiddleware(thunk)
    )
)

export default store;