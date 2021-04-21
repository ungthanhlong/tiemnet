import axiosClient from "./axiosClient"
import baseUrl from "./baseUrl"
const Url = baseUrl + "/statistics"


const statisticsAPI = {
    order: () =>{
        const url = Url + "/listOrder"
        return axiosClient.get(url)
    },
}

export default statisticsAPI