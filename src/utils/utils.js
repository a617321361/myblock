//时间格式转换
export function Format(sj){
    if (sj=='') {
        return ''
    } else {
    var now = new Date(sj);
    var   year=now.getFullYear();    
    var   month=change(now.getMonth()+1);    
    var   date=change(now.getDate());    
    var   hour=change(now.getHours());    
    var   minute=change(now.getMinutes());    
    var   second=change(now.getSeconds());
    function change(t){
        if(t<10){
            return "0"+t;
        }else{
            return t;
        }
    }
    return   year+"-"+month+"-"+date+"   "+hour+":"+minute+":"+second;   
    }
};
//手机验证
export function isvalidPhone(str) {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    return reg.test(str)
};

//textarea空格转换为 \n
export function Trim(str) {  //str表示要转换的字符串
    return str.replace(/\↵/g,"\n");
}

//textarea \n转换为空格
export function Trim2(str) {  //str表示要转换的字符串
    return str.replace(/\↵/g,"\n");
}


//编辑内容图片获取
export function getimglist(str) {  //str表示要转换的字符串
    str = str.replace(/&nbsp;/g,"&nbsp");
    var rex = /src="http:\/\/.*?\.(png|jpg|jpeg|gif)/gi;
    var newimgarr=str.match(rex);
    var postImages=[];
    //console.log(40,newimgarr)
   if(newimgarr&&newimgarr.length>0&&newimgarr.length<=9){
        newimgarr.map((val,key)=>{
            val=val.substring(5,val.length)
            postImages.push(val)
        })
        return JSON.stringify(postImages);
    }else if(newimgarr&&newimgarr.length>9){
       return '>9';
    }else{
        return ''
    }
    
   
    
}


 //获取当前时间例2019-05-17
 export function getNowFormatDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var currentdate = year  +'-'+ month  +'-'+ strDate+' '+hour+':'+minute+':'+second;
    return currentdate;
}