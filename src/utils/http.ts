/*
 * @Author: rainlotus97
 * @Date: 2022-03-11 21:57:55
 * @LastEditors: rainlotus97
 * @LastEditTime: 2022-06-16 23:04:15
 * @FilePath: /happy-study/src/utils/http.ts
 * @Description: 网页接口请求
 */
import axios from 'axios'
import QS from 'qs'
import { PUBLICTOKEN } from './github-api'

const baseURL = "https://api.github.com"

//设置超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//请求携带cookie
//axios.defaults.withCredentials = true;
axios.interceptors.request.use((config: any) => {
    // console.log(config); // config是一个包含了所有请求信息的对象 在这里可以修改config对象 修改之后需要返回config对象 请求才会正常进行
    config.headers.Accept = `application/vnd.github.v3+json`;
    config.headers.Authorization = `token ${PUBLICTOKEN}`;
    config.headers['Content-Type'] = ` application/json`;
    config.headers['X-GitHub-Media-Type'] = `github.v3`;
    return config
}, err => {
    // throw new Error(err)
    Promise.reject(err)
})

function http(method: string, url: string, params: any) {
    if (method.toLowerCase() == "get") {
        return get(url, params)
    }
    else {
        return post(url, params)
    }
}

function get(url: string, params: any) {
    return new Promise((resolve, reject) => {
        axios.get(baseURL + url, {
            params: params
        }).then((result) => {
            resolve(result.data)
        }).catch((err) => {
            reject(err);
        })
    })
}

function post(url: string, params: any) {
    return new Promise((resolve, reject) => {
        axios.post(baseURL + url, QS.stringify(params))
            .then((result) => {
                resolve(result.data)
            })
            .catch((err) => {
                reject(err);
            })
    })
}
function put(url: string, params: any) {
    return new Promise((resolve, reject) => {
        axios.put(baseURL + url, QS.stringify(params))
            .then((result) => {
                resolve(result.data)
            })
            .catch((err) => {
                reject(err);
            })
    })
}

export default http;