const initialState = {
    isLoggedIn: localStorage.getItem('jwt') ? true : false
}

export default function (state = initialState, action) {
    switch (action.type) {


        default:
            return state;
    }
}

