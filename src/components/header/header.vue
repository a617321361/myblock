<template>
    <div id="topstate">
        <div class="title">后台管理系统
            <div class="right-box">
                <i class="el-icon-refresh" ></i>
                <span class="user_msg">欢迎, {{userName}}</span>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userName: 'xxxx'
        }
    },
    mounted() {
       
    },
    methods:{
       
       
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
    }
    .right-box{
        display:inline-block;
        float:right;
        position: relative;
        padding-right: 50px;
        .user_msg{
            font-size: 13px;
            margin-right: 25px;
            font-weight: 400;
        }
        .reload{
            cursor: pointer;
        }
        .reload:active{
            color: #409EFF;
        }
        .line{
            width: 1px;
            height: 16px;
            background: white;
            position: absolute;
            right: 90px;
            top: 13px;
        }
        .logout{
            display: inline-block;
            font-weight: 400;
            font-size: 13px;
            height: 20px;
            a{
                color: white;
            }
        }
    }
}
</style>
