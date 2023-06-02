<template>
  <div>
    <van-index-bar  :index-list="cityIndexs">
      <div v-for="city in citys" :key="city.index">
        <van-index-anchor :index="city.index" />
        <van-cell v-for="subCity in city.subCitys" :key="subCity.cityId"  :title="subCity.name" />
      </div>
    </van-index-bar>
  </div>
</template>

<script lang="ts">
import { CityData, CityItem, SubCityItem } from '@/features/city'
import { cityApi } from '@/services/api'
import Vue from 'vue'
import dayjs from 'dayjs'
import store from '@/store'
export default Vue.extend({
  name: 'CityPage',
  data () :CityData {
    return {
      citys: [],
      cityIndexs: []
    }
  },
  created () {
    this.loadCityList()
  },
  methods: {
    loadCityList () {
      const { city } = store.state
      const curTimestamp = dayjs().valueOf()
      const subTimestamp = curTimestamp - (city?.resTimestamp ?? curTimestamp) > 24 * 60 * 1000
      if (!city?.citys || (city?.citys?.length > 0 && subTimestamp)) {
        cityApi.getCityList().then((rlt) => {
          const origiCitys = rlt?.data?.cities ?? []
          this.citys = this.convertCityList(origiCitys)
          this.cityIndexs = this.citys.map(city => city.index)

          this.$store.commit('setCity', {
            citys: this.citys,
            cityIndexs: this.cityIndexs,
            resTimestamp: dayjs().valueOf()
          })
        }).catch(error => {
          console.log('CityPage-loadCityList' + error)
        })
      } else {
        this.citys = city.citys
        this.cityIndexs = city.cityIndexs
      }
    },

    convertCityList (list:SubCityItem[]) {
      const citys:CityItem[] = []
      const letters:string[] = []

      for (let i = 65; i < 91; i++) {
        /** 生成26个字母的字符串数组 */
        letters.push(String.fromCharCode(i))
      }

      for (let m = 0, len = letters.length; m < len; m++) {
        const subCitys = list.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letters[m])
        if (subCitys.length > 0) {
          citys.push({ index: letters[m], subCitys })
        }
      }

      return citys
    }
  }
})
</script>

<style lang="scss" scoped>
.van-index-bar__sidebar{
  .van-index-anchor{
  background:#f4f4f4;
}
}

</style>
