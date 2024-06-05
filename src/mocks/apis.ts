import { TLogin, TUser } from '@/types/type'
import { user } from '@/mocks/index'
import configs from '@/configs'

// use id variable and clearTimeout to fake event AbortController,
// it will help user abort request during to send request and backend handle but it hasn't yet been returned response.

let id: NodeJS.Timeout | undefined = undefined
export const apiLogin = async (payload: TLogin) => {
  return await new Promise<TUser>((resolve, reject) => {
    id = setTimeout(() => {
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
    id = setTimeout(() => {
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

export const abortRequest = () => {
  id && clearTimeout(id)
}
