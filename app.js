
import dataIndex from "./js/module/sPackaging/vuedata.js"
import store from "./js/module/sPackaging/vuex.js";
import router from "./js/module/sPackaging/vueRouter.js";
import assembly from "./js/assembly/template.js";
import global from "./js/global/index.js";
import { defaultRequest } from "./js/https/index.js";
// console.log( defaultRequest )
// import {getaxios} from "./js/https/index.js";

// getaxios().then((value) => {
//     console.log(value)
// })

// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         console.log( JSON.parse( this.responseText ) );
//       }
//     };
//     xhttp.open("GET", "/curriculumVitae/json/index.json", true);
//     xhttp.send();
//   }
//   loadDoc()
// import { axios } from "./js/https/axios.js";

const _this = global.createVue(dataIndex)
// 定义一个新全局组件
assembly(_this);

const app =  global.newVue( _this,"app",[store,router]  )
app.$global = global;

defaultRequest().then((value) => {
  app.$store.replaceState(value);
})
  // December 17, 2022 03:24:46
var a,b;
// a = global.isDateVaild( new Date() )
// b = global.dayDif( new Date(), new Date("2022-2-1") )
a = global.string_lice("aa sssss dddd vvvv ffff bb ccc", 20)
console.log( 
  a,
  // b
)