const router =  new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component:  (resolve) => require(['../views/Home.vue'], resolve),
      children:[
        {
          path: '/index',
          name: 'index',
          component:  (resolve) => require(['../views/index.vue'], resolve),
         
        },
        {
          path: '/knowledge',
          name: 'knowledge',
          component:  (resolve) => require(['../views/knowledge.vue'], resolve),
         
        },
     
      {
        path: '/Personal_diary',
        name: 'Personal_diary',
        component:  (resolve) => require(['../views/Personal_diary.vue'], resolve),
       
      },
        {
          path: '/articleinfo',
          name: 'articleinfo',
          component:  (resolve) => require(['../views/showblockdetial.vue'], resolve),
         
        },
        {
          path: '/search',
          name: 'search',
          component:  (resolve) => require(['../views/search.vue'], resolve),
         
        },
      
      ]
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component:  (resolve) => require(['../views/login.vue'], resolve),
    // },
  ]
});

// router.beforeEach((to, from, next) => {
//   let ses = window.sessionStorage;
//   if (to.path === '/login') {
//     next()
//   }else{
//       if (!ses.getItem("sessionId")) {
//         console.log('没有登录');
//         next({path:'/login'})
//       }else{
//         console.log("已经登录账号")
//         next()
//       }
    
//   }
    
// });

export default router