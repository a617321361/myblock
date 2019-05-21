<template>
    <div id="topstate">
        <div class="title">

            <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#b7aa94"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item v-for="(item,index) in tablist" :key='index' :index="item.path">{{item.name}}</el-menu-item>
           
           
            </el-menu>


            <el-button type="primary" icon="el-icon-edit" circle class="eidt" @click='editarticle' ></el-button>
            <el-dialog title="管理提示" :visible.sync="dialogFormVisible">
            <el-form :model="form" ref='form' :rules="rules">
                <el-form-item label="请输入管理员密钥:" label-width="150px" prop="password">
                <el-input v-model="form.password" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submit('form')">确 定</el-button>
            </div>
            </el-dialog>


           <Editdialog ref='Editdialog'></Editdialog>

        </div>
    </div>
</template>

<script>
import Editdialog from '../editdialog/editdialog'
export default {
    components:{
        Editdialog
    },
    data(){
        return{
            dialogFormVisible:false,
            activeIndex2:'1',
            tablist:[
                {
                    name:'随心笔记',
                    path:'/index'
                },
                 {
                    name:'知识库',
                    path:'/knowledge'
                },
                 {
                    name:'个人日记',
                    path:'/Personal_diary'
                },
            ],
            form:{
                password:''
            },
            rules: {
                password: [
                    { required: true, message: '请输入管理员密钥', trigger: 'blur' },
                    { min: 6, max: 18, message: '密钥长度在 6 到 18 个字符', trigger: 'blur' }
                ],
            
            }
        }
    },
    mounted() {
       
    },
    created(){
        console.log(this.$router)
        this.tablist.map((val,key)=>{
            if(val.path === this.$router.history.current.path ){
                this.activeIndex2=val.path
            }
        })
    },
    methods:{
       handleSelect(key, keyPath){
           console.log(key, keyPath)
           this.$router.push({path:key});
       },
       changenav(path){
           console.log(110,path)
           this.activeIndex2=path
       },
       editarticle(){
           if(sessionStorage.getItem('mykey')==='39f701ca8974453afbf19feed2ee4e4a'){
               this.$refs.Editdialog.showedit(true)
           }else{
               this.dialogFormVisible=true;
           }
           
       },
       //提交
       submit(ref){
           this.$refs[ref].validate((valid) => {
          if (valid) {
             console.log('success');
             if(this.$md5(this.form.password) === '39f701ca8974453afbf19feed2ee4e4a'){
                 this.dialogFormVisible=false;
                   this.$refs.Editdialog.showedit(true)
                   sessionStorage.setItem('mykey','39f701ca8974453afbf19feed2ee4e4a')
             }else{
                 this.$message.error('密钥错误，请重新输入')
             }

          } else {
            console.log('error submit!!');
            return false;
          }
        });
       }
       
    }
}
</script>

<style lang="less">
#topstate{
    height: 60px;
    width: 100%;
    background: #b7aa94;
    margin-bottom: 1px;
    z-index: 999999;
    .title{
        text-align: left;
        height: 100%;
        line-height: 60px;
        font-size: 16px;
        color: white;
        font-weight: 900;
        margin-left: 37px;
        ul{
                float: left;
            li{
                font-size: 18px;
            }
        }
        .eidt{
            float: right;
            margin: 10px 20px 0 0;
            background: none;
            border-color:#fff;
        }
    }
  
}
</style>
