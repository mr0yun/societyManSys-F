export interface IResult{
  message: string;
  code: number;
  data: string;
}

export class Result implements IResult{
  message: string;
  code: number;
  data: string;
  constructor(msg: string, code: number, data: string){
    this.message = msg;
    this.code = code;
    this.data = data;
  }
}