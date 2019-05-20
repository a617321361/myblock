import qs from 'qs'
import router from '../router/router'
//const baseUrl = 'http://192.168.5.185:8080/ac/'
// const baseUrl = 'http://192.168.5.180/'
// const baseUrl = 'http://192.168.5.123:8080/'
// const baseUrl = 'http://192.168.5.110:6877/ac/'
// const baseUrl = 'http://192.168.5.171:8080/'
// const baseUrl = 'http://192.168.5.122:9090/ac/'
// const baseUrl = 'http://192.168.5.170:9090/'
 const baseUrl = 'https://yy.kpzs.com/'

var return_code = {
    success_code: '0000',
    error_code: '1',
    log_over:'8000'
}
//MD5加密的key值
const pswKey = 'kpWechat'

function HTTPrequests(url,data = {}){
    url = encodeURI(baseUrl + url)
    if (!data || data == null) {
        data = {};
    }
    var sessionId = window.sessionStorage.getItem('sessionId');
    if (sessionId && sessionId.length > 0) {
        data.sessionId = sessionId;
    }

    // console.log('请求参数:');
    // console.log(data);

    return axios.post(url,qs.stringify(data)).then(res=>{
        // console.log('请求结果:')
        // console.log(res.data)
        if (res.data.code=='8000') {
            // if(window.confirm('登录已过期,请重新登录')){
                //alert("确定");
                ELEMENT.Message({
                    message: '登录已过期,请重新登录',
                    type: "warning"
                })
                window.sessionStorage.removeItem('sessionId')
                router.push('/login')
                // }else{
                //alert("取消");
                // window.sessionStorage.removeItem('sessionId')
                // router.push('/login')
            // }
            return
        }
        var requestData = res.data
        return requestData
    }).catch(error=>{
        console.log('请求失败:')
        console.log(error)
        // window.sessionStorage.removeItem('sessionId')
        // router.push('/login')
    })
}
//登录
function api_login(data){
    return HTTPrequests('back/userList/login.do',data)
}

//登录退出
function api_logout(data){
    return HTTPrequests('back/userList/logout.do',data)
}

//根据用户权限获取菜单
function api_usermenu(data){
    return HTTPrequests('back/userList/loadUserMenu.do',data)
}
//根据用户权限获取编辑按钮
function api_usereditmenu(data){
    return HTTPrequests('back/userList/loadThirdUserMenu.do',data)
}

//文件上传
function api_upload(data,callback=null){
    var formData = new FormData();
    formData.append('file', data)
    formData.append('sessionId', window.sessionStorage.getItem('sessionId'))
    //axios上传图片方法
    // return axios.post(encodeURI(baseUrl+"upload/uploadFile.do"),formData).then(res=>{
    //     if (res.status===200) {
    //         var requestData = res.data
    //         return requestData
    //     }else{
    //         _this.$message.warning('上传文件失败')
    //     }
    // })
    // 原生上传图片方法
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(event){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                callback(xhr)
            }else{
            _this.$message.warning('上传文件失败')
            }
        }
    }
    xhr.open('POST', baseUrl+"upload/uploadFile.do");
    xhr.send(formData)
}
//上传的函数
// _this.api.api_upload(上传的文件,res=>{
//     console.log(res.response)
//     var newImg = res.response
// })

//用户管理-用户列表
//获取列表
function api_user_userlist(data){
    return HTTPrequests('back/userList/getUserManagerListForPage.do',data)
}
//获取分组
function api_user_prelist(data){
    return HTTPrequests('back/userList/getPartitionByGroup.do',data)
}
//积分增减
function api_user_userpoint(data){
    return HTTPrequests('back/userList/updateMyPoint.do',data)
}
//用户封停\启用
function api_user_userbanned(data){
    return HTTPrequests('back/userList/updateBannedState.do',data)
}
//用户修改
function api_user_edituser(data){
    return HTTPrequests('back/userList/updateWechatUser.do',data)
}

//用户管理-用户分组
//获取列表
function api_user_grouplist(data){
    return HTTPrequests('back/userList/getPartitionByGroupForPage.do',data)
}
//分组列表
function api_user_groupprelist(data){
    return HTTPrequests('back/userList/getUserGroupModelListForPage.do',data)
}


//帖子管理-帖子列表
//获取列表
function api_post_postlist(data){
    return HTTPrequests('back/postList/list.do',data)
}
//设置帖子状态
function api_post_setpost(data){
    return HTTPrequests('back/postList/setPostState.do',data)
}
//获取帖子详情
function api_post_getpostdetail(data){
    return HTTPrequests('back/postList/getPostDetailsOnList.do',data)
}
//获取帖子详情(审核模块)
function api_post_getpostverify(data){
    return HTTPrequests('back/postVerify/getPostDetailsOnVerify.do',data)
}
//编辑帖子
function api_post_editpost(data){
    return HTTPrequests('back/postList/backEditPost.do',data)
}
//编辑帖子详情
function api_post_editpostdetail(data){
    return HTTPrequests('back/postList/editPostDetails.do',data)
}

//帖子管理-帖子审核
//获取列表
function api_post_verifylist(data){
    return HTTPrequests('back/postVerify/postVerifyList.do',data)
}
//获取帖子是否需要审核
function api_post_verifystate(data){
    return HTTPrequests('back/postVerify/getVerifyConfig.do',data)
}
//开关手动审核
function api_post_verifyswitch(data){
    return HTTPrequests('back/postVerify/setIsOpenVerify.do',data)
}
//审核帖子
function api_post_verifypost(data){
    return HTTPrequests('back/postVerify/verifyAndEditPost.do',data)
}
//快速审核帖子
function api_post_verifypostauto(data){
    return HTTPrequests('back/postVerify/verifyPost.do',data)
}

//帖子管理-帖子回收站
//获取列表
function api_post_reclist(data){
    return HTTPrequests('back/postList/postDeleteList.do',data)
}
//恢复帖子
function api_post_recpost(data){
    return HTTPrequests('back/postList/restorePostAndEditPost.do',data)
}
//回复帖子快速
function api_post_recpostauto(data){
    return HTTPrequests('back/postList/restorePost.do',data)
}

//帖子管理-帖子推荐
//获取列表
function api_post_hotlist(data){
    return HTTPrequests('back/postList/recommendList.do',data)
}
//取消帖子推荐
function api_post_hotcancel(data){
    return HTTPrequests('back/postList/cancelPostRecommend.do',data)
}
//推荐帖子排序
function api_post_hotsort(data){
    return HTTPrequests('back/postList/editRecommendSort.do',data)
}

//帖子管理-专区管理
//获取列表(分页)
function api_post_prefecture(data){
    return HTTPrequests('back/partition/getAllPartitionOnPage.do',data)
}
//获取分区(全部)
function api_post_prelist(data){
    return HTTPrequests('back/other/getAllPartition.do',data)
}
//隐藏专区
function api_post_prehide(data){
    return HTTPrequests('back/partition/setPartitionIsShow.do',data)
}
//新增专区
function api_post_addpre(data){
    return HTTPrequests('back/partition/addPartition.do',data)
}
//编辑专区
function api_post_editpre(data){
    return HTTPrequests('back/partition/editPartition.do',data)
}
//设置专区是否显示
function api_post_preisshow(data){
    return HTTPrequests('back/partition/setPartitionIsShow.do',data)
}
// 轮播图
function api_post_rotation(data){
    return HTTPrequests('back/partitionRotation/listPartitionRotation.do',data)
}


//帖子管理-评论管理
//获取列表
function api_post_comlist(data){
    return HTTPrequests('back/postComment/getAllCommentOnPage.do',data)
}
//删除评论
function api_post_deletecom(data){
    return HTTPrequests('back/postComment/deleteComment.do',data)
}
//编辑评论
function api_post_editcom(data){
    return HTTPrequests('back/postComment/editCommentAndAddIntegral.do',data)
}

//商品管理-商品订单
//获取列表
function api_goods_orderlist(data){
    return HTTPrequests('back/order/page.do',data)
}
//订单详情
function api_goods_orderdetail(data){
    return HTTPrequests('back/order/detail.do',data)
}
//订单发货
function api_goods_ordership(data){
    return HTTPrequests('back/order/ship.do',data)
}

//商品管理-商品信息
//获取列表
function api_goods_detaillist(data){
    return HTTPrequests('back/resource/page.do',data)
}
//获取礼包详情
function api_goods_detailmsg(data){
    return HTTPrequests('back/resource/full.do',data)
}
//获取代金券详情
function api_goods_vouchermsg(data){
    return HTTPrequests('back/resource/voucher.do',data)
}
//获取商品详情
function api_goods_goodsmsg(data){
    return HTTPrequests('back/resource/detail.do',data)
}
//编辑礼包详情
function api_goods_editdetail(data){
    return HTTPrequests('back/resource/replace.do',data)
}
//编辑代金券
function api_goods_editvoucher(data){
    return HTTPrequests('back/resource/updateVoucher.do',data)
}
//编辑商品详情
function api_goods_editgoodsdetail(data){
    return HTTPrequests('back/resource/update.do',data)
}
//添加礼包
function api_goods_addgift(data){
    return HTTPrequests('back/resource/saveGift.do',data)
}
//添加代金券
function api_goods_addvoucher(data){
    return HTTPrequests('back/resource/saveVoucher.do',data)
}
//添加商品
function api_goods_addgoods(data){
    return HTTPrequests('back/resource/saveResource.do',data)
}
//上传礼包码文件
function api_goods_fileParse(data,callback = null){
    var formData = new FormData();
    formData.append('uploadFile', data)
    formData.append('sessionId', window.sessionStorage.getItem('sessionId'))
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(event){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                callback(xhr)
            }else{
            _this.$message.warning('上传文件失败')
            }
        }
    }
    xhr.open('POST', baseUrl+"back/resource/fileParse.do");
    xhr.send(formData)
}
//查看礼包码
function api_goods_checkcode(data){
    return HTTPrequests('back/resource/loadResourceCodeList.do',data)
}

//活动管理-分享拆红包
//获取红包信息
function api_activity_sharelist(data){
    return HTTPrequests('back/activity/getRedpack.do',data)
}
//修改红包信息
function api_activity_editshare(data){
    return HTTPrequests('back/activity/modifyRedpack.do',data)
}

//活动管理-砍价免费拿
//获取列表
function api_activity_wheellist(data){
    return HTTPrequests('back/activity/getBarginListForPage.do',data)
}
//获取砍价信息
function api_activity_wheelmsg(data){
    return HTTPrequests('back/activity/getBargin.do',data)
}
//编辑砍价信息
function api_activity_editwheel(data){
    return HTTPrequests('back/activity/updateBargin.do',data)
}
//添加砍价信息
function api_activity_addwheel(data){
    return HTTPrequests('back/activity/addBargin.do',data)
}
//获取商品列表信息
function api_activity_getresource(data){
    return HTTPrequests('back/activity/getResourceListForPage.do',data)
}

//活动管理-幸运大转盘
//获取列表
function api_activity_barlist(data){
    return HTTPrequests('back/activity/getTurntableListForPage.do',data)
}
//获取转盘详情
function api_activity_barmsg(data){
    return HTTPrequests('back/activity/getActivityTurntable.do',data)
}
//添加转盘
function api_activity_addbar(data){
    return HTTPrequests('back/activity/addActivityTurntable.do',data)
}
//编辑转盘
function api_activity_editbar(data){
    return HTTPrequests('back/activity/updateActivityTurntable.do',data)
}

//活动管理-手动结束活动
function api_activity_overAc(data){
    return HTTPrequests('back/activity/stopActivity.do',data)
}

//平台管理
//获取信息
function api_plantform_plantformm(data){
    return HTTPrequests('back/manager/getManager.do',data)
}
//修改平台管理
function api_plantform_editplantform(data){
    return HTTPrequests('back/manager/addManager.do',data)
}

//平台管理-吊屏管理
//获取列表
function api_plantform_poplist(data){
    return HTTPrequests('back/screan/getScreanListForPage.do',data)
}
//添加吊屏
function api_plantform_addpop(data){
    return HTTPrequests('back/screan/addScrean.do',data)
}
//修改吊屏
function api_plantform_editpop(data){
    return HTTPrequests('back/screan/updateScrean.do',data)
}
//删除吊屏
function api_plantform_removepop(data){
    return HTTPrequests('back/screan/deleteScrean.do',data)
}

//平台管理-热门搜索
//获取列表
function api_plantform_search(data){
    return HTTPrequests('back/search/getSearchModelListForPage.do',data)
}
//修改列表位置
function api_plantform_reSort(data){
    return HTTPrequests('back/search/reSortOrder.do',data)
}
//修改搜索
function api_plantform_editsearch(data){
    return HTTPrequests('back/search/updateSearchModel.do',data)
}
//添加搜索
function api_plantform_addsearch(data){
    return HTTPrequests('back/search/addSearch.do',data)
}
//删除搜索
function api_plantform_rmsearch(data){
    return HTTPrequests('back/search/deleteSearchModel.do',data)
}

//平台管理-首页标签
//获取列表
function api_plantform_taglist(data){
    return HTTPrequests('back/label/getLabelListForPage.do',data)
}
//添加首页标签
function api_plantform_addtag(data){
    return HTTPrequests('back/label/addLabel.do',data)
}
//修改首页标签
function api_plantform_edittag(data){
    return HTTPrequests('back/label/modifyLabel.do',data)
}
//删除首页标签
function api_plantform_removetag(data){
    return HTTPrequests('back/label/deleteLabel.do',data)
}

//平台管理-轮播管理
//获取列表
function api_plantform_sliderlist(data){
    return HTTPrequests('back/banner/getBannerListForPage.do',data)
}
//添加轮播
function api_plantform_addslider(data){
    return HTTPrequests('back/banner/addBanner.do',data)
}
//修改轮播
function api_plantform_editslider(data){
    return HTTPrequests('back/banner/modifyBanner.do',data)
}
//删除轮播
function api_plantform_removeslider(data){
    return HTTPrequests('back/banner/deleteBanner.do',data)
}

//平台管理-积分设置
//获得列表
function api_plantform_intlist(data){
    return HTTPrequests('back/dict/getDictModelList.do',data)
}
//修改积分设置
function api_plantform_editint(data){
    return HTTPrequests('back/dict/updateDictModel.do',data)
}

//平台管理-系统消息
//获取列表
function api_plantform_msglist(data){
    return HTTPrequests('back/systemMessage/getSystemMessageListForPage.do',data)
}
//添加消息
function api_plantform_addmsg(data){
    return HTTPrequests('back/systemMessage/addSystemMessage.do',data)
}
//删除消息
function api_plantform_removemsg(data){
    return HTTPrequests('back/systemMessage/deleteSystemMessage.do',data)
}
//获得指定id信息
function api_plantform_getidmsg(data){
    return HTTPrequests('back/message/modifyMessage.do',data)
}
//分区列表
function api_plantform_msgprelist(data){
    return HTTPrequests('back/systemMessage/getPartitionList.do',data)
}

//平台管理-自动化消息
//获取列表
function api_plantform_autolist(data){
    return HTTPrequests('back/autoMessage/getAutoMessageList.do',data)
}
//编辑自动化消息
function api_plantform_editauto(data){
    return HTTPrequests('back/autoMessage/modifyAutoMessage.do',data)
}

//报表系统-商品报表
//获取列表
function api_statement_goodslist(data){
    return HTTPrequests('back/report/getOrderReport.do',data)
}

//报表系统-分享拆红包
//获取列表
function api_statement_sharelist(data){
    return HTTPrequests('back/report/getRedpackReport.do',data)
}
//查看日志
function api_statement_sharelog(data){
    return HTTPrequests('back/report/getRedpackInfoLog.do',data)
}

//报表系统-砍价免费拿
//获取列表
function api_statement_wheellist(data){
    return HTTPrequests('back/report/getBargainReport.do',data)
}
//查看日志
function api_statement_wheellog(data){
    return HTTPrequests('back/report/getBargainInfoLog.do',data)
}

//报表系统-幸运大转盘
//获取列表
function api_statement_bargainlist(data){
    return HTTPrequests('back/report/getTurntableReport.do',data)
}

//报表系统-积分报表
//获取列表
function api_statement_integrallist(data){
    return HTTPrequests('back/report/getIntegralReport.do',data)
}

//报表系统-礼包报表
//获取列表
function api_statement_giftlist(data){
    return HTTPrequests('back/report/getGiftPacks.do',data)
}

//员工管理-员工列表
//获取列表
function api_manage_userlist(data){
    return HTTPrequests('back/userList/loadBackUserInfo.do',data)
}
//获取用户信息
function api_manage_usermsg(data){
    return HTTPrequests('back/userList/loadBackUserById.do',data)
}
//编辑用户
function api_manage_edituser(data){
    return HTTPrequests('back/userList/editBackUserInfo.do',data)
}
//添加用户
function api_manage_adduser(data){
    return HTTPrequests('back/userList/addBackUserInfo.do',data)
}
//删除用户
function api_manage_removeuser(data){
    return HTTPrequests('back/userList/delBackUser.do',data)
}
//获取用户权限列表
function api_manage_userAcllist(data){
    return HTTPrequests('back/userList/loadBackUserAcl.do',data)
}
//编辑用户权限
function api_manage_edituserAcl(data){
    return HTTPrequests('back/userList/editBackUserAcl.do',data)
}


//员工管理-分组管理
//获取分组列表
function api_manage_grouplist(data){
    return HTTPrequests('back/userList/loadBackRoleList.do',data)
}
//新增分组
function api_manage_addgroup(data){
    return HTTPrequests('back/userList/addBackRoleInfo.do',data)
}
//编辑分组
function api_manage_editgroup(data){
    return HTTPrequests('back/userList/editBackRoleInfo.do',data)
}
//更新分组下所有用户的权限
function api_manage_RoleAclToUser(data){
    return HTTPrequests('back/userList/editRoleAclToUser.do',data)
}
//获取后台分组权限
function api_manage_groupAcllist(data){
    return HTTPrequests('back/userList/loadBackRoleAcl.do',data)
}
//编辑分组权限
function api_manage_editgroupAcl(data){
    return HTTPrequests('back/userList/editBackRoleAclInfo.do',data)
}


//员工管理-操作日志
function api_manage_editlog(data){
    return HTTPrequests('back/log/getLogModelListForPage.do',data)
}

//更新轮播图信息
function api_updata_banner(data){
    return HTTPrequests('back/partitionRotation/updatePartitionRotation.do',data)
}

export default ({
    baseUrl,
    pswKey,
    api_login,
    api_logout,
    api_usermenu,
    api_usereditmenu,
    api_upload,
    api_user_userlist,
    api_user_prelist,
    api_user_userpoint,
    api_user_userbanned,
    api_user_edituser,
    api_user_grouplist,
    api_user_groupprelist,
    api_post_prefecture,
    api_post_postlist,
    api_post_verifylist,
    api_post_reclist,
    api_post_hotlist,
    api_post_setpost,
    api_post_verifyswitch,
    api_post_verifypost,
    api_post_verifypostauto,
    api_post_verifystate,
    api_post_hotcancel,
    api_post_hotsort,
    api_post_prehide,
    api_post_addpre,
    api_post_editpre,
    api_post_preisshow,
    api_post_prelist,
    api_post_getpostdetail,
    api_post_getpostverify,
    api_post_editpost,
    api_post_editpostdetail,
    api_post_recpost,
    api_post_recpostauto,
    api_post_comlist,
    api_post_deletecom,
    api_post_editcom,
    api_goods_orderlist,
    api_goods_detailmsg,
    api_goods_goodsmsg,
    api_goods_vouchermsg,
    api_goods_editvoucher,
    api_goods_editdetail,
    api_goods_editgoodsdetail,
    api_goods_addgift,
    api_goods_addvoucher,
    api_goods_addgoods,
    api_goods_orderdetail,
    api_goods_ordership,
    api_goods_detaillist,
    api_goods_fileParse,
    api_goods_checkcode,
    api_activity_sharelist,
    api_activity_editshare,
    api_activity_wheellist,
    api_activity_wheelmsg,
    api_activity_editwheel,
    api_activity_addwheel,
    api_activity_getresource,
    api_activity_barlist,
    api_activity_barmsg,
    api_activity_addbar,
    api_activity_editbar,
    api_activity_overAc,
    api_plantform_plantformm,
    api_plantform_editplantform,
    api_plantform_search,
    api_plantform_reSort,
    api_plantform_editsearch,
    api_plantform_addsearch,
    api_plantform_rmsearch,
    api_plantform_poplist,
    api_plantform_addpop,
    api_plantform_editpop,
    api_plantform_removepop,
    api_plantform_taglist,
    api_plantform_addtag,
    api_plantform_edittag,
    api_plantform_removetag,
    api_plantform_sliderlist,
    api_plantform_addslider,
    api_plantform_editslider,
    api_plantform_removeslider,
    api_plantform_intlist,
    api_plantform_editint,
    api_plantform_msglist,
    api_plantform_addmsg,
    api_plantform_removemsg,
    api_plantform_getidmsg,
    api_plantform_msgprelist,
    api_plantform_autolist,
    api_plantform_editauto,
    api_statement_goodslist,
    api_statement_sharelist,
    api_statement_sharelog,
    api_statement_wheellist,
    api_statement_wheellog,
    api_statement_bargainlist,
    api_statement_integrallist,
    api_statement_giftlist,
    api_manage_userlist,
    api_manage_grouplist,
    api_manage_adduser,
    api_manage_edituser,
    api_manage_removeuser,
    api_manage_edituserAcl,
    api_manage_usermsg,
    api_manage_userAcllist,
    api_manage_addgroup,
    api_manage_editgroup,
    api_manage_RoleAclToUser,
    api_manage_groupAcllist,
    api_manage_editgroupAcl,
    api_manage_editlog,
    api_post_rotation,
    api_updata_banner
})