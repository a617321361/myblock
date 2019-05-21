<template>
    <div class="toppic">
       <img src="../../assets/image/banner.png" />
       <div class="calendarbox">
         <el-calendar v-model="value"></el-calendar>
       </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            userName: 'xxxx',
            value:new Date()
        }
    },
    mounted() {
       
    },
    methods:{
       
       
    }
}
</script>

<style lang="less">
.toppic{
  width: 100%;
  min-width: 1200px;
  height: 270px;
  overflow: hidden;
    img{
      width: 100%;
     
    }
    .calendarbox{
      width: 200px;
      height: 230px;
      position: absolute;
      padding: 10px 15px 0;
      top: 20px;
      left: 50px;
      background: #dea58b;
      box-shadow: 0px 0px 12px #fff;
      text-align: center;
      .el-calendar__title{
        float: left;
      }
      .el-calendar__button-group{
        float: right;
        .el-button{
          padding: 2px;
          background: none;
          border: none;
          }
      }
      .el-calendar-table{
        .el-calendar-table__row{
          td{
            border-color:#fff; 
          }
          .current{
            padding: 6px;
            
          }
          .prev{
            padding: 6px;
          }
          .next{
            padding: 6px;
          }
          .is-today{
            background: #a7461b;
           color: #fff;
          }
        }
      }
    }
}
</style>
