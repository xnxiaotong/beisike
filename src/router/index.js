import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
      redirect: 'homepage',
      children: [
        {
          path: 'homepage',
          name: 'homepage',
          component: resolve => require(['@/components/main/homepage'], resolve),
          meta: {
            keepAlive: true,  //true 禁止重复加载, false不禁止,
            title: '首页',
          },
        },
        {
          path: 'cclass',
          name: 'cclass',
          component: resolve => require(['@/components/main/cclass'], resolve),
          meta: {
            keepAlive: false,  //true 禁止重复加载, false不禁止
            title: '分类',

          },

        },
        {
          path: 'buycar',
          name: 'buycar',
          component: resolve => require(['@/components/main/buycar'], resolve),
        },
        {
          path: 'user',
          name: 'user',

          component: resolve => require(['@/components/main/user'], resolve),
          meta: {
            keepAlive: false,  //true 禁止重复加载, false不禁止
            title: '我的',
            query: fp,
          },
        },
        {
          path: 'xiangqing',
          name: 'xiangqing',
          component: resolve => require(['@/components/main/xiangqing'], resolve),
        },
        {
          path: 'userinfo',
          name: 'userinfo',
          component: resolve => require(['@/components/child/userinfo'], resolve),
        },
        {
          path: 'reg',
          name: 'reg',
          component: resolve => require(['@/components/child/reg'], resolve),
        },

      ]
    }
  ]
})
var fp = "";
router.beforeEach((to, from, next) => {
  // console.log(from.path);
  if (to.path == "/user") {
    fp = from.path;
    if (from.path == "/user") {
      next({ path: fp })
    }
  }
  next();

})

console.log(fp);
export default router;