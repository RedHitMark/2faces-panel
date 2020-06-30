import Vue from 'vue'
import App from './App.vue'
import VueCodemirror from 'vue-codemirror'

import router from './router'

// import Bootstrap, MDB Vue and Font Awesome style
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// import codemirror style
import 'codemirror/lib/codemirror.css'
Vue.use(VueCodemirror);

// import Vue Search Select css
import 'vue-search-select/dist/VueSearchSelect.css'

// import json tree view
import TreeView from "vue-json-tree-view"
Vue.use(TreeView)


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
