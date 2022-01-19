
// import App from './App.vue'

// #ifndef VUE3
import Vue from './vue.js';
// export "./vue.js";
Vue.config.productionTip = false
App.mpType = 'app'
const HelloVueApp = {
    data() {
        return {
            message: 'Hello Vue!!'
        }
    }
}
Vue.createApp(HelloVueApp).mount('#hello-vue')


import {fn} from "./a.js"

// 调用这个模块

fn(1);