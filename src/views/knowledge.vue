<template>


  <div  class="myknoeledge">

    <el-row>
      <el-col :span="4" v-for="(item, index) in cardlist" :key="index" >
        <el-card :body-style="{ padding: '0px' }"  shadow="hover">
          <img :src="item.imgurl" class="image">
          <div style="padding: 14px;" class="bottomtxt">
            <span>{{item.name}}</span>
            <div >
              <el-button type="text" class="button">点击进入</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>


</template>
<script>
export default {
    data(){
      return{
         currentDate: new Date(),
         cardlist:[
           {
             name:'VUE',
             imgurl:'https://cn.vuejs.org/images/logo.png',
           },
            {
             name:'React',
             imgurl:'https://www.runoob.com/wp-content/uploads/2016/02/react.png',
           },
            {
             name:'小程序',
             imgurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558500871416&di=f86034be5681b427c1ae5098a345169e&imgtype=0&src=http%3A%2F%2Fs13.sinaimg.cn%2Fmw690%2F006oocVhzy7lN0VQ8Vubc%26690',
           },
            {
             name:'Git',
             imgurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558500938552&di=61e7ce0175abfbfe98d96e7eda4a0c45&imgtype=0&src=http%3A%2F%2Fandroid-artworks.25pp.com%2Ffs08%2F2016%2F12%2F25%2F9%2F2_8fcb2f172743dcc0eb067a8048332847_con.png',
           },
           {
             name:'JS',
             imgurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558516601480&di=ac9eb7aacaf2949228730e9d8a9fbea4&imgtype=0&src=http%3A%2F%2Fimgsa.baidu.com%2Fexp%2Fw%3D500%2Fsign%3Df8de143215dfa9ecfd2e561752d0f754%2Fd8f9d72a6059252dde276b2a309b033b5bb5b9ef.jpg'
           },
           {
             name:'CSS',
             imgurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558516736042&di=502189ac4b86ae666a846dae430f29f5&imgtype=0&src=http%3A%2F%2Fpic.appvv.com%2Fe410f4c07f84a45d5e78f4fc7a709b54%2F175.png'
           }
         ]
      }
    },
    methods:{

    }
}
</script>
<style  lang="less">
 
 .myknoeledge{
   width: 80%;
   min-width: 1400px;
   margin: auto;
   padding-top: 40px;
   box-sizing: border-box;
   .image{
     width: 100%;
     height: 200px;
   }
   .el-card__body{
     background: #efeae1;
   }
   .bottomtxt{
     background: #b9ac9c;
     span{
       font-weight: bold;
       font-size: 16px;
     }
     .button{
       color: #fff;
     }
   }
   .el-col{
     margin-right: 100px;
     margin-bottom: 40px;
   }
 }


</style>


