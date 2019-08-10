import { LOGIN_USER, LOGOUT_USER } from "../actions/type";

const initialState = {
    isLoggedIn: localStorage.getItem('jwt') ? true : false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return loginUser(state, action)

        case LOGOUT_USER:
            return logoutUser(state, action)

        default:
            return state;
    }
}

const logoutUser = (state, action) => {

    window.localStorage.removeItem('jwt')
    return {
        ...state,
        isLoggedIn: false
    }
}


const loginUser = (state, action) => {
    console.log('login user')
    window.localStorage.setItem('jwt', action.token)
    return {
        ...state,
        isLoggedIn: true
    }
}
