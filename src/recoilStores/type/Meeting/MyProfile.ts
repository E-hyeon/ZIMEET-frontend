export interface MyProfileType {
    userId: number;
    emoji: string;
    nickname: string;
    verification: number;
    profileStatus: string;
}

export interface MyProfileResponseType {
    status: string;
    code: string;
    message: string;
    data: MyProfileType;
}