import { Actor } from '@/features/film'

export const actorFilter = (actors:Actor[]) => {
  if (!actors) return '暂无主演'
  return actors.map(actor => actor.name).join(' ')
}
