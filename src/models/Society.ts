export interface ISociety {
  id: number; // int
  name: string;
  u_id: number; // int
  president: string;
  founder: string;
  classification: string;
  founding_date: string; // date
  introduction: string;
  ratify: number; // tinyint
  recruit_eligible: number; // tinyint
}
export class Society implements ISociety {
  id: number; // int
  name: string;
  u_id: number; // int
  president: string;
  founder: string;
  classification: string;
  founding_date: string; // date
  introduction: string;
  ratify: number; // tinyint
  recruit_eligible: number; // tinyint
  constructor(
    id: number,
    name: string,
    uId: number,
    president: string,
    founder: string,
    classification: string,
    fDate: string,
    intro: string,
    ratify = 0,
    recEligible = 0
  ) {
    this.id = id; // int
    this.name = name;
    this.u_id = uId; // int
    this.president = president;
    this.founder = founder;
    this.classification = classification;
    this.founding_date = fDate; // date
    this.introduction = intro;
    this.ratify = ratify; // tinyint
    this.recruit_eligible = recEligible; // tinyint
  }
}

