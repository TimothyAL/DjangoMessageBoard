import {
    SystemState,
    SystemActionTypes,
    LOGIN,
    UPDATE_USERNAME,
    UPDATE_PASSWORD
} from './types'

const initialState: SystemState = {
    loggedIn: false,
    username: '',
    password: ''
}

export function systemReducer(
    state = initialState,
    action: SystemActionTypes
): SystemState {
    switch (action.type) {
        case UPDATE_USERNAME:
            return Object.assign({}, state, {username: action.username})
        case UPDATE_PASSWORD:
            return Object.assign({}, state, {password: action.password})
        case LOGIN:
            return Object.assign({}, state, {loggedIn: action.payload})
        default:
            return state
    }
}