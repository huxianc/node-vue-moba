import axios from "axios"
import Vue from "vue"

const http = axios.create({
    baseURL: "http://localhost:3000/admin/api"
})

http.interceptors.response.use(
    res => {
        return res
    }, err => {
        console.log(err.response)
        Vue.prototype.$message({
            message: err.response.data.message || "Error",
            type:"error"
        })
        return Promise.reject(err)
    }
)

export default http