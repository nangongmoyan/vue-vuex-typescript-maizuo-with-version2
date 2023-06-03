<template>
  <div class="city-entry" v-if="currentCity" @click="goToCity">
    <span class="city-name">{{ currentCity.name }}</span>
    <van-icon name="arrow-down" size="10" color="#F03D37" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'CityEntry',
  computed: {
    ...mapState(['currentCity'])
  },
  methods: {
    goToCity () {
      this.$router.push('/city')
    }
  }

})
</script>

<style lang="scss" scoped>
.city-entry{
  display: flex;
  align-items: center;

  .city-name{
  max-width: 3.5rem;
  font-size: 13px;
  color: #F03D37;
  margin-right: 2.5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
}

</style>
