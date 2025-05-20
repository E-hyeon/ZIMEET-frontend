export interface UserData {
    userId: number;
    emoji: string;
    nickname: string;
    verification: number;
    gender: string;
    age: number;
    studentNumber: string;
    major: string;
    music: string;
    mbti: string;
    style: string;
    idealType: string;
    idealAge: string;
    hi: boolean;   
    level: string; 
}
  
export interface UserDetailResponseType {
    status: string;
    code: string;
    message: string;
    data: UserData;
}