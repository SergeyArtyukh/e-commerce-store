<template lang="html">
  <div class="v-container">
    <div class="v-marked-page-wrapper">
      <p>{{markedPageTitle}}</p>
      <span>{{vremenno}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      markedPageTitle: 'Избранное',
      vremenno: 'Список избранного пуст'
    }
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
