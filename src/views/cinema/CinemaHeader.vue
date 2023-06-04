<template>
  <div class="cinema-header-main">
    <location-and-search-bar>
      <div class="title"> 影院 </div>
    </location-and-search-bar>
    <van-dropdown-menu active-color="#ee0a24">
      <van-dropdown-item v-model="districtId" :options="districts" @change="sendFilter"/>
      <van-dropdown-item v-model="ticketFlag" :options="ticketFlags" @change="sendFilter"/>
      <van-dropdown-item v-model="sort" :options="sorts" @change="sendFilter"/>
    </van-dropdown-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import LocationAndSearchBar from '@/components/LocationAndSearchBar/LocationAndSearchBar.vue'
import { CinemaSort, TicketFlag } from '@/features/cinema'
export default Vue.extend({
  name: 'CinemaHeader',
  components: { LocationAndSearchBar },
  computed: {
    ...mapState(['districts'])
  },
  data () {
    return {
      districtId: 0,
      ticketFlag: TicketFlag.APP,
      sort: CinemaSort.NotSorted,
      ticketFlags: [
        { text: 'APP订票', value: TicketFlag.APP },
        { text: '前台兑换', value: TicketFlag.FRONT }
      ],
      sorts: [
        { text: '暂不排序', value: CinemaSort.NotSorted },
        { text: '价格最低', value: CinemaSort.PriceAsc },
        { text: '价格最高', value: CinemaSort.PriceDesc },
        { text: '距离最近', value: CinemaSort.DistanceAsc },
        { text: '距离最远', value: CinemaSort.DistanceDesc }
      ]
    }
  },
  methods: {
    sendFilter () {
      this.$emit('changFilter', {
        sort: this.sort,
        districtId: this.districtId,
        ticketFlag: this.ticketFlag
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.cinema-header-main{
  position: sticky;
  top:0;
  z-index: 100;
  .title{
    flex:1;
    font-size: 16px;
    color: #323233;
    font-weight: 500;
    text-align: center;
  }
}
::v-deep .van-dropdown-menu__bar{
  box-shadow: none;
  border: 0.2px solid #d2d6dc;
}
::v-deep .van-dropdown-menu__title{
    font-size: 12px;
 }
</style>
