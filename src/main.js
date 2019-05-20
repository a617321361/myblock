import App from './App.vue'
import router from './router/router'

import qs from 'qs'
import api from './api/index'
import './styles/resetcss.less'
//引入公共样式
import './styles/public.less'
//引入图片拖拽排序插件
import VueDND from 'awe-dnd'
//引入字体库
import '../static/font-awesome/css/font-awesome.css'
//复制内容到粘贴板插件
import VueClipboard from 'vue-clipboard2'
//MD5
import md5 from 'js-md5'

Vue.prototype.qs = qs
Vue.prototype.api = api
Vue.prototype.$md5 = md5

Vue.use(VueDND)
Vue.use(VueClipboard)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
