import { createRouter, createWebHistory } from 'vue-router';
import ToDoList from '../components/ToDoList.vue';
import AboutPage from '../views/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ToDoList  // Assuming you want to show the ToDo list at the home page.
  },
  {
    path: '/about',
    name: 'about',
    // Lazy loading the general About page
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/a-propos',
    name: 'a-propos',
    component: AboutPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
