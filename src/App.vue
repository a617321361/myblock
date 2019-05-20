<template>
  <div id="app">
    <div class="contentv">
      <router-view/>
    </div>
  </div>
</template>

<script>

  import {toggleClass} from './utils/index'
  export default {
   
    data(){
      return {

      }
    },
    mounted() {
      toggleClass(document.body,"custom-theme")
    },
  }
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  font-family:'Microsoft YaHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .contentv{
    height: 95%;
    width: 100%;
    position: relative;
  }
}
</style>
