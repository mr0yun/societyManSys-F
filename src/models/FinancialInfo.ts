export interface IFinancialInfo {
  id: number;
  s_id: number;
  d_id: number;
  handler: string;
  type: number;
  amount: number;
  record_time: string;
  remark: string;
}

export class FinancialInfo implements IFinancialInfo {
  id: number;
  s_id: number;
  d_id: number;
  handler: string;
  type: number;
  amount: number;
  record_time: string;
  remark: string;
  constructor(
    id: number,
    sId: number,
    dId: number,
    handler: string,
    type: number,
    amount: number,
    recordTime: string,
    remark: string
  ) {
    this.id = id; // int
    this.s_id = sId; // int
    this.d_id = dId; //  int
    this.handler = handler;
    this.type = type; // tinyint
    this.amount = amount; // decimal
    this.record_time = recordTime; // datetime
    this.remark = remark;
  }
}

module.exports = FinancialInfo;
