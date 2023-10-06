import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import ProductSearch from '../search/ProductSearch.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/build',
      name: 'Build',
      component: RobotBuilder,
    },
    {
      path: '/search',
      name: 'Search',
      component: ProductSearch,
    },
  ],
});
