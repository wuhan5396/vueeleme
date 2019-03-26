import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/container/Container'
import Login from '@/views/TheLogin'
import Dashboard from '@/views/dashboard'
import Article from '@/views/article'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Container',
      component: Container,
      children: [
        // eslint-disable-next-line standard/object-curly-even-spacing
        {path: 'dashboard', name: '首页', component: Dashboard },
        // eslint-disable-next-line standard/object-curly-even-spacing
        {path: 'article', name: '文章', component: Article }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
