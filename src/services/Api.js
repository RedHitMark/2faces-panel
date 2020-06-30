import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: `http://localhost:9999/api/v1.0`
    })
}
