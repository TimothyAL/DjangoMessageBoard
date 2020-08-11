import {
    ThreadsState,
    ThreadsActionTypes,
    UPDATE_THREADS,
    UPDATE_CURRENT_AUTHOR, 
    UPDATE_CURRENT_TITLE,
    UPDATE_CURRENT_CONTENT,
    UPDATE_CURRENT_DATE,
    UPDATE_CURRENT_ID,
} from './types'

const initialState: ThreadsState = {
    threads: [], 
    currentThread: {
        _id: -1,
        author: '',
        title: '',
        date: '',
        content: '',
        comments: []
    }
}

export function threadReducer(
    state = initialState,
    action: ThreadsActionTypes
): ThreadsState {
    switch (action.type) {
        case UPDATE_THREADS:
            return Object.assign({}, state, {threads: action.payload})
        case UPDATE_CURRENT_AUTHOR:
            return Object.assign({}, state, {
                currentThread: Object.assign({}, state.currentThread, {author: action.author})
            })
        case UPDATE_CURRENT_TITLE:
            return Object.assign({}, state, {
                currentThread: Object.assign({}, state.currentThread, {title: action.title})
            })  
        case UPDATE_CURRENT_DATE:
            return Object.assign({}, state, {
                currentThread: Object.assign({}, state.currentThread, {date: action.date})
            })  
        case UPDATE_CURRENT_CONTENT:
            return Object.assign({}, state, {
                currentThread: Object.assign({}, state.currentThread, {content: action.content})
            }) 
        case UPDATE_CURRENT_ID:
            return Object.assign({}, state, {
                currentThread: Object.assign({}, state.currentThread, {_id: action.id})
            }) 
        default:
            return state
    }
}