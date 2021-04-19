import axiosClient from "./axiosClient"
import baseUrl from "./baseUrl"



const loginAPI = {
    loginCustomer: (data) =>{
        const url = baseUrl + "/loginCustomer"
        return axiosClient.post(url, data)
    },
    loginSystem: (data) =>{
        const url = baseUrl + "/loginSystem"
        return axiosClient.post(url, data)
    },
    logoutCustomer: () =>{
        const url = baseUrl + "/logoutCustomer"
        return axiosClient.get(url)
    },

}

export default loginAPI