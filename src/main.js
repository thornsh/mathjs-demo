import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { add, bignumber, format, multiply } from 'mathjs';

createApp(App).mount('#app');
const aaa = add(0.1, 0.2);
const bbb = multiply(5168.48, 100);
console.log(aaa);
console.log(bbb);
console.log(bignumber(5168.48).mul(100).toNumber());
console.log(bignumber(5168.48).mul(100).floor().div(100).toNumber());
