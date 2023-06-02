<template>
  <div class="film-header">
    <city-entry/>
    <van-tabs v-model="active" animated style="flex:1"      title-active-color="#F03D37">
      <van-tab
      v-for="tab in tabs"
      :key="tab.path"
      :title="tab.title"
      :to="tab.path"

      />
    </van-tabs>
    <search-icon/>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { topTabBar } from './const'
import CityEntry from '@/components/City/CityEntry.vue'
import SearchIcon from '@/components/Search/SearchIcon.vue'
export default Vue.extend({
  name: 'FilmHeader',
  components: {
    CityEntry,
    SearchIcon
  },
  data () {
    return {
      active: 0,
      tabs: [
        {
          title: '正在热映',
          path: '/films/filmList/1'
        },
        {
          title: '即将上映',
          path: '/films/filmList/2'
        }
      ]
    }
  },
  methods: {
    onClickTab (item:any) {
      console.log('onClickTab', item)
    }
  }
})
</script>

<style lang="scss" scoped>
.film-header{
  height:46px;
  display: flex;
  padding: 0 15px;
  background: #fff;
  align-items: center;
  z-index: 10;
  .film-tabs{
    background: red;
  }
}
</style>
