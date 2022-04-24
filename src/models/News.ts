export interface INews {
  id: number;
  contributor: string;
  s_id: number;
  theme: string;
  outline: string;
  content: string;
  published_time: string;
}
export class News implements INews {
  id: number;
  contributor: string;
  s_id: number;
  theme: string;
  outline: string;
  content: string;
  published_time: string;
  constructor(
    id: number,
    contributor: string,
    sId: number,
    theme: string,
    outline: string,
    content: string,
    pubTime: string
  ) {
    this.id = id; // int
    this.contributor = contributor;
    this.s_id = sId; // int
    this.theme = theme;
    this.outline = outline;
    this.content = content;
    this.published_time = pubTime; // datetime
  }
}
