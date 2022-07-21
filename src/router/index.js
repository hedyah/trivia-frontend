import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignView from '../views/SignView.vue'
import QuizView from '../views/QuizView.vue'
import GameView from '../views/GameView.vue'
import ClientView from '../views/ClientView.vue'
import ScoreView from '../views/ScoreView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ClientView,
  },
  {
    path: '/sign',
    name: 'sign',
    component: SignView,
  },
  {
    path: '/quiz/:genre_id',
    name: 'quiz',
    component: QuizView,
  },
  {
    path: '/game/quiz/scoreboard',
    name: 'game/quiz/scoreboard',
    component: ScoreView,
  },
  {
    path: '/game/:quiz_id',
    name: 'game/',
    component: GameView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router;
