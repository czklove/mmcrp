import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { RadioGroup, Cell, Checkbox, Button ,NavBar, Tabbar, Radio, TabbarItem, Search,Row, Col ,Swipe, SwipeItem, Lazyload, Tag, Icon, Field, CellGroup   } from 'vant';

import '@/assets/css/reset.css';
import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.use(NavBar).use(Tabbar).use(TabbarItem).use(Button)
.use(Search).use(Row).use(Col).use(Swipe).use(SwipeItem)
.use(Lazyload).use(Tag).use(Icon).use(RadioGroup).use(Cell)
.use(Field).use(CellGroup).use(Radio).use(Checkbox);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
