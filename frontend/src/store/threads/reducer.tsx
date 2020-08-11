import {
    ThreadsState,
    ThreadsActionTypes,
    UPDATE_THREADS
} from './types'

const initialState: ThreadsState = {
    threads: [{
        author: 'test user',
        title: 'Title',
        content: 'Test thread for testing',
        date:'TEST DATE',
        comments: []
    },{
        author: 'test user2',
        title: 'Title 2',
        content: 'Test thread for testing, the second',
        date:'TEST DATE',
        comments: []
    }]
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