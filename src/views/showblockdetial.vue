<template>
  <div class="blockbage" >
    <h2>{{artileinfo.title}}</h2>
    <p class="fw">{{artileinfo.time}}</p>
    <div ref='mytxt'></div>
  </div>
</template>

<script>
import data from '../utils/data'
export default {

  components: {
    
    },

    data(){
      return{
     artileinfo:{}
       
      }

    },
    mounted(){
     console.log(132,this)
     let time = this.$router.history.current.query.time;
     data.allarticlelist.map((val,key)=>{
       if(val.time == time){
         
         this.artileinfo=val;
          this.$refs.mytxt.innerHTML=val.content.replace(/↵/g,'')
         }
     })

   
    },
    created(){
      
    },
    methods:{

  }
}
</script>

<style lang="less">
.blockbage{
  padding: 30px;
  width: 80%;
  max-width: 1400px;
  margin: auto;
  font-size: 14px;
  h2{
    text-align: center;
    font-size: 30px;
    color: #494949;
  }
  .fw{
        text-align: center;
    color: #736d6d;
    margin-bottom: 40px;
  }
    p{
      line-height: 40px
    }
}
</style>
