export interface ThreadsState {
    threads: Array<Thread>
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

interface UpdateThreadsAction {
    type: typeof UPDATE_THREADS
    payload: Array<Thread>
}

export type ThreadsActionTypes = UpdateThreadsAction