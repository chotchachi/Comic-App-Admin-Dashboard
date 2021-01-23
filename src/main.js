import Vue from 'vue'
export default Vue
import element from 'element-ui'
import App from './app.vue'
import i18n from './i18n/index.js'
import store from './store/index.js'
import router from './router/index.js'
import plugins from './plugins/index.js'

// global styles
import './style.scss'

// global config
Vue.config.debug = process.env.NODE_ENV === 'development'
Vue.config.silent = process.env.NODE_ENV === 'production'
Vue.config.productionTip = false

// plugins
Vue.use(element)
Vue.use(plugins)

// Create root app
const app = new Vue({
  name: 'root',
  i18n: i18n,
  store: store,
  router: router,
  render: h => h(App)
})

app.$mount('#app')
