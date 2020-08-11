import axios from 'axios'

class ThreadService {
    URI: string;
    constructor() {
        this.URI = 'http://localhost:5000/boards'
    }

    getAllThreads() {
        return axios.get(this.URI)
    }
}

export default ThreadService;