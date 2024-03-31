import axios from 'axios'

const token = sessionStorage.getItem('token')
export const axiosWithToken = axios.create({
    headers:{
        Authorization: `Bearer ${token}`
    }
})

