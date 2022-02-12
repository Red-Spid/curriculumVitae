
import { createApp } from "./js/module/eResources/vue.js";
import dataIndex from "./js/module/sPackaging/vuedata.js"
import store from "./js/module/sPackaging/vuex.js";
import router from "./js/module/sPackaging/vueRouter.js";
import assembly from "./js/module/assembly/index.js";

const app1 = createApp(dataIndex);
// 定义一个名为 runoob的新全局组件

assembly(app1);
app1.use(store).use(router);

// 定义一个名为 button-counter 的新全局组件
app1.component('button-counter', {
    data() {
        return {
            count: 0
        }
    },
    template: `
      <button @click="count++">
        点了 {{ count }} 次！
      </button>`
})

const vueadd =  app1.mount("#app");
// const appVue = vueadd.mount("#sedapp");
// console.log( vueadd )
console.log(  app1, vueadd.$store );
