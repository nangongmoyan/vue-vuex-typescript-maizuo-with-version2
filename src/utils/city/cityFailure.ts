import store from '@/store'
import dayjs from 'dayjs'

export const cityFailure = () => {
  const { city } = store.state
  const curTimestamp = dayjs().valueOf()
  const subTimestamp = curTimestamp - (city?.resTimestamp ?? curTimestamp) > 24 * 60 * 1000
  return !city?.citys || (city?.citys?.length > 0 && subTimestamp)
}
