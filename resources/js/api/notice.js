import axiosClient from "./axiosClient"
import baseUrl from "./baseUrl"
const Url = baseUrl + "/notice"


const noticeAPI = {
    notice: (param) =>{
        const url = Url
        return axiosClient.get(url, { param })
    },

}

export default noticeAPI