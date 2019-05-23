<template>
  <div class="searchbox">
      <div class="topsearch">
       <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click='searchinfo'></el-button>
      </el-input>
      </div>
        <el-card v-for="(item,index) in arrlist" :key='index'  >
          <h4 @click='showdetial(item)'>{{item.title}}</h4>
          <p @click='showdetial(item)'>{{item.txt}}</p>
          <span class="articletype">{{item.type=='1'?"知识库":"个人日记"}}</span>
          <el-button @click='editinfo(item)' class='edit' type="primary" size='small' icon="el-icon-edit" v-if='showedit'></el-button>
          <p class="time"><i class="el-icon-time"></i>{{item.time}}</p>
      </el-card>


      <Editdialog ref='Editdialog'></Editdialog>
  </div>
</template>
<script>
import data from '../utils/data'
import Editdialog from '../components/editdialog/editdialog'
export default {
    components:{
        Editdialog
    },
    data(){
      return{
        select:'1',
        input3:'',
        arrlist:[],
        showedit:sessionStorage.getItem('mykey')
      }
    },
    methods:{
      searchinfo(){
        //字符串方法indexOf
        let keyWord = this.input3.toLowerCase();//转成小写
        var arr = [];
        for(var i=0;i<data.allarticlelist.length;i++){
            //如果字符串中不包含目标字符会返回-1
            if(data.allarticlelist[i].title.toLowerCase().indexOf(keyWord)>=0){
                arr.push(data.allarticlelist[i]);
            }
        }
        console.log(100,arr)
        this.arrlist=arr
      },
      showdetial(item){
          console.log(77,item)
        //   this.$router.push({path:'/articleinfo',query:{time:item.time}});
          let href = window.location.host;
          console.log(20,href)
           window.open('http://'+href+'/#/articleinfo?time='+item.time,"_blank");    
      },
       editinfo(item){
             this.$refs.Editdialog.sentedit(item)
        }
    }
}
</script>
<style lang="less">
  .searchbox{
    width: 1200px;
    padding: 20px 0;
    margin: auto;
   
   .topsearch{
     text-align: center;
    .el-input{
      height: 60px;
      width: 70%;
      font-size: 18px;
      margin-bottom: 60px;
      input{
        height: 100%;
      }
     
    }
   }
    .el-card{
      margin-top: 20px;
    .el-card__body{
      text-align: left;
       position: relative;
        background: #f1eeec;
        
        h4{
            font-size: 15px;
            cursor: pointer;
        }
        p{
            font-size: 14px;
            margin-top: 10px;
            cursor: pointer;
        }
        .time{
            color: #9e9e9e;
            margin-top: 20px;
        }
        .articletype{
            position: absolute;
            top: 10px;
            right: 20px;
            color: #f3ad54;
        }
        .edit{
            position: absolute;
            bottom: 10px;
            right: 20px;
            color: #369;
            cursor: pointer;
            background: none;
            border: none;
        }
    }
    }

  }
</style>
