export interface IDepartment {
  id: number;
  name: string;
  s_id: number;
  founding_date: string;
  minister: string;
  introduction: string;
  member_num: number;
  ratify: number;
}
export class Department implements IDepartment {
  id: number;
  name: string;
  s_id: number;
  founding_date: string;
  minister: string;
  introduction: string;
  member_num: number;
  ratify: number;
  constructor(
    id: number,
    name: string,
    sId: number,
    fDate: string,
    minister: string,
    intro = "",
    memberNum = 0,
    ratify = 0
  ) {
    this.id = id; // int
    this.name = name;
    this.s_id = sId; // int
    this.founding_date = fDate; // date 成立时间
    this.minister = minister;
    this.introduction = intro;
    this.member_num = memberNum; // int 人数
    this.ratify = ratify; // tinyint 审批状态，0未审批，1不通过，2通过
  }
}
