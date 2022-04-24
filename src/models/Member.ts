export interface IMember {
  id: number;
  u_id: number;
  s_id: number;
  d_id: number;
  position: string;
  join_time: string;
}

export class Member implements IMember {
  id: number;
  u_id: number;
  s_id: number;
  d_id: number;
  position: string;
  join_time: string;
  constructor(
    id: number,
    uId: number,
    sId: number,
    dId: number,
    position: string,
    joinTime: string
  ) {
    this.id = id; // int
    this.u_id = uId; // int
    this.s_id = sId; // int
    this.d_id = dId; // int
    this.position = position;
    this.join_time = joinTime; // datetime
  }
}

module.exports = Member;
