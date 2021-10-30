// https://unpkg.com/vue-router@3.5.3/dist/vue-router.js
function createApp( data={} ) { //挂载 data 数据
	return Vue.createApp(
		{
			data() {
				return data
			},

			create(){
				console.log( this.$store );
			}, 

			onload(){
				console.log( this.$store );
			},

			mounted() {
				this.$store.dispatch('increment');
				// console.log( this.$store.state.todos,this.$store.state.count );
console.log( VueRouter )

console.log(this)
			},

			methods: {
				
			},
		}
	)
}

// console.log( VueRouter )
function newVue( id ){ //挂载 元素
	return app.use(router).use(store).mount('#'+id);
}

var vuedata = {
	message: 'Hello Vue!!',

	personalInformation:{
		
	},

}

const app = createApp(vuedata);

function tempDom( name = '', props = [], template = '' ){ // 挂载 组件
	app.component( name, {
		props: props,
		template: template
	})
}

tempDom("github", ["my"], "#github" );

tempDom("curriculumvitae", ["infor"], "#curriculumvitae" );

tempDom("myc", ["myc"], "#tpl" );

	
// console.log(Vuex.Store)




