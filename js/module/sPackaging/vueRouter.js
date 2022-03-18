
import { createRouter,createWebHashHistory } from "../eResources/vue-router.js";
import { dropBYdrop, comments, home, curriculumvitae, personal } from "../router/index.js";

const xRoutes = [
  { path: '/', name:"home", component: home(), redirect:"/personal/dropBYdrop/:id",
    children:[
      
      {
        name:"personal", path:"personal", component: personal(),
        children: [
          { path: 'resume/:id', name:"resume", component: curriculumvitae() },
          { path: 'dropBYdrop/:id', name:"LeavingAmessage", component: dropBYdrop() },
          { path: 'comments/:id', name:"shareExperience", component: comments() }
        ]
      },
    ]
  },
  {
    name:"detall", path: "/detail", component: {
      template:"<h1>11111</h1>"
    }, 
  }

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
      music: to.fullPath == "/personal/comments" ? true : false,
      id:111
  }
  next();
})

export default router;