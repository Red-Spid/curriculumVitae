/*
 * 最外层的 vue 数据 方法 父亲 
 */
export default {

    data() {
        return {
            message: 'Hello Vue!!',

            personalInformation: {

            },
        }
    },
    
    created() {
        // console.log( this.$store );
        // console.log( this.$refs )
        // console.log(this.personalInformation)

    },
    onload() {
        // console.log( this.$store );
    },
    mounted() {
        // this.$store.dispatch('increment');
        // console.log( this.$refs.headr.$el.scrollWidth );
        // scrollWidth offsetWidth clientWidth
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