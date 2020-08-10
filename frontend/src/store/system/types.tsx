export interface SystemState {
    loggedIn: boolean
    username: string
}

export const LOGIN = 'LOGIN'
export const UPDATE_USERNAME = 'UPDATE_USERNAME'

interface LoginAction {
    type: typeof LOGIN
    payload: SystemState
}

interface UpdateUsernameAction {
    type: typeof UPDATE_USERNAME
    username: string
}

export type SystemActionTypes = LoginAction | UpdateUsernameAction