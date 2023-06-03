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
      <van-row v-if="city?.hotCitys?.length>0">
        <van-col
          v-for="hotCity in city?.hotCitys"
          :key="hotCity.cityId"
          @click="onSelect(hotCity.cityId)">
          {{ hotCity.name }}
        </van-col>
      </van-row>
    </div>
    <div v-if="city?.citys?.length>0">
      <van-index-bar  :index-list="city.cityIndexs" :sticky-offset-top="100">
        <div v-for="item in city?.citys" :key="item.index">
          <van-index-anchor :index="item.index" />
          <van-cell
          v-for="subCity in item.subCitys"
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
import { CityData, cityIsFailure, convertCity, getCurrentPosition } from '@/features/city'
import Vue from 'vue'
import NavigationBar from '@/components/NavigationBar/index.vue'

import { mapState } from 'vuex'
export default Vue.extend({
  name: 'CityPage',
  components: { NavigationBar },
  data () :CityData {
    return {
      value: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  created () {
    getCurrentPosition({ showToast: true, needReGet: true })

    this.loadCityList()
  },
  methods: {
    loadCityList () {
      cityIsFailure() && convertCity()
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
