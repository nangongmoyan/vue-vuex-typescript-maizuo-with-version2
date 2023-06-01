
export interface CommonUser {
  accountName: string;
  birthday: string;
  gender: number;
  headIcon: string;
  // isRegiest: number;
  mail: string;
  mobile: string;
  nickName: string;
  // operatorId: number;
  // platformType: number;
  // token: string;
  userId: number;
}

export interface User extends CommonUser {
  hasPayPwd:number
  haiPassword: number
  hasDefaultAddr:number
  thirdAccount: any[]
}
