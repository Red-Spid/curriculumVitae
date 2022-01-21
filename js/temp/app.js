
import { cluster } from '../vue3/class.js';
import { xRoutes,router } from '../vue3/vue-router.js';
import { xStore,xState } from '../vue3/vue3x.js';

console.log(xStore,xState)

var vdata = {
    message: 'Hello Vue!!',

    personalInformation: {

    },

}
const _this = cluster.createApp(vdata);

var componentApi = [
    {
        name: "github", props: ["my", "list"], id: "#github"
    },
    {
        name: "curriculumvitae",
        props: ["infor"],
        id: "#curriculumvitae",
        function: (_self) => {
            // console.log( _self.$refs.add, 1111 )
        }

    },
    {
        name: "dropBYdrop", props: ["data"], id: "#dropBYdrop"
    },
    {
        name: "comments", props: ["data", "list", "isdom"], id: "#comments"
    },
    {
        name: "signin", props: ["data", "list"], id: "#signIn"
    }
]

componentApi.forEach(element => {
    // console.log(element)
    cluster.tempDom(
        _this, element.name, element.props, element.id, element.function
    )
})

const _sed = cluster.newVue(_this, "app",[router,xStore])
console.log(_sed.$router);