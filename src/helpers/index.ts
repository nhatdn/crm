import { TUser } from '@/types/type'

export default class CustomStorage {
  private readonly storage: Storage
  private readonly KEY = {
    account: 'account',
    google_access_token: 'google_access_token'
  }
  constructor() {
    this.storage = localStorage
  }
  setAccount = (account: TUser) => {
    this.storage.setItem(this.KEY.account, JSON.stringify(account))
  }
  getAccount = () => {
    const account = this.storage.getItem(this.KEY.account)
    try {
      if (account) {
        return JSON.parse(account)
      }
    } catch (e) {
      console.log(e)
    }
    return account
  }
  setGoogleAccessToken = (token: string) => {
    this.storage.setItem(this.KEY.google_access_token, token)
  }
  getGoogleAccessToken = () => {
    return this.storage.getItem(this.KEY.google_access_token)
  }

  flushAll = () => {
    this.storage.clear()
  }
}
