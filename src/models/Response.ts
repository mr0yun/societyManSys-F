export interface IResponse {
  message: string;
  code: number;
  carryData: boolean;
  dataType: string | null;
  data: number | string | null;
  relogin: boolean;
}

export class Response implements IResponse {
  message: string;
  code: number;
  carryData: boolean;
  dataType: string | null;
  data: number | string | null;
  relogin: boolean;
  /**
   * @param {string} message 状态信息
   * @param {number} code 状态码
   * @param {boolean} carryData 是否携带数据
   * @param {string} dataType 携带数据类型
   * @param {string | number} data 数据内容
   * @param {boolean} relogin 是否需要重新登录
   */
  constructor(
    message: string,
    code: number,
    carryData: boolean,
    dataType = null,
    data = null,
    relogin = false
  ) {
    this.message = message;
    this.code = code;
    this.carryData = carryData;
    this.dataType = dataType;
    this.data = data;
    this.relogin = relogin;
  }
}
