import { FETCH__UNREAD_NOTIFICATIONS_NUMBER, FETCH_ALL_NOTIFICATIONS, READ_ALL_NOTIFICATIONS, DELETE_NOTIFICATION, DELETE_ALL_NOTIFICATIONS, ADD_NUMBER_ONE_UNREAD_NOTIFICATION } from "../actions/type";

const initialState = {
    notifications: [],
    unreadNotificationNumbers: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH__UNREAD_NOTIFICATIONS_NUMBER:
            return fetchUnreadNotificationsNumber(state, action)
        case FETCH_ALL_NOTIFICATIONS:
            return fetchAllNotifications(state, action)
        case READ_ALL_NOTIFICATIONS:
            return readAllNotifications(state, action)
        case DELETE_NOTIFICATION:
            return deleteNotification(state, action)
        case DELETE_ALL_NOTIFICATIONS:
            return deleteAllNotifications(state, action)
        case ADD_NUMBER_ONE_UNREAD_NOTIFICATION:
            return addNumberOneUnreadNotification(state, action)
        default:
            return state;
    }
}

const addNumberOneUnreadNotification = (state, action) => {
    return {
        ...state,
        unreadNotificationNumbers: state.unreadNotificationNumbers + 1
    }
}

const deleteAllNotifications = (state, action) => {
    return {
        ...state,
        notifications: []
    }
}

const deleteNotification = (state, action) => {
    const updatedNotifications = state.notifications.filter(notification => notification.id !== action.payload)
    return {
        ...state,
        notifications: updatedNotifications
    }
}

const readAllNotifications = (state, action) => {
    return {
        ...state,
        unreadNotificationNumbers: 0
    }
}

const fetchAllNotifications = (state, action) => {
    return {
        ...state,
        notifications: action.payload
    }
}

const fetchUnreadNotificationsNumber = (state, action) => {
    return {
        ...state,
        unreadNotificationNumbers: action.payload
    }
}