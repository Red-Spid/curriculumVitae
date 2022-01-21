

class methodCluster {

    createApp( data={} ) { //挂载 data 数据
        return Vue.createApp(
            {
                data() {
                    return data
                },
    
                created() {
                    // console.log( this.$store );
                    // console.log( this.$refs )
    
                },
    
                onload(){
                    // console.log( this.$store );
                },
    
                mounted() {
                    this.$store.dispatch('increment');
                    // console.log( this.$store.state.todos,this.$store.state.count );
                    // console.log( VueRouter )
                    // console.log(this)
    
                },
    
                methods: {
                    // ...mapActions([
                        // 'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
                        // `mapActions` 也支持载荷：
                        // 'forlist' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
                    // ]),
                    // ...mapActions({
                    // 	add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
                    // })
                },
            }
        )
    }

    newVue( app="" ,id,arr=[] ){ //挂载 元素
        return app.use( arr[0] ).use( arr[1] ).mount('#'+id);
    }

    tempDom( app="", name = '', props = [], template = '', a = null){ // 挂载 组件

        app.component( name, {
            props: props,
            template: template,
            mounted() {
                // console.log( this.$refs.add.$el.clinetWidth )
                // console.log( this.$refs.add.$el.clinetHeight )
                // console.log( this.$refs.add )
                if(a!= null){
                    a.apply(this)
                    a.call(this)
                    a.bind(this)();
                    a(this);
                    // console.log(this)
                }
            }
        })
    }


}

var vuedata = {
	message: 'Hello Vue!!',

	personalInformation:{
		
	},

}

var cluster = new methodCluster();
export {
    cluster
};