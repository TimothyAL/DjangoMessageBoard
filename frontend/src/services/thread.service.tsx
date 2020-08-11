import axios from 'axios'

class ThreadService {
    URI: string;
    constructor() {
        this.URI = 'http://localhost:5001/boards'
    }

    getAllThreads() {
        return axios.get(this.URI)
    }
}

export default ThreadService;