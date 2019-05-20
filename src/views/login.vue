<template>
    <div class="dialog">
        <div class="loginPage">
            <div class="loginTitle">
                后台管理系统
            </div>
            <el-form>
                <el-form-item style="margin-bottom:30px;">
                    <el-input 
                    type="text" 
                    placeholder="请输入账户名称" 
                    v-model="formName.user" 
                    prefix-icon="fa fa-user"
                    @change="inputBlur('user',formName.user)"
                    ></el-input>
                    <p>{{formName.userError}}</p>
                    <div class="user-img"><img src="../assets/image/用户1.png" alt=""></div>
                </el-form-item>
                <el-form-item style="margin-bottom:15px;">
                    <el-input 
                    type="password"
                    prefix-icon="fa fa-lock"
                    placeholder="请输入登录密码"  v-model="formName.password" @change="inputBlur('password',formName.password)" @keydown.enter="submitForm('formName')"></el-input>
                    <p>{{formName.passwordError}}</p>
                    <div class="user-img"><img src="../assets/image/密码1.png" alt=""></div>
                </el-form-item>
                <div id="mpane" ></div>
                <el-button type="primary" style="margin-top:45px;" @click="submitForm('formName')" v-bind:disabled="formName.beDisabled">登录</el-button>
                
            </el-form>              
        </div>
    </div>
</template>

<script>
import pic1 from '../assets/verify/images/1.jpg'
import pic2 from '../assets/verify/images/2.jpg'
import {sssa} from '../assets/verify/js/text';
export default {
    data() {
        return{
            formName: {//表单中的参数
                    user: '',
                    userError: '',
                    password: '',
                    passwordError: '',
                    beDisabled: true
                },
            beShow: false,
            imgDisabled:false
            
        }
    },
    created() {

    },
    methods:{
        submitForm:function(formName){
        var _this =this
        var ses = window.sessionStorage
        var data = {
            username:$.trim(this.formName.user),
        }
        data.password=JSON.parse(JSON.stringify(this.$md5(this.api.pswKey+$.trim(this.formName.password))))
        // data.password=this.formName.password
        this.api.api_login(data)
        .then(res=>{
            if (res.code == '0000') {
                var id = res.obj.sessionId
                var user = res.obj.nickName
                ses.setItem('sessionId',id)
                ses.setItem('userName',user)
                _this.$router.push('/')
            } else {
                _this.$message.warning(res.msg)
            }
        })
        
        },
        inputBlur:function(errorItem,inputContent){
            var _this = this
            if (errorItem === 'user') {
                if (inputContent === '') {
                    this.formName.userError = '用户名不能为空'
                }else{
                    this.formName.userError = '';
                }
            }else if(errorItem === 'password') {
                if (inputContent === '') {
                    this.formName.passwordError = '密码不能为空'
                }else{
                    this.formName.passwordError = '';
                }
            }
            //对于按钮的状态进行修改
            if (_this.formName.user != '' && _this.formName.password != ''&&_this.imgDisabled) {
                    _this.formName.beDisabled = false;
                }
        },
        yzm(){
            var _this = this
            $('#mpane').pointsVerify({
                defaultNum : 4,	//默认的文字数量
                checkNum : 2,	//校对的文字数量
                vSpace : 5,	//间隔
                imgName : [pic1, pic2],
                imgSize : {
                    width: '260px',
                    height: '80px',
                },
                barSize : {
                    width : '300px',
                    height : '25px',
                },
                ready : function() {
                },
                success : function() {
                    _this.imgDisabled = true
                    if (_this.formName.user == '' && _this.formName.password == ''&&_this.imgDisabled) {
                        _this.formName.beDisabled = true;
                    }else{
                        
                        _this.formName.beDisabled = false;
                    }
                    //......后续操作
                },
                error : function() {
                    _this.imgDisabled = false
        //		        	alert('验证失败！');
                }
                
            });
        }
    },
    mounted(){
        sssa($);
        this.yzm()
    }
}
</script>

<style lang="less">
html,body{
    width: 100%;
    height: 100%;
    position: relative;
}
.dialog{
    width: inherit;
    height: 105%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: -41px;
    z-index: 99999999;
    background: url('../../static/bg2.png') no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    .el-input__inner{
        height: 40px;
    }
    .verify-refresh{
        display: inline-block;
        position: absolute;
        right: 5px;
        font-size: 16px;
        color: white;
    }
    .verify-bar-area{
        color: #409EFF;
    }
    .el-input--prefix .el-input__inner{
        padding-left: 55px;
    }
    
}

.loginTitle{
    width: 100%;
    height: 50px;
    text-align: center;
    margin-bottom: 20px;
    color: #409EFF;
    font-size: 20px;
    font-weight: 600;
    line-height: 44px;
}
.loginPage{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -262px;
    margin-left: -190px;
    width: 380px;
    min-height: 400px;
    padding: 20px 60px 30px;
    border-radius: 2px;
    box-sizing: border-box;
    background-color: white;
    border-top: 10px solid #409EFF;
    .user-img{
        background: #409EFF;
        height: 40px;
        width: 40px;
        position: absolute;
        top: 0;
        img{
            width: 15px;
            height: 15px;
            margin-top: 12px;
            margin-left: 12px;
        }
    }
}
.loginPage p{
    color: red;
    text-align: left;
}
.loginPage .el-button{
    padding: 15px 115px;
}

</style>
