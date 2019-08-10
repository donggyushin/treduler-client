import { SET_USER_INFO, REMOVE_USER_INFO } from "../actions/type";

const initialState = {
    name: "",
    email: "",
    profilePhoto: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return setUserInfo(state, action);
        case REMOVE_USER_INFO:
            return removeUserInfo(state, action)
        default:
            return state;
    }
}

const removeUserInfo = (state, action) => {
    return {
        ...state,
        name: "",
        email: "",
        profilePhoto: ""
    }
}

const setUserInfo = (state, action) => {
    const { email, name, profilePhoto } = action.payload

    return {
        ...state,
        name,
        email,
        profilePhoto
    }
}