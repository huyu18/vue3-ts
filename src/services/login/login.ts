import hyRequest from '../index'

import { IAccount, IDataType } from './types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // users/1
  UserMenus = '/role/' // role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
