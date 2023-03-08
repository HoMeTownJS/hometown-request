import type { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import { CONTENT_TYPE, type ContentTypeValue } from './constant';
import type { RequestConfig, RequiredRequestConfig } from '../types';

export function createDefaultRequestConfig(requestConfig?: RequestConfig) {
  const configs: RequiredRequestConfig = {
    codeKey: 'code',
    dataKey: 'data',
    msgKey: 'message',
    backendSuccessCode: 200,
    onRequest: async config => config,
    onBackendSuccess: responseData => {
      const { codeKey, backendSuccessCode } = configs;
      const BACKEND_SUCCESS_CODE = backendSuccessCode;
      return responseData[codeKey] === BACKEND_SUCCESS_CODE;
    },
    onBackendFail: async () => {},
    onError: async () => {}
  };
  Object.assign(configs, requestConfig);

  return configs;
}

export function getRequestHeaderContentType(config: AxiosRequestConfig) {
  const headerContentType = (config?.headers as RawAxiosRequestHeaders)?.['Content-Type'];

  const contentType = (headerContentType || CONTENT_TYPE.json) as ContentTypeValue;

  return contentType;
}

export function isHttpSuccess(status: number) {
  const isSuccessCode = status >= 200 && status < 300;
  return isSuccessCode || status === 304;
}
