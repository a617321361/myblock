<template>
    <div id="activity">
        <div class="searchbox">
        <el-form ref="form" :model="form" label-width="80px">
            <el-button type="primary" size='small'>规 则</el-button>
            <el-form-item label="时间">
               <el-date-picker
                v-model="form.timer"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option :label="val.status"  v-for="(val,key) in form.starus" :key='key' :value="val.statusact"  ></el-option>
                    
                </el-select>
            </el-form-item>
            <el-form-item label="输入搜索">
                <el-input v-model="form.name"  placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-button type="primary" size='small' >查询</el-button>
            <el-button type="primary" size='small' icon="el-icon-plus" class="add" >添加</el-button>
        </el-form>
       </div>



       <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
        type="index"
        label="序号"
        width="60px">
        </el-table-column>
        <el-table-column
        prop="name"
        label="活动名称"
        width="400">
        </el-table-column>
        <el-table-column
        prop="date"
        label="活动时间"
        width="400">
        </el-table-column>
        <el-table-column
        label="状态"
        >
        <template slot-scope="scope">
            <span v-bind:style="{'color':scope.row.statusact=='1' ? '#6cd26c':(scope.row.statusact=='2'||scope.row.statusact=='4'?'#e05454':'#494949')}">{{scope.row.status}}</span>
        </template>
        </el-table-column>
         <el-table-column
        prop="remark"
        label="备注"
        >
        </el-table-column>
         <el-table-column
        label="操作"
       >
          <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)" v-if='scope.row.statusact=="1"||scope.row.statusact=="3"' >编辑</el-button>
            <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)" v-if='scope.row.statusact=="2"||scope.row.statusact=="4"' >查看</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)" v-if='scope.row.statusact=="1"' >结束</el-button>
      </template>
        </el-table-column>
    </el-table>
    <span class="beizhu">注:同一个活动周期内只能有一个周期</span>


       
    </div>
</template>

<script>
export default {
    // inject: ['reload'],
    data(){
        return{
            MenuList:[],
            ses:window.sessionStorage,
            form:{
                name:'',
                timer:[],
                region:'',
                starus:[
                    {
                        status:'进行中',
                        statusact:'1',
                    },
                    {
                         status:'已结束',
                        statusact:'2',
                    },
                    {
                         status:'未开始',
                        statusact:'3',
                    },
                    {
                        status:'手动结束',
                        statusact:'4',
                    },
                ]
            },
               tableData: [{
                date: '2016-05-02 00:12:20 ~ 2017-05-03 00:14:26',
                name: '幸运大转盘',
                status:'进行中',
                statusact:'1',
                remark: ''
                }, {
                date: '2016-05-02 00:12:20 ~ 2017-05-03 00:14:26',
                name: '幸运大转盘',
                status:'已结束',
                statusact:'2',
                remark: ''
                }, {
                date: '2016-05-02 00:12:20 ~ 2017-05-03 00:14:26',
                name: '幸运大转盘',
                status:'未开始',
                statusact:'3',
                remark: '上海市普陀区金沙江路'
                }, {
                date: '2016-05-02 00:12:20 ~ 2017-05-03 00:14:26',
                name: '幸运大转盘',
                status:'手动结束',
                statusact:'4',
                remark: '上海市普陀区金'
                },]
            
            
        }
    },
    // created() {
    //     this.getMenuList()
    // },
    mounted() {
        
    },
    methods:{
       handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
        
      
    }
}
</script>

<style lang="less">
#activity{
    margin-left: 9.1%;
    padding:  20px;
    box-sizing: border-box;
    .searchbox{
        overflow: hidden;
        padding-bottom: 20px;
        //border-bottom: 1px solid #eee;
        margin-bottom: 20px;
        .el-form-item{
            float: left;
            .el-range-separator{
                    line-height: 21px;
            }
            .el-range__icon{
                line-height: 22px;
            }
        }
        .el-button{
            float: left;
            margin-left: 20px;
            margin-top: 5px;
        }
        .add{
            float: right;
        }
     }
     .table-list table th, td{
         
         border-top: none;
          border-left: none;
     }
     .beizhu{
         color: #e66666;
        margin-top: 15px;
        float: left;
     }
}
</style>
