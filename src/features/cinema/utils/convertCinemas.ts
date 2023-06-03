import { calculateDistance } from '@/utils/location'
import { CinemaItem } from '../modules'
import store from '@/store'

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
