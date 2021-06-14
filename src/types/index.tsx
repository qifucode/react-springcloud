// 用户信息
export interface IUserInfo {
    USERNAME:string,
    EMAIL:string,
    PASSWORD:string,
    CONFIR:string,
}
// redux action
export interface IReduxAction {
    payload: any;
    type: string;
}