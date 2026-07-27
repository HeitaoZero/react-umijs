import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},

  proxy: {
    '/ajax': {
      target: 'https://m.maoyan.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },

  antd: {
    // mobile: false,
  },
});
