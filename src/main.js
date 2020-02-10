import Vue from 'vue';
import App from './App';
import store from './common/store';
Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App),
  created: function () {
    //从 localStorage中加载汇率
    store.dispatch('load');

    // 在 localStorage 中保存编辑过的汇率
    window.onbeforeunload = function () {
      store.dispatch('save');
    };
  },
}).$mount('#app');
