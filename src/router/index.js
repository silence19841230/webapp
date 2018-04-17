import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Question from '@/components/Question'
import Course from '@/components/Course'
import QuestionResult from '@/components/QuestionResult'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/question',
      name: 'question',
      component: Question,
      meta: { requiresAuth: true }
    },
    {
      path: '/course',
      name: 'Course',
      component: Course,
      meta: {
        requiresAuth: true,
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/questionResult',
      name: 'QuestionResult',
      component: QuestionResult,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
