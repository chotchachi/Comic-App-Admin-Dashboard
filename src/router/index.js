import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: process.env.BASE_URL ? 'history' : 'hash',
  base: process.env.BASE_URL,
  routes
})

const originalPush = router.push
router.push = function push (location, onResolve, onReject) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
