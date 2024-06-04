import { TLogin, TUser } from '@/types/type'
import { user } from '@/mocks/index'
import configs from '@/configs'

export const apiLogin = async (payload: TLogin) => {
  return await new Promise<TUser>((resolve, reject) => {
    setTimeout(() => {
      if (payload.username == configs.USERNAME && payload.password == configs.PASSWORD) {
        resolve(user)
      } else {
        reject({
          user: null
        })
      }
    }, 2000)
  })
}

export const apiLoginByGoogle = async (accessToken: string) => {
  return await new Promise<TUser>((resolve, reject) => {
    setTimeout(() => {
      if (accessToken) {
        resolve(user)
      } else {
        reject({
          user: null
        })
      }
    }, 2000)
  })
}
