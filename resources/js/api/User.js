
import axios from "axios";
import baseUrl from './baseUrl';
const User = {};
const Url = baseUrl + "/nguoi-dung"

User.list = async (token) => {
    const url = Url + "/"
    const res = await axios.get(url, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
       })
        .then(response => { return response.data })
        .catch(error => { return error })
    return res;

}
User.save = async (data, token) => {
    const url = Url + "/create"
    const res = await axios.post(url, data, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
       })
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}


User.getUser = async (token) => {
    const url = baseUrl + "/getUser"
    const res = await axios.get(url, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
       })
        .then(response => { return response.data })
        .catch(error => { localStorage.removeItem('token')
                            localStorage.removeItem('user')
                            localStorage.removeItem('auth_token')})
    return res;

}

User.UserWithRole = async (id,token) => {
    const url = Url + "/UserWithRole/"+id
    const res = await axios.get(url, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
       })
        .then(response => { return response.data })
        .catch(error => { return error })
    return res;

}
User.UserWithoutRole = async (id,token) => {
    const url = Url + "/UserWithoutRole/"+id
    const res = await axios.get(url, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
       })
        .then(response => { return response.data })
        .catch(error => { return error })
    return res;

}
export default User
