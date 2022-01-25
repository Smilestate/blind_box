import axios, {AxiosInstance, AxiosError, AxiosRequestConfig} from 'axios'
import {IRequestResponse, T} from "../types/global/request";
// @ts-ignore
import qs from 'qs'

export class Request {

    public static axiosInstance: AxiosInstance;

    public static init() {
        // 创建axios实例
        this.axiosInstance = axios.create({
            baseURL: 'https://stage-entry.bandex.cc',
            timeout: 10000
        });

        // 初始化拦截器
        this.init_interceptors();
    }

    // 初始化拦截器
    public static init_interceptors() {

        // 设置post请求头
        this.axiosInstance.defaults.headers.post['Content-Type'] =
            'application/x-www-form-urlencoded';

        /**
         * 请求拦截器
         * 每次请求前，如果存在token则在请求头中携带token
         */
        this.axiosInstance.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                const token = localStorage.getItem('ACCESS_TOKEN');
                if (token) {
                    // @ts-ignore
                    config.headers.Authorization = 'Bearer ' + token;
                }
                if (config.method == 'post') {
                    config.data = qs.stringify(config.params)
                    config.params = null
                }
                return config;
            },
            (error: any) => {
                console.error(error)
            }
        );

        // 响应拦截器
        this.axiosInstance.interceptors.response.use(
            // 请求成功
            (response: IRequestResponse): T => {
                const {
                    data: { code, obj, message }
                } = response;
                if (response.status !== 200 || code !== "100") {
                    Request.errorHandle(response, message);
                }
                return obj;
            },
            // 请求失败
            (error: AxiosError): Promise<any> => {
                const { response } = error;
                if (response) {
                    // 请求已发出，但是不在2xx的范围
                    Request.errorHandle(response);
                } else {
                    console.error('网络连接异常,请稍后再试!');
                }
                return Promise.reject(response?.data);
            }
        );
    }

    /**
     * http握手错误
     * @param res 响应回调,根据不同响应进行不同操作
     * @param message
     */
    private static errorHandle(res: IRequestResponse, message?: string) {
        // 状态码判断
        switch (res.status) {
            case 401:
                break;
            case 403:
                break;
            case 404:
                break;
            default:
                // 错误信息判断
                console.log("http error")
        }
    }

}
