export interface User {
  id: number;
  user_name: string;  // 必需
  password: string;  // 必需
  token: string;
  power: number; // 普通用户为0，社长为1，管理员为2
  real_name: string;  // 必需
  gender: string;  // 必需
  major: string;
  grade: string;
  class: string;
  stu_id: string;  // 必需
  email: string;
  phone: string;
  avatar_url: string;
}
