export interface IParticipant {
  id: number;
  u_id: number;
  a_id: number;
  state: number;
  comment: string;
  score: number;
  lottery: number;
}
export class Participant implements IParticipant {
  id: number;
  u_id: number;
  a_id: number;
  state: number;
  comment: string;
  score: number;
  lottery: number;
  constructor(
    id: number,
    uId: number,
    aId: number,
    state = 0,
    comment = "",
    score = 0,
    lottery = 0
  ) {
    this.id = id;
    this.u_id = uId;
    this.a_id = aId;
    this.state = state;
    this.comment = comment;
    this.score = score;
    this.lottery = lottery;
  }
}

