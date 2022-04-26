export interface IUser {
  id: number;
  user_name: string; // 必需
  password: string; // 必需
  token: string;
  power: number; // 普通用户为0，社长为1，管理员为2
  real_name: string; // 必需
  gender: string; // 必需
  major: string;
  grade: string;
  class: string;
  stu_id: string; // 必需
  email: string;
  phone: string;
  avatar_url: string;
}

export class User implements IUser {
  id = 0;
  user_name: string; // 必需
  password: string; // 必需
  token = "";
  power = 0; // 普通用户为0，社长为1，管理员为2
  real_name: string; // 必需
  gender: string; // 必需
  major = "";
  grade = "";
  class = "";
  stu_id: string; // 必需
  email = "";
  phone = "";
  avatar_url = "";
  constructor(
    userName: string,
    password: string,
    realName: string,
    gender: string,
    stuId: string
  ) {
    this.user_name = userName;
    this.password = password;
    this.real_name = realName;
    this.gender = gender;
    this.stu_id = stuId;
  }
}
