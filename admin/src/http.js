import axios from "axios"
import Vue from "vue"
import router from "./router"

const http = axios.create({
    baseURL: "http://localhost:3000/admin/api"
})

http.interceptors.request.use(config => {
    if (localStorage.token) {
        config.headers.Authorization = "Bearer " + localStorage.token
    }
    return config
})

http.interceptors.response.use(
    res => {
        return res
    }, err => {
        Vue.prototype.$message({
            message: err.response.data.message || "Error",
            type: "error"
        })
        if(err.response.status === 401){
            router.push("/login")
        }
        return Promise.reject(err)
    }
)

export default http