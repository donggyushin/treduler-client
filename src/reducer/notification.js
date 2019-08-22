import { FETCH__UNREAD_NOTIFICATIONS_NUMBER } from "../actions/type";

const initialState = {
    notifications: [],
    unreadNotificationNumbers: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH__UNREAD_NOTIFICATIONS_NUMBER:
            return fetchUnreadNotificationsNumber(state, action)
        default:
            return state;
    }
}

const fetchUnreadNotificationsNumber = (state, action) => {
    return {
        ...state,
        unreadNotificationNumbers: action.payload
    }
}