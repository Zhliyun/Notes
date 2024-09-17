import { UserConfig } from 'vitepress';
import ddd from './ddd/route.mjs'

const routes: UserConfig['themeConfig']['sidebar'] = [
  {
    text: '技术摘抄',
    base: '/tech-excerpts/',
    items: ddd
  }
];

export default routes;