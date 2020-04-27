import axios from 'axios'

const axiosWithAuth = () => {

    const token = JSON.parse(localStorage.getItem('token'));

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL:'api url' /*here goes the actural url for the api*/
    })
}