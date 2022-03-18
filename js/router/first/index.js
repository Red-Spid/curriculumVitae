
import first_personal from "../firstChild/personal.js"

export default{
    path: "/",
    name:"home", 
    component:{
        template: '<github ref="headr" class="github-corner"></github><router-view></router-view>'
    },
    redirect:"/personal/dropBYdrop/:id",
    children:[
        first_personal
    ]
}