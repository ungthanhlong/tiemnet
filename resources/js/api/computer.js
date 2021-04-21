import axiosClient from "./axiosClient"
import baseUrl from "./baseUrl"



const computerAPI = {
    listCustomer: (param) =>{
        const url = baseUrl + "/customer-list-computer"
        return axiosClient.get(url, { param })
    },
    accessComputer: (id) =>{
        const url = baseUrl + "/accessComputer/" +id
        return axiosClient.get(url)
    },
}

export default computerAPI