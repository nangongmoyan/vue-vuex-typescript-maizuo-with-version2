<template>
  <div class="cinema-item-main">
    <div class="cinema-left">
      <span class="cinema-name">{{ cinema.name }}</span>
      <span class="cinema-address">{{ cinema.address }}</span>
    </div>
    <div class="cinema-right">
      <span class="price-fmt">
        <i> ¥ </i>
        <span>{{ cinema.lowPrice / 100 }}</span>
        <span class="upon"> 起 </span>
      </span>
      <div class="cinema-gpsAddress">
        <span class="cinema-distance">{{cinema.distance?cinema.distance.toFixed(1)+'km':'距离未知'}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CinemaItem',
  props: {
    cinema: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.cinema-item-main{
  display: flex;
  height:4.7188rem;
  background-color: #fff;
  align-items: center;
  padding: 0 15px;
  border-bottom: 0.5px solid #f3f4f6;
  .cinema-left{
    display: flex;
    flex-direction: column;
    max-width: calc(100% - 4.6875rem);
    .cinema-name {
      color: #191a1b;
      font-size: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .cinema-address{
      color: #797d82;
      font-size: 12px;
      margin-top: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .cinema-right{
    display: flex;
    margin-left: auto;
    align-items: flex-end;
    flex-direction: column;
    .price-fmt {
      font-size: 15px;
      color: #F03D37;
      height: 0!important;
      display: inline-table!important;
      .upon {
        font-size: 10px;
      }
    }
    .cinema-gpsAddress{
      color: #797d82;
      margin-top: 5px;
      .cinema-distance{
        font-size: 9px;
      }
    }
  }
}

</style>
