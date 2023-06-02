<template>
  <div class="city-main">
    <div class="city-header">
      <navigation-bar title="当前城市-"/>
      <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @update:model-value="onSearch"
      @cancel="onCancel"
    />
    </div>
    <div class="city-recommend">
      <div class="city-title">GPS定位你所在城市</div>
      <van-row style="justify-content:flex-start ;">
        <van-col>深圳</van-col>
      </van-row>
      <div class="city-title">热门城市</div>
      <van-row>
        <van-col
          v-for="hotCity in hotCitys"
          :key="hotCity.cityId"
          @click="onSelect(hotCity.cityId)">
          {{ hotCity.name }}
        </van-col>
      </van-row>
    </div>
    <div>
      <van-index-bar  :index-list="cityIndexs" :sticky-offset-top="100">
        <div v-for="city in citys" :key="city.index">
          <van-index-anchor :index="city.index" />
          <van-cell
          v-for="subCity in city.subCitys"
          :key="subCity.cityId"
          :title="subCity.name"
          @click="onSelect(subCity.cityId)"
          />
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script lang="ts">
import { CityData, CityItem, SubCityItem } from '@/features/city'
import { cityApi } from '@/services/api'
import Vue from 'vue'
import dayjs from 'dayjs'
import store from '@/store'
import NavigationBar from '@/components/NavigationBar/index.vue'
export default Vue.extend({
  name: 'CityPage',
  components: { NavigationBar },
  data () :CityData {
    return {
      value: '',
      citys: [],
      hotCitys: [],
      origiCitys: [],
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
          this.origiCitys = rlt?.data?.cities ?? []
          this.citys = this.convertCityList(this.origiCitys)
          this.cityIndexs = this.citys.map(city => city.index)
          this.hotCitys = this.origiCitys.filter(city => city.isHot)
          this.$store.commit('setCity', {
            citys: this.citys,
            hotCitys: this.hotCitys,
            origiCitys: this.origiCitys,
            cityIndexs: this.cityIndexs,
            resTimestamp: dayjs().valueOf()
          })
        }).catch(error => {
          console.log('CityPage-loadCityList' + error)
        })
      } else {
        this.citys = city.citys
        this.hotCitys = city.hotCitys
        this.cityIndexs = city.cityIndexs
        this.origiCitys = city.origiCitys
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
    },
    onSearch (value:string) {
      console.log('onSearch', value)
    },
    onCancel () {
      console.log('onCancel')
    },
    onSelect (cityId:number) {
      this.$store.commit('setCurrentCity', cityId)
      this.$router.replace('./film')
    }
  }
})
</script>

<style lang="scss" scoped>
.city-main{
  .city-header{
    position: sticky;
    top:0;
    z-index: 100;
  }
  .city-recommend{
    padding: 0 15px;

    .city-title{
      font-size: 13px;
      color: #797d82;
      margin-bottom: 10px;
      margin-top: 10px;
    }
  }
  .van-row{
    margin-left: 10px;
    width: calc(100vw - 50px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .van-col{
      background: #f4f4f4;
      width: 6.25rem;
      height: 30px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
  .van-index-bar__sidebar{
    .van-index-anchor{
      background:#f4f4f4;
    }
  }
}

</style>
