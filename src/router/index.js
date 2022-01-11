import Vue from 'vue';
import VueRouter from 'vue-router';
const index = () => import('../views/index/index.vue');
const certificate = () => import('../views/certificate/index.vue');
const ad = () => import('../views/ad/index.vue');
const singleList = () => import('../views/singleList/index.vue');
const docking = () => import('../views/info/docking.vue');
const media = () => import('../views/info/media.vue');
const domain = () => import('../views/info/domain.vue');
const website = () => import('../views/info/website.vue');
const contacts = () => import('../views/contacts/index.vue');
Vue.use(VueRouter);
const routes = [
  { path: '/', name: 'index', component: index },
  { path: '/certificate', name: 'certificate', component: certificate },
  { path: '/ad', name: 'ad', component: ad },
  { path: '/singleList/:type', name: 'singleList', component: singleList },
  { path: '/info/docking/:id', name: 'docking', component: docking },
  { path: '/info/media/:platform/:id', name: 'media', component: media },
  { path: '/info/domain/:id', name: 'domain', component: domain },
  { path: '/info/website/:id', name: 'website', component: website },
  { path: '/contacts', name: 'contacts', component: contacts },
];
const router = new VueRouter({ routes, mode: 'history' });
export default router;
