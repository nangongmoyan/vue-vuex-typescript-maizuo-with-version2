
import store from '@/store'
import { CinemaItem } from '../modules'
import { calculateDistance } from '../../city'

export const convertCinemas = (cinemas:CinemaItem[]) => {
  let rlt = cinemas
  const { location } = store.state
  if (location) {
    rlt = cinemas.map(cinema => {
      const distance = calculateDistance(location?.latitude, location?.longitude, cinema.latitude, cinema.longitude)
      return { ...cinema, distance }
    })
  }
  return rlt.sort((a, b) => a.distance - b.distance)
}
