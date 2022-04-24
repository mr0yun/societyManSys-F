export interface IRecruitment {
  id: number;
  s_id: number;
  d_id: number;
  recruit_num: number;
  requirement: string;
  start_time: string;
  end_time: string;
  state: number;
  ratify: number;
}
export class Recruitment implements IRecruitment {
  id: number;
  s_id: number;
  d_id: number;
  recruit_num: number;
  requirement: string;
  start_time: string;
  end_time: string;
  state: number;
  ratify: number;
  constructor(
    id: number,
    sId: number,
    dId: number,
    recruitNum: number,
    requirement: string,
    startTime: string,
    endTime: string,
    state = 0,
    ratify = 0
  ) {
    this.id = id; // int
    this.s_id = sId; // int
    this.d_id = dId; // int
    this.recruit_num = recruitNum; // int
    this.requirement = requirement;
    this.start_time = startTime; // datetime
    this.end_time = endTime; // datetime
    this.state = state; // tinyint
    this.ratify = ratify; // tinyint
  }
}

