
import { cluster } from '../vue3/class.js';
import { xRoutes,router } from '../vue3/vue-router.js';
import { xStore,xState } from '../vue3/vue3x.js';
// import { axiosHtpps } from '../https/axios.js';

// console.log(xStore,xState)

var vdata = {
    message: 'Hello Vue!!',

    personalInformation: {

    },

}

const _this = cluster.createApp(vdata);

/*
    生命周期 life cycle ----- 简写 lc
    组件列队 componentApi queue ----- cq
*/
var cApi = [
    {
        name: "github", 
        lc:{
            props: ["my", "list"], 
        }
    },
    {
        name: "curriculumvitae",
        lc:{
            props: ["infor"],
        },
        function: (_self) => {
            // console.log( _self.$refs.add, 1111 )
        }

    },
    {
        name: "dropBYdrop",
        lc:{
            props: ["data"], 
        },
    },
    {
        name: "comments",
        lc:{
            props: ["data", "list", "isdom"],
        }
    },
    {
        name: "signin",
        lc:{
            props: ["data", "list"],
        }
    },
    {
        name:"abgm",
        lc:{
            props:[],
            data(){
                return {
                    router:false
                }
            },
            mounted() {
              console.log( this.$router.options.history.location,this.$route )  
            },
        }
    }
]

const vueApi = {
    componentName : "",
    props : "",
    beforeCreate:{

    },
    created:{
        
    },
    beforeMount:{

    },
    mounted:{

    },
    data(){
        return{

        }
    },
    methods: {
        
    },
    beforeUpdate:{

    },
    updated:{

    },
    beforeDestroy:{

    }
}

cApi.forEach( value => {
    cluster.tempDom(
        _this, value.name, value.lc
    )
})

const _sed = cluster.newVue(_this, "app",[router,xStore]);

// _this.config.globalProperties.$http = axios;
// console.log(_sed.$router);
// console.log(_sed.$http)


// const instance = axios.create({
//     baseURL: 'https://www.runoob.com/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
// });
// instance({
//     url:"try/ajax/json_demo.json",
// }).then(res=>{
//     console.log(res);
// })
// _sed.$http.get('try/ajax/json_demo.json')
// .then(response => (this.info = response))
// .catch(function (error) { // 请求失败处理
//   console.log(error);
// });
// axios.defaults.withCredentials=true
// axios.defaults.crossDomain=true;
// axios.defaults.withCredentials = false;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.get('https://www.runoob.com/try/ajax/json_demo.json')
//     .then(response => (this.info = response))
//     .catch(function (error) { // 请求失败处理
//     console.log(error);
// })