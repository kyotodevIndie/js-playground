import { create } from 'zustand'

export type UserType = {
  name: string
  email: string
}

type State = {
  users: UserType[]
  addUser: (user: UserType) => void
}

export const useUserStore = create<State>((set) => ({
  users: [],
  addUser: (user: UserType) =>
    set((state) => ({ users: [...state.users, user] })),
}))
