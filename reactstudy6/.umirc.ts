import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 属于配置式路由,不配置这个就是约定式路由
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   { path: '/home', component: '@/pages/home' },
  //   { path: '/center', component: '@/pages/center' },
  //   { path: '/topics', component: '@/pages/topics' },
  //   { path: '/topics', component: '@/pages/[id]' },
  // ],
  fastRefresh: {},
});
