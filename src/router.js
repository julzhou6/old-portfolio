import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import Animation from '@/components/Animation.vue';
import Code from '@/components/Code.vue';
import Illustration from '@/components/Illustration.vue';
import Design from '@/components/Design.vue';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
        path: '/Animation',
        name: 'Animation',
        component: Animation,
    },
    {
        path: '/Code',
        name: 'Code',
        component: Code,
    },
    {
        path: '/Design',
        name: 'Design',
        component: Design,
    },
    {
        path: '/Illustration',
        name: 'Illustration',
        component: Illustration,
    }
  ]
})