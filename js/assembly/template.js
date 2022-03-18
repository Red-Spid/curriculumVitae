
/**
 * 组件 template
 * name 组件id 和组件名
 * template html标记
 * lc 可以把vue组件函数方法放进去
*/
import abmgTemp from "../template/abmg.js";
import github from "../template/github.js";
import curriculumvitae from "../template/curriculumvitae.js";
import dropBYdrop from "../template/dropBYdrop.js";
import comments from "../template/comments.js";
import signin from "../template/signin.js";

let temp = [ abmgTemp, github, curriculumvitae, dropBYdrop, comments, signin ]
// console.log(temp)
export default function( _this = "" ){

    temp.forEach( value => {
        // console.log(value)
        _this.component( value.name, value )
    })

}
