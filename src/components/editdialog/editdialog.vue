<template>
<div class="editbox">
   <el-dialog
    title="添加文章"
    :visible.sync="dialogVisible"
    width="80%">
    <span>读书破万卷，下笔如有神</span>
    <el-form label-position="right" label-width="80px" :model="form">
    <el-form-item label="文章标题">
      <el-input v-model="form.title" style="width:300px"></el-input>
    </el-form-item>

     <el-form-item label="文章类别">
    <el-select v-model="form.type" placeholder="请选择活动区域" style="width:300px">
      <el-option label="知识库" value="1"></el-option>
      <el-option label="个人日记" value="2"></el-option>
    </el-select>
  </el-form-item>

    <el-form-item label="文章附文">
      <el-input v-model="form.txt"></el-input>
    </el-form-item>
   
   
  </el-form>


    <Wangeditor :editorContent='editortxt' :changel='callback' ></Wangeditor>

    <el-button @click='dialogVisible=false'>取消</el-button>
    <el-button type="primary" @click='Release'>发布</el-button>
    <el-button type="danger" v-if='showtxt' @click='clear' class="clearbtn">清空文本</el-button>
    <div class='successtxt' v-if='showtxt'>{{editortxt}}</div>
  </el-dialog>
  </div>
</template>
<script>
import Wangeditor from '../wangeditor/wangeditor'
import {getNowFormatDate} from '../../utils/utils'
export default {
    components:{
        Wangeditor
    },
    data(){
      return{
        showtxt:false,
        dialogVisible:false,
        editortxt:'',
        form:{
          title:'',
          txt:'',
          type:'1'
        }
      }
    },
    created(){

    },
    methods:{
      callback(html){
        //console.log(88,html)
        this.editortxt=html;
      },
      showedit(bol){
        this.dialogVisible=bol
      },
      sentedit(item){
        this.showtxt=false;
        this.form.title=item.title;
        this.form.txt=item.txt;
        this.form.type=item.type;
        this.editortxt=item.content;
        this.showedit(true)
      },
      //发布
      Release(){
        if(!this.form.title){
          this.$message.error('文章标题不能为空')
          return
        }
         if(!this.editortxt){
          this.$message.error('文章内容不能为空')
          return
        }
        let newobj={
          title:this.form.title,
          txt:this.form.txt,
          content:this.editortxt,
          time:getNowFormatDate(),
          type:this.form.type
        };
        console.log(88,newobj)
        this.showtxt=true;
      },
      clear(){
  
        this.editortxt='';
        this.showtxt=false;
      }
    }
}
</script>
<style lang="less">
  .editbox{
    .successtxt{
          line-height: 20px;
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
    }
    .el-dialog__body{
      padding-top: 0
    }
    .clearbtn{
      float: right;
      margin-top: 10px;
    }
    .w-e-text-container {
        position: relative;
        height: 600px !important;
    }
    
  }
</style>

