<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
  </div>
  
</template>

<script>
import mHeader from "./components/common/header/Header.vue";
export default {
  name: 'App',
  components: {
    mHeader
  }
}
</script>

<style scoped lang="scss">

</style>
