
import { createRouter,createWebHashHistory } from "../eResources/vue-router.js";



const curriculumvitae = { 
  template: '<curriculumvitae :infor="$store.state.personalInformation" ></curriculumvitae>',
  data() {
    return {
      a:10,
      // wis:true,
    }
  },
  mounted() {
    // if( this.$refs.add.$el.offsetWidth > 800){
    //   this.wis = false
    // }else{
    //   this.wis = true;
    // }
		// console.log( this.$refs.add.$el.clinetWidth )
		// console.log( this.$refs.add.$el.clinetHeight )
		// console.log( this.$refs.add.$el )
		// console.log( this.$refs.add.$el.offsetHeight )
		// console.log( this.$refs.add.$el.offsetWidth )

  },
}

const dropBYdrop = { template: '<dropBYdrop :data="$store.state.dropBYdrop">11111</dropBYdrop>' };

const comments = { template: '<comments :data="$store.state.comments" :list=" $store.state.commentsUer " :isdom=" $store.state.signIn "></comments>' };

const xRoutes = [
  { path: '/', name:"home",redirect:"/personal/dropBYdrop"},
  {
    name:"personal", path:"/personal", component:{
      template: "<div id='personal'><router-view :key='Math.floor(Math.random() * (10000000 - 1)) + 1'></router-view><abgm></abgm></div>"
    },
    children: [
      { path: 'resume', name:"resume", component: curriculumvitae },
      { path: 'dropBYdrop', name:"LeavingAmessage", component: dropBYdrop },
      { path: 'comments', name:"shareExperience", component: comments }
    ]
  },
  
  

]


// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes:xRoutes, // `routes: routes` 的缩写
})


router.beforeEach((to, from, next) => {
  
  to.params = {
      music: to.fullPath == "/personal/comments" ? true : false
  }
  next();
})

export default router;