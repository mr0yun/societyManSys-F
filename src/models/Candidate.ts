export interface ICandidate {
  id: number;
  u_id: number;
  r_id: number;
  state: number;
  test_score: number;
  interview_evaluation: string;
  interview_score: number;
}
export class Candidate implements ICandidate {
  id: number;
  u_id: number;
  r_id: number;
  state: number;
  test_score: number;
  interview_evaluation: string;
  interview_score: number;
  constructor(
    id: number,
    uId: number,
    rId: number,
    state = 0,
    testScore = 0,
    interEvaluation = "",
    interScore = 0
  ) {
    this.id = id; // int
    this.u_id = uId; // int
    this.r_id = rId; // int
    this.state = state; // tinyint 状态，0网申，1通过简历筛选，2通过笔试，3通过面试，4审批完成，5放弃
    this.test_score = testScore; // tinyint
    this.interview_evaluation = interEvaluation;
    this.interview_score = interScore; // tinyint
  }
}
