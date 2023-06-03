import { CinemaItem } from '../modules'

export const filterCinemas = (cinemas:CinemaItem[], districtId:number) => {
  console.log({ districtId })
  let rltCinemas = cinemas
  if (districtId && districtId !== 0) {
    rltCinemas = cinemas.filter(cinema => cinema.district.districtId === districtId)
  }
  console.log({ rltCinemas })
  return rltCinemas
}
