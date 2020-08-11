import {
    ThreadsState,
    ThreadsActionTypes,
    UPDATE_THREADS
} from './types'

const initialState: ThreadsState = {
    threads: []
}

export function threadReducer(
    state = initialState,
    action: ThreadsActionTypes
): ThreadsState {
    switch (action.type) {
        case UPDATE_THREADS:
            return Object.assign({}, state, {threads: action.payload})
        default:
            return state
    }
}