import { LOGIN_USER } from "../actions/type";

const initialState = {
    isLoggedIn: localStorage.getItem('jwt') ? true : false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            loginUser(state, action)
        default:
            return state;
    }
}


const loginUser = (state, action) => {
    window.localStorage.setItem('jwt', action.token)
    return {
        ...state,
        isLoggedIn: true
    }
}
