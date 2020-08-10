import {SystemState, LOGIN, UPDATE_USERNAME, UPDATE_PASSWORD, SystemActionTypes } from './types'

export function updateLogin(newLogin: SystemState): SystemActionTypes {
    return {
        type: LOGIN,
        payload: newLogin
    }
}

export function updateUsername(newUsername: string): SystemActionTypes {
    return {
        type: UPDATE_USERNAME,
        username: newUsername
    }
}

export function updatePassword(newPassword: string): SystemActionTypes {
    return {
        type: UPDATE_PASSWORD,
        password: newPassword
    }
}