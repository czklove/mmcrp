import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import store from '@/store'
Vue.use(Router)

//为了与后端路由区分开，统一路由前缀加static ,为了能够一起部署
const router = new Router({
  mode: 'hash',
  scrollBehavior(to, from, savePosition) {
    if(savePosition) {
      return savePosition
    } else {
      return {x: 0,y: 0}
    }
  },
  routes: routes
})
/* const HAS_LOGINED = true*/
// to
router.beforeEach((to, from, next) => {
  /* console.log(store)
  store.commit('updatelinkmore',false) */
  next()
})

export default router
