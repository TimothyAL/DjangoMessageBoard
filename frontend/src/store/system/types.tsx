export interface SystemState {
    loggedIn: boolean
    username: string
    password: string
}

export const LOGIN = 'LOGIN'
export const UPDATE_USERNAME = 'UPDATE_USERNAME'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'


interface LoginAction {
    type: typeof LOGIN
    payload: SystemState
}

interface UpdateUsernameAction {
    type: typeof UPDATE_USERNAME
    username: string
}

interface UpdatePasswordAction {
    type: typeof UPDATE_PASSWORD
    password: string
}

export type SystemActionTypes = LoginAction | UpdateUsernameAction | UpdatePasswordAction;