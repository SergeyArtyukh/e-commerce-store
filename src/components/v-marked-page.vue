<template lang="html">
  <div class="v-container">
    <div class="v-marked-page-wrapper">
      <p>{{markedPageTitle}}</p>
      <productItem
      v-for="productInFavorite in FAVORITE"
      :key="productInFavorite.id"
      :sliderElem="productInFavorite"
      ></productItem>
      <span v-if="FAVORITE.length < 1">{{vremenno}}</span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import productItem from './v-home__product-slider/v-product-item.vue'
export default {
  data () {
    return {
      markedPageTitle: 'Избранное',
      vremenno: 'Список избранного пуст'
    }
  },
  methods: {

  },
  computed: {
    ...mapGetters ([
      'FAVORITE'
    ])
  },
  components: {
    productItem
  }
}
</script>

<style lang="scss" scoped>
.v-marked-page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 15px 0;
  p {
    font-size: 15px;
    font-weight: bold;
    font-family: sans-serif;
  }
  span {
    font-size: 25px;
    font-weight: bold;
    font-family: sans-serif;
  }
}
</style>
