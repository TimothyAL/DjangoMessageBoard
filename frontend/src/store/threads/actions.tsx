import {
ThreadsState, 
Thread, 
UPDATE_THREADS,
UPDATE_CURRENT_AUTHOR, 
UPDATE_CURRENT_TITLE,
UPDATE_CURRENT_CONTENT,
UPDATE_CURRENT_DATE,
UPDATE_CURRENT_ID,
ThreadsActionTypes
} from './types'

export function updateThreads(newThreads: Array<Thread>): ThreadsActionTypes {
    return {
        type: UPDATE_THREADS,
        payload: newThreads
    }
}

export function updateCurrentAuthor(newAuthor: string): ThreadsActionTypes {
    return {
        type: UPDATE_CURRENT_AUTHOR,
        author: newAuthor
    }
}

export function updateCurrentTitle(newTitle: string): ThreadsActionTypes {
    return {
        type: UPDATE_CURRENT_TITLE,
        title: newTitle
    }
}

export function updateCurrentContent(newContent: string): ThreadsActionTypes {
    return {
        type: UPDATE_CURRENT_CONTENT,
        content: newContent
    }
}

export function updateCurrentDate(newDate: string): ThreadsActionTypes {
    return {
        type: UPDATE_CURRENT_DATE,
        date: newDate
    }
}

export function updateCurrentID(newID: number): ThreadsActionTypes {
    return {
        type: UPDATE_CURRENT_ID,
        id: newID
    }
}