import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import { api } from '../services/api'

async function getUsers(ctx: QueryFunctionContext) {
  const [, userid] = ctx.queryKey
  const data = await api.get<any>(`/users/${userid}`)
  return data
}

export function useFetchUsers(userId: string) {
  return useQuery(['users', userId], getUsers)
}
