import {
    SystemState,
    SystemActionTypes,
    LOGIN,
    UPDATE_USERNAME
} from './types'

const initialState: SystemState = {
    loggedIn: false,
    username: ''
}

export function systemReducer(
    state = initialState,
    action: SystemActionTypes
): SystemState {
    switch (action.type) {
        case UPDATE_USERNAME:
            return Object.assign({}, state, {username: action.username})
        case LOGIN:
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}