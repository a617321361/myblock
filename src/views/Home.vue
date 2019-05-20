<template>
  <div class="home">
    <Toppic></Toppic>
    <Header></Header>
    <div class="content">
      <router-view v-if="isRouterAlive"></router-view>
    </div>
  </div>
</template>

<script>
import Header from '../components/header/header'
import Toppic from '../components/toppic/toppic'
export default {
  name: 'home',
  components: {
      Header,
      Toppic
    },
    provide(){
      return {
     
      }
    },
    data(){
      return{
        isRouterAlive: true,
       
      }

    },
    mounted(){
      console.log(1111,this.$route)
      let arr = this.$route.matched;
      if(arr.length==1){
          this.$router.push({name:'index',path:'/index'})
        }
    },
    methods:{

  }
}
</script>

<style lang="less">
.home{
 .breadcrumbox{
    padding: 16px;
    box-sizing: border-box;
    background: #eee;
 }
}
</style>
