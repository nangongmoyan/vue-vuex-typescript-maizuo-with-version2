import store from '@/store'
import dayjs from 'dayjs'

/**
 * 判断缓存city失效
 * @returns
 */
export const cityIsFailure = () => {
  const { city } = store.state
  const curTimestamp = dayjs().valueOf()
  const subTimestamp = curTimestamp - (city?.resTimestamp ?? curTimestamp) > 24 * 60 * 1000
  return !city?.citys || (city?.citys?.length > 0 && subTimestamp)
}
