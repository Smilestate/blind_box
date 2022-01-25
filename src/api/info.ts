import { Request } from './request';
import {bannerReq, bannerRes, dealAmount} from "../types/global/info";
import {AxiosPromise} from "axios";
export default {

    spot_info: (params?: bannerReq) : AxiosPromise<Array<bannerRes>> => {
        return Request.axiosInstance({
            url: '/cms/banner',
            method: 'get',
            params
        })
    },

    test_info: (params?: any) : AxiosPromise<Array<dealAmount>> => {
        return Request.axiosInstance({
            url: '/exchange/dealAmountList',
            method: 'post',
            params
        })
    }

}