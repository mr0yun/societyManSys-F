export interface IActivity {
  id: number;
  name: string;
  s_id: number;
  content: string;
  place: string;
  start_time: string;
  end_time: string;
  state: number;
  ratify: number;
}
export class Activity implements IActivity {
  id: number;
  name: string;
  s_id: number;
  content: string;
  place: string;
  start_time: string;
  end_time: string;
  state: number;
  ratify: number;
  constructor(
    id: number,
    name: string,
    sId: number,
    content: string,
    place: string,
    startTime: string,
    endTime: string,
    state = 0,
    ratify = 0
  ) {
    this.id = id; // int
    this.name = name;
    this.s_id = sId; // int
    this.content = content;
    this.place = place;
    this.start_time = startTime; // datetime
    this.end_time = endTime; // datetime
    this.state = state; // tinyint 活动状态，未开始0，进行中1，已结束2
    this.ratify = ratify; // tinyint 审批状态，0未审批，1不通过，2通过
  }
}

module.exports = Activity;
