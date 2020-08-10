import {SystemState, LOGIN, UPDATE_USERNAME, SystemActionTypes } from './types'

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