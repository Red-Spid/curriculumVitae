
import dataIndex from "./js/module/sPackaging/vuedata.js"
import store from "./js/module/sPackaging/vuex.js";
import router from "./js/module/sPackaging/vueRouter.js";
import assembly from "./js/module/assembly/index.js";
import global from "./js/global/index.js";

const _this = global.createVue(dataIndex)
// 定义一个新全局组件
assembly(_this);

const app =  global.newVue( _this,"app",[store,router]  )
app.$global = global;

// console.log(  app, app.$global );
