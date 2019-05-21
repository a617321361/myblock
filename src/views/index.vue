<template>
    <div id="activity">
         <div class="radio">
            排序：
            <el-radio-group v-model="reverse">
            <el-radio :label="true">倒序</el-radio>
            <el-radio :label="false">正序</el-radio>
            </el-radio-group>
        </div>
       <el-timeline :reverse="reverse">
        <el-timeline-item :timestamp="item.time" placement="top" color="#0bbd87" v-for="(item,index) in arrlist" :key='index'  >
        <el-card  >
            <h4 @click='showdetial(item)'>{{item.title}}</h4>
            <p @click='showdetial(item)'>{{item.txt}}</p>
            <span class="articletype">{{item.type=='1'?"知识库":"个人日记"}}</span>
            <!-- <span class='edit'>编辑</span> -->
            <el-button @click='editinfo(item)' class='edit' type="primary" size='small' icon="el-icon-edit" v-if='showedit'></el-button>
        </el-card>
        </el-timeline-item>
     
    </el-timeline>
       
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
            reverse:true,
            arrlist:data.allarticlelist,
            showedit:sessionStorage.getItem('mykey')
            
        }
    },
    // created() {
    //     this.getMenuList()
    // },
    mounted() {
        console.log(8877878787,data)
    },
    methods:{
      
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
#activity{
    width: 80%;
    margin: auto;
    padding:  20px;
    box-sizing: border-box;
    position: relative;
    .el-timeline-item__tail{
        position: absolute;
        left: 4px;
        height: 100%;
        border-left: 2px solid #e4e7ed;
    }
    .el-timeline-item__node{
        left: -2px;
        width: 14px;
        height: 14px;
    }
    .el-timeline-item__node{
        position: absolute;
    background-color: #e4e7ed;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
        }
    .el-timeline-item__timestamp{
        margin: 20px 0 10px 0;
    }
    .el-card__body{
        position: relative;
        h4{
            font-size: 15px;
            cursor: pointer;
        }
        p{
            font-size: 14px;
            margin-top: 10px;
            cursor: pointer;
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
</style>
