import {makeAutoObservable} from 'mobx'
import config from 'src/configs/index'
import {fetch} from 'src/api/axios'

export interface ILoginUserInfo {
  customLogo: string
  hdLogo: string
  logoIndex: string
  nick: string
  role: number //当前角色  0:无  1:初审A  2:初审B
  uid: number
}

class UserInfoStore {
  loginUser: ILoginUserInfo | null = null
  constructor() {
    makeAutoObservable(this)
  }
}

export default new UserInfoStore()
