export interface IApplication {
  id: number;
  type: number;
  title: string;
  content: string;
  u_id: number;
  associated_id: number;
  submit_time: string;
  review_time: string;
  state: number;
  img_urls: string;
  file_urls: string;
  review_opinion: string;
}
export class Application implements IApplication {
  id: number;
  type: number;
  title: string;
  content: string;
  u_id: number;
  associated_id: number;
  submit_time: string;
  review_time: string;
  state: number;
  img_urls: string;
  file_urls: string;
  review_opinion: string;
  constructor(
    id: number,
    type: number,
    title: string,
    content: string,
    uId: number,
    submitTime: string,
    reviewTime = "",
    state = 0,
    associatedId = 0,
    imgUrls = "",
    fileUrls = "",
    reviewOpinion = ""
  ) {
    this.id = id; // int
    this.type = type; // tinyint 申请类型，创立社团1，创立部门2，组织活动3，招新4，考核5，评优6，注销社团7，注销部门8
    this.associated_id = associatedId; // int
    this.u_id = uId;
    this.title = title;
    this.content = content;
    this.img_urls = imgUrls;
    this.file_urls = fileUrls;
    this.state = state; // tinyint 未审批0，已通过1，未通过2
    this.submit_time = submitTime; // datetime
    this.review_time = reviewTime; // datetime
    this.review_opinion = reviewOpinion;
  }
}
