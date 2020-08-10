import axios from 'axios'

class UserService {
    URI: string;
    constructor() {
        this.URI = 'http://localhost:8000'
    }

    login(username: string) {
        return axios.post(this.URI + '/user/' + username, username)
    }

    useLogin(username: string) {
        return this.login(username)
    }
}


export default UserService;