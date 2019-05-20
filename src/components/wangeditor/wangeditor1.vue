<template>
  <div >
    <div
      ref="editor"
      style="text-align:left"
    ></div>
  </div>
</template>

<script>
import WangEditor from "wangeditor";
export default {
  name: "editor",
  model: {
    prop: "editorContent",
    event: "change"
  },
  props: {
    editorContent: { required: true },
    
  },
 
  mounted() {
   
    /*实例化*/
    var editor = new WangEditor(this.$refs.editor);
    // editor.$textElem.attr('contenteditable', false)
    /*设置上传图片*/
    editor.customConfig.uploadImgServer = this.api.baseUrl + "upload/uploadFile.do";
    editor.customConfig.uploadFileName = "file";
    
    editor.customConfig.uploadImgParams = {
      // 如果版本 <=v3.1.0 ，属性值会自动进行 encode ，此处无需 encode
      // 如果版本 >=v3.1.1 ，属性值不会自动 encode ，如有需要自己手动 encode
      sessionId: window.sessionStorage.getItem('sessionId')
    }
    editor.customConfig.uploadImgHooks = {
      customInsert: function(insertImg, result, editor) {
        
        var url = result.obj;
        console.log(100,url)
        insertImg(url);
      }
    };
    editor.customConfig.menus = [          //菜单配置
        // 'bold',  // 粗体
        // 'italic',  // 斜体
        //'underline',  // 下划线
        // 'head',  // 标题
        // 'fontSize',  // 字号
        //'fontName',  // 字体
        //'strikeThrough',  // 删除线
        //'foreColor',  // 文字颜色
        //'backColor',  // 背景颜色
        //'link',  // 插入链接
        //'list',  // 列表
        // 'justify',  // 对齐方式
        //'quote',  // 引用
        //'emoticon',  // 表情
        //'image',  // 插入图片
        //'table',  // 表格
        //'video',  // 插入视频
        //'code',  // 插入代码
        'undo',  // 撤销
         'redo'  // 重复
    ]
    /*绑定回馈事件*/
    editor.customConfig.onchange = html => {
       var newhtml='<div>'+html+'</div>'
      // console.log(555,html)
      this.$attrs.changel(html);

    //  this.$emit("change", newhtml);
    };
    /*创建编辑器*/
    editor.create();
    // 禁用
    // editor.disable();
    /*初始内容*/
    editor.txt.html(this.editorContent);
  }
};
</script>

