import Vue from 'vue';
import VueRouter from 'vue-router';
const index = () => import('../views/index/index.vue');
const certificate = () => import('../views/certificate/index.vue');
const ad = () => import('../views/ad/index.vue');
Vue.use(VueRouter);
const routes = [
  { path: '/', name: 'index', component: index },
  { path: '/certificate', name: 'certificate', component: certificate },
  { path: '/ad', name: 'ad', component: ad },
];
const router = new VueRouter({ routes, mode: 'history' });
export default router;
