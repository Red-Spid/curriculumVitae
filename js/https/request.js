// import axios from './axios'
// import { Loading } from 'element-ui';

console.log(axios)

export function request(config) {
    console.log( axios )
    axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
    const instance = new axios.create({
        baseURL: "https://www.runoob.com/try",
        timeout: 5000
    })
    // 请求拦截
    instance.interceptors.request.use(config => {
        // Loading.service();
        return config
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
        // let loadingInstance = Loading.service();
        // loadingInstance.close();
        // console.log(res.data)
        return res
    }, err => {
        console.log(err)
        return { code: 500, msg: 'timeout' }
    })
    return instance(config)
}
// 通过代理+设置请求头写的
export function requestCity(config) {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    const instance = new axios.create({
        // api通过vue.config.js的代理设置的
        baseURL: "api/cityjson?ie=utf-8",
        method: 'post'
    })
    // 请求拦截
    instance.interceptors.request.use(config => {
        return config
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
        return { code: 500, msg: 'timeout' }
    })
    return instance(config)
}
// post请求
export function requestPost(config) {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    const instance = new axios.create({
        baseURL: "https://www.runoob.com/try/",
        method: 'post'
    })
    // 请求拦截
    instance.interceptors.request.use(config => {
        // Loading.service();
        return config
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
        // let loadingInstance = Loading.service();
        // loadingInstance.close();
        // console.log(res.data)
        return res.data
    }, err => {
        console.log(err)
        return { code: 500, msg: 'timeout' }
    })
    return instance(config)
}
