<template>


  <div class="mydiary">
     <div class="cardbox" v-for="(item,index) in articlelist" :key='index'>
        <el-card class="box-card" shadow="hover">
            <div class="itembox" @click='showdetial(item)'>
               <img :src='item.src'/>
               <h2>{{item.title}}</h2>
               <p class="fwtxt"><i class="el-icon-time"></i><span class="time">{{item.time}}</span>{{item.txt}}</p>
               <div class="txt">
                 {{item.content}}
               </div>
               
               <i class="el-icon-eleme"></i>
            </div>
           
        </el-card>
     </div>
  </div>


</template>
<script>
import data from '../utils/data'
export default {
    data(){
      return{
        articlelist:[]
      }
    },
    mounted(){
      var arr=[];
      var newlist = JSON.parse(JSON.stringify(data.allarticlelist))
      newlist.map((val,key)=>{
        if(val.type=='2'){//个人日记
        var imgReg = /<img.*?(?:>|\/>)/gi;
        var arrim = val.content.match(imgReg);
        //  console.log(132,val)
        if(!arrim){
          return
        }
       // console.log(132,arrim)
        var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
        var src = arrim[0].match(srcReg);
           val.content=val.content.replace(/<[^>]+>/g,"");//去掉所有的html标记
           val.content=val.content.replace(/&nbsp;/g,"");//去掉所有的html空格

           val.src=src[1];

           arr.push(val)
        }
      })
      console.log(arr)
      this.articlelist=arr;
    },
    methods:{
      showdetial(item){
        let href = window.location.host;
        window.open('http://'+href+'/#/articleinfo?time='+item.time,"_blank2");  
      }
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
        margin-top: 20px;
        .box-card{
          background: #f1eeec;
         .itembox{
           overflow: hidden;
           cursor: pointer;
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
            .fwtxt{
               position: absolute;
               right: 0;
               bottom: 0px;
               font-size: 12px;
               left: 302px;
               color: #9e9e9e;
               text-align: right;
               .time{
                 margin-right: 40px;
                 margin-left: 5px;
               }
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
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 4;
              overflow: hidden;
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





