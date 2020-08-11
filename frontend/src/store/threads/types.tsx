export interface ThreadsState {
    threads: Array<Thread>, 
    currentThread: Thread
}

export interface Thread {
    _id: number
    author: string
    title: string
    content: string
    date: string
    comments: Array<ThreadComment>
}

export interface ThreadComment {
    author: string
    content: string
    date: string
}

export const UPDATE_THREADS = 'UPDATE_THREADS'
export const UPDATE_CURRENT_AUTHOR = 'UPDATE_CURRENT_AUTHOR'
export const UPDATE_CURRENT_TITLE = 'UPDATE_CURRENT_TITLE'
export const UPDATE_CURRENT_CONTENT = 'UPDATE_CURRENT_CONTENT'
export const UPDATE_CURRENT_DATE = 'UPDATE_CURRENT_DATE'
export const UPDATE_CURRENT_ID = 'UPDATE_CURRENT_ID'


interface UpdateThreadsAction {
    type: typeof UPDATE_THREADS
    payload: Array<Thread>
}

interface UpdateCurrentAuthorAction {
    type: typeof UPDATE_CURRENT_AUTHOR
    author: string
}

interface UpdateCurrentTitleAction {
    type: typeof UPDATE_CURRENT_TITLE
    title: string
}

interface UpdateCurrentContentAction {
    type: typeof UPDATE_CURRENT_CONTENT
    content: string
}

interface UpdateCurrentDateAction {
    type: typeof UPDATE_CURRENT_DATE
    date: string
}

interface UpdateCurrentIDAction {
    type: typeof UPDATE_CURRENT_ID
    id: number
}

export type ThreadsActionTypes = UpdateThreadsAction | UpdateCurrentAuthorAction | UpdateCurrentContentAction | UpdateCurrentDateAction | UpdateCurrentTitleAction | UpdateCurrentIDAction