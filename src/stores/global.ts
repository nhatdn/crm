import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// import CustomStorage from '@/helpers';
import { TUser } from '@/types/type'

type TGlobalStore = {
  account: TUser | undefined
  setAccount: (account?: TUser) => void
}

const useGlobalStore = create(
  persist<TGlobalStore>(
    (set) => ({
      account: undefined,
      setAccount(account?: TUser) {
        set({ account })
      }
    }),
    {
      name: 'global',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default useGlobalStore
