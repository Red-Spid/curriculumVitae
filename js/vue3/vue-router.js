
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

const dropBYdrop = { template: '<dropBYdrop :data="$store.state.dropBYdrop"></dropBYdrop>' };

const comments = { template: '<comments :data="$store.state.comments" :list=" $store.state.commentsUer "></comments><signin></signin>' };

const routes = [
  { path: '/', component: curriculumvitae,
  
  },
  { path: '/dropBYdrop', component: dropBYdrop },
  { path: '/comments', component: comments }

]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})