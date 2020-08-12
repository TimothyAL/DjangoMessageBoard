import axios, { AxiosResponse } from 'axios'
import {Thread} from '../store/threads/types'

class ThreadService {
    URI: string;
    constructor() {
        this.URI = 'http://localhost:5001/boards'
    }

    getAllThreads() {
        return axios.get(this.URI)
    }

    postThread(thread: Thread ) {
        return axios.post(this.URI, thread)

    }
}

export default ThreadService;