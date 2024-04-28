import axios from 'axios'

export function axiosWithToken() {
    const token = sessionStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}