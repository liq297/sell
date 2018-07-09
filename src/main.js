// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from "vue-resource";
import goods from "components/goods/goods";
import seller from "components/seller/seller";
import ratings from "components/ratings/ratings";
import 'common/stylus/index.styl'

Vue.config.productionTip = false;

/* eslint-disable no-new */

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false;
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path:"/",component:goods},
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
let router = new VueRouter({
  routes,
  linkActiveClass:"active"
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
});