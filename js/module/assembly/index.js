
// import general from "../../global/index.js";
import cApi from "../../assembly/template.js"
// console.log( cApi,11111 );

export default function( _this = "" ){

    cApi.forEach( value => {
        _this.component( value.name, value )
    })

}