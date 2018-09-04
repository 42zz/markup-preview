import Vue from 'vue'
import App from './App.vue'
import './assets/style.css';
import markdown from './directives/markdown';

Vue.directive('markdown', markdown);

new Vue({
  el: '#app',
  render: h => h(App)
})
