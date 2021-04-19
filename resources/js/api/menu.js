import axiosClient from "./axiosClient"
import baseUrl from "./baseUrl"



const menuAPI = {
    listMenu: () =>{
        const url = baseUrl + "/listMenu"
        return axiosClient.get(url)
    },
    order: (data) =>{
        const url = baseUrl + "/order"
        return axiosClient.post(url,data)
    },

}

export default menuAPI