<template>
  <div class="cinema-header-main">
    <location-and-search-bar>
      <div class="title"> 影院 </div>
    </location-and-search-bar>
    <van-dropdown-menu active-color="#ee0a24">
      <van-dropdown-item v-model="districtId" :options="districts" @change="sendFilter"/>
      <van-dropdown-item v-model="ticketFlag" :options="ticketFlags" @change="sendFilter"/>
    </van-dropdown-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import LocationAndSearchBar from '@/components/LocationAndSearchBar/LocationAndSearchBar.vue'
export default Vue.extend({
  name: 'CinemaHeader',
  components: { LocationAndSearchBar },
  computed: {
    ...mapState(['districts'])
  },
  data () {
    return {
      districtId: 0,
      ticketFlag: 1,
      ticketFlags: [
        { text: 'APP订票', value: 1 },
        { text: '前台兑换', value: 2 }
      ]
    }
  },
  methods: {
    sendFilter () {
      this.$emit('changFilter', { districtId: this.districtId, ticketFlag: this.ticketFlag })
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

</style>
