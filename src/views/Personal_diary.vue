<template>


  <div class="mydiary">
     <div class="cardbox">
        <el-card class="box-card" shadow="hover">
            <div class="itembox">
               <img src='https://yy.kpzs.com/upload/image/1905221728322983.jpg'/>
               <h2>人生不可错过的五句话</h2>
               <div class="txt">
                  
	最近吃辅食孩子肠胃不消化，天天研究孩子的粑粑，我闻一遍我老公闻一遍，观察粑粑的状态，成分，是否有粘液，是否有蔬菜残留物，是否有未消化的高铁，妈呀，真是养儿方知父母恩，作为新手妈妈，我的内心总是处于惶恐焦虑的状态。孩子如果有一点儿反常，咳嗽几声，打喷嚏几个，鼻子呼哧呼哧的声音，我的心总会提到嗓子眼儿，担心他会不舒服担心他会生病。每次我这种高度紧张的状态出现时，我总是会屏住呼吸深吸一口气，对自己讲，平常心。
               </div>
               
               <i class="el-icon-eleme"></i>
            </div>
           
        </el-card>
     </div>
  </div>


</template>
<script>
export default {
    data(){
      return{

      }
    },
    methods:{
      
    }
}
</script>
 <style lang="less">
    .mydiary{
      width: 1200px;
      overflow: hidden;
      margin: auto;
      padding-top: 40px;
      box-sizing: border-box;
      .cardbox{
        width: 1005;
        overflow: hidden;
        .box-card{
          background: #f1eeec;
         .itembox{
           overflow: hidden;
           position: relative;
            img{
                width: 280px;
              float: left;
              height: 160px;
              }
            h2{
              float: left;
              font-size: 22px;
              padding-left: 22px;
              color: #5d5957;
            }
            .txt{
              position: absolute;
              height: 100px;
              top: 36px;
              left: 302px;
              right: 0;
              box-sizing: border-box;
              // background: #e0e0e0;
              font-size: 14px;
              line-height: 24px;
              color: #6f6b6b;
              // overflow: hidden;
              // text-overflow:ellipsis;
              // white-space: nowrap;
               text-indent:2em;
            }
           }
         
        }
      }

    }
</style>





