import Vue from 'vue';
import App from './App.vue';
import './components/elementui/style/index.scss';
// import Col from './components/elementui/Col';
// import Row from './components/elementui/Row';
// import element from './components/elementui';
import { Col, Row } from './components/elementui';

Vue.config.productionTip = false;
// Vue.use(element);
Vue.use(Col);
Vue.use(Row);
console.log(Col);
new Vue({
  render: h => h(App),
}).$mount('#app');
