import { CinemaFilter, CinemaItem, CinemaSort } from '../modules'

export const filterCinemas = (cinemas:CinemaItem[], filter:CinemaFilter) => {
  let rltCinemas = cinemas
  const { districtId, sort } = filter
  if (districtId && districtId !== 0) {
    rltCinemas = cinemas.filter(cinema => cinema.district.districtId === districtId)
  }

  switch (sort) {
    case CinemaSort.PriceAsc:
      rltCinemas = cinemas.sort((a, b) => a.lowPrice - b.lowPrice)
      break
    case CinemaSort.PriceDesc:
      rltCinemas = cinemas.sort((a, b) => b.lowPrice - a.lowPrice)
      break
    case CinemaSort.DistanceAsc:
      rltCinemas = cinemas.sort((a, b) => b.distance - a.distance)
      break
    case CinemaSort.DistanceDesc:
      rltCinemas = cinemas.sort((a, b) => b.distance - a.distance)
      break
  }

  return rltCinemas
}
