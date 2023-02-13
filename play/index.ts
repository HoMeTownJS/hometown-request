import { createRequest } from '../packages';

const request = createRequest(
  {},
  {
    codeKey: 'code',
    dataKey: 'data',
    msgKey: 'msg',
    onBackendSuccess(responseData) {
      const isObject = Object.prototype.toString.call(responseData) === '[Object object]';

      /** 后端自定义的成功code */
      const SUCCESS_CODE = '0000';

      const hasCodeKey = Object.keys(responseData).includes(this.codeKey);

      const isFailedByCode = responseData.code !== SUCCESS_CODE;

      return !(isObject && hasCodeKey && isFailedByCode) || true;
    }
  }
);

function getList() {
  return request.get('https://www.baidu.com');
}

async function fetchSearchBook() {
  const data = await getList();
  console.log('data: ', data);
}

fetchSearchBook();
