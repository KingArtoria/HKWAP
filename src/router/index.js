import Vue from 'vue';
import VueRouter from 'vue-router';
const index = () => import('../views/index/index.vue');
const certificate = () => import('../views/certificate/index.vue');
const ad = () => import('../views/ad/index.vue');
const singleList = () => import('../views/singleList/index.vue');
const docking = () => import('../views/info/docking.vue');
Vue.use(VueRouter);
const routes = [
  { path: '/', name: 'index', component: index },
  { path: '/certificate', name: 'certificate', component: certificate },
  { path: '/ad', name: 'ad', component: ad },
  { path: '/singleList/:type', name: 'singleList', component: singleList },
  { path: '/info/docking/:id', name: 'docking', component: docking },
];
const router = new VueRouter({ routes, mode: 'history' });
export default router;
