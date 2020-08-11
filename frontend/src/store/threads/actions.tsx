import {ThreadsState, Thread, UPDATE_THREADS, ThreadsActionTypes} from './types'

export function updateThreads(newThreads: Array<Thread>): ThreadsActionTypes {
    return {
        type: UPDATE_THREADS,
        payload: newThreads
    }
}