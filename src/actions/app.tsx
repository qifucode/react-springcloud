import * as constants from '../constants'

export interface AddUserInfo {
    type: constants.ADD_USERINFO;
}

export function addUserInfo(): AddUserInfo{
    return{
        type:constants.ADD_USERINFO
    }
}