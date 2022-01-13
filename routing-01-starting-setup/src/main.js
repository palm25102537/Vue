import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';

const router = createRouter({
  routes: [
    {
      path: '/',
      redirect: '/teams',
      // alias // url doestn't change load same component
    },
    {
      path: '/teams',
      // alias: '/',
      // component: () => import('./components/teams/TeamsList.vue'),
      components: {
        default: () => import('./components/teams/TeamsList.vue'),
        footer: () => import('./components/teams/TeamsFooter.vue')
      },
      children: [
        {
          path: ":teamId",
          props: true,
          name: 'team-members',
          component: () => import('./components/teams/TeamMembers.vue')
        }
      ]
    },
    {
      path: '/users',
      component: () => import('./components/users/UsersList.vue'),
      // beforeEnter(to, from, next) {
      //   console.log('user beforeEnter')
      //   next(true)
      // }
    },
    {
      path: '/:notFound(.*)',
      component: () => import('./components/nav/NotFound.vue')
    }
  ],
  history: createWebHistory(),
  linkActiveClass: 'active',
  scrollBehavior(to, from, position) {
    if (position) {
      return position
    } else {
      return { left: 100, top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  // console.log('Global beforeEach')
  // console.log(to, from)
  // if (to.name === 'team-members') {
  //   next()
  // } else {
  //   next({ name: 'team-members', params: { teamId: '3' } })
  // }
  next()
})

const app = createApp(App)

app.use(router)

app.mount('#app');
