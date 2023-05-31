<template>
  <div class="actor">
    <span class="actors-title-text">演职人员</span>
    <film-detail-swiper style="margin-top: 12px;">
      <film-actor-item v-for="actor in actors" :key="actor">
        <img :src="actor.avatarAddress" class="avatarAddress"/>
        <div class="actor-name">{{ actor.name }}</div>
        <div class="actor-role">{{ actor.role }}</div>
      </film-actor-item>
    </film-detail-swiper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FilmDetailSwiper from './FilmDetailSwiper.vue'
import FilmActorItem from './FilmActorItem.vue'
export default Vue.extend({
  name: 'FilmActor',
  props: {
    actors: {
      type: Array
    }
  },
  components: { FilmDetailSwiper, FilmActorItem }
})
</script>

<style lang="scss" scoped>
.actor{
  background: #fff;
  padding: 15px;
  margin-top: 12px;
  .actors-title-text {
    font-size: 16px;
    color: #191a1b;
  }
  .avatarAddress{
    width:5.3125rem;
    height:7.3281rem
  }
  .actor-name{
    font-size: 12px;
    color: #191a1b;
    width:5.3125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }
  .actor-role{
    font-size: 10px;
    line-height: 16px;
    height:32px;
    color: #797d82;
    width:5.3125rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: break-spaces;
    text-align: center;
  }
}
</style>
