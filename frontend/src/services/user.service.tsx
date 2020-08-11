import axios from 'axios'

class UserService {
    URI: string;
    constructor() {
        this.URI = 'http://localhost:5000'
    }

    login(username: string, password: string) {
        return axios.post(this.URI + '/users/' + username, {username: username, password: password})
    }

    useLogin(username: string, password: string) {
        return this.login(username, password)
    }
}


export default UserService;