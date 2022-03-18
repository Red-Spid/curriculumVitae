import RESUME from "../firstChildren_arr/resume.js";
import COMMENTS from "../firstChildren_arr/comments.js";
import DROPBYDROP from "../firstChildren_arr/dropBYdrop.js";


export default{
    name:"personal",
    path:"personal",
    component:{ 
        template : `<div id='personal'><router-view :key='Math.floor(Math.random() * (10000000 - 1)) + 1'></router-view><abgm></abgm></div>`
    },
    children:[
        RESUME,DROPBYDROP,COMMENTS
    ]
}