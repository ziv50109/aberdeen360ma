/* eslint-disable */
import Vue from 'vue';
//import router from './router';
import App from './App';
import VueYouTubeEmbed from 'vue-youtube-embed';

Vue.use(VueYouTubeEmbed);
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  //router,
  components: { App },
  template: '<App/>',
});
