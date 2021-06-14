import axios from "axios";
import axiosRetry from 'axios-retry';
// import { getToken } from "./auth";


// Re-define axios
declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> { }

  // export interface AxiosInstance {
  //   request<T = any>(config: AxiosRequestConfig): Promise<T>;
  //   get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  //   delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  //   head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  //   post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  //   put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  //   patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  // }
}

axios.defaults.withCredentials = false;
let host = window.location.host;
let reg = /^localhost+/;
if (reg.test(host)) {
  //若本地项目调试使用
  axios.defaults.baseURL = 'http://localhost:3008';
} else {
  axios.defaults.baseURL = window.location.origin;
}

const codeMessage: any = {
  200: "success",
  401: "Not authorized",
  403: "Forbidden",
  404: "Not found",
  500: "System error",
  504: "Timeout"
};

let a = 0;
// create an axios instance
const service = axios.create({
  // baseURL: "", // 请求的base_url
  timeout: 120000, // request timeout
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Type': 'application/json',
  },
});

// request interceptor
service.interceptors.request.use(
  config => {
    // config.headers.Authorized = getToken();
    // return config;
    // console.log(config);
    return config;
  },
  error => {
    console.error("Request error");
    Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response): any => {
    const { status, statusText } = response;
    // console.log(`status ${status}`);
    if (status === 200 || statusText === 'OK') {
      return response.data.data || response.data;
      // return response.data;
    } 
    else {
      if (status === 50008 || status === 50012 || status === 50014) {
        // removeToken();
        window.location.reload();
      }
      const errortext = codeMessage[status] || statusText;
      console.error({
        message: `Request error ${status}`,
        description: errortext
      });
      return Promise.reject(response);
      // throw Error(response.data.msg || 'Server Error');
    }
  },
  error => {
    console.error('err' + error.message);
    if (error.message.indexOf('500') > -1) {
      alert(
        'Your operation is failed for system error, please contact administrator xuef@sg.ibm.com'
      );
    } else {
      if (a === 5) {
        alert(
          'Request timeout, please check your network and refresh this page.'
        );
      }
    }
    return Promise.reject(error);
  }
);

axiosRetry(axios, {
  retries: 5, //设置自动发送请求次数
  shouldResetTimeout: true,
  retryCondition: error => {
    //true为打开自动发送请求，false为关闭自动发送请求
    //return (error.config.method === 'get'); 这里的意思是当请求方式为get时打开自动发送请求功能
    if (error.message.indexOf('timeout') > -1) {
      a = a + 1;
      return true;
    } else {
      return false;
    }
  },
});

export default service;
