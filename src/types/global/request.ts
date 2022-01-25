import { AxiosResponse } from 'axios';

/**
 * 协议定义相应data
 */
export type T = {
  code: string;
  success: boolean;
  obj: any;
  message: string;

};

/**
 * 请求响应类型
 */
export interface IRequestResponse extends AxiosResponse {
  data: T;
}
