import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import { createStore } from 'vuex'
import state from './store/'
import App from './App.vue'
import router from './router'


import 'admin-lte/plugins/fontawesome-free/css/all.css'
import 'admin-lte/dist/css/adminlte.css'

import 'admin-lte/plugins/jquery/jquery.js'
import 'admin-lte/dist/js/adminlte.js'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.js'
import 'admin-lte/plugins/pace-progress/pace.js'
import 'admin-lte/plugins/pace-progress/themes/purple/pace-theme-minimal.css'

axios.defaults.baseURL = 'http://localhost:8000/api/';
const store = createStore(state)

createApp(App)
.use(VueAxios,axios)
.use(store)
.use(router)
.mount('#app')
