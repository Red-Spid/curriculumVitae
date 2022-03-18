
import { createApp } from "../eResources/vue.js";

class methodCluster {

    createVue( data={} ) { //挂载 data 数据
        return createApp( data )
    }

    newVue( app="" ,id,arr=[] ){ //挂载 元素
        return app.use( arr[0] ).use( arr[1] ).mount('#'+id);
    }

    dtype( data="", condition="" ){// Data type prototype 数据类型 原型is true/false
        /*
            data = 数据类型
            condition = 条件为真
        */
        var x = "";
        switch ( Object.prototype.toString.call( data ) == condition ) { 
            case true : x="是对的"; 
            break; 
            default: x = "不是字符串和数组假的";
        }

    }
    romanToInt( val ){
        const symbolValues = new Map();
        symbolValues.set('I', 1);
        symbolValues.set('V', 5);
        symbolValues.set('X', 10);
        symbolValues.set('L', 50);
        symbolValues.set('C', 100);
        symbolValues.set('D', 500);
        symbolValues.set('M', 1000);  
        let ans = 0;
        const n = val.length;
        for (let i = 0; i < n; ++i) {
            const value = symbolValues.get(val[i]);
            if (i < n - 1 && value < symbolValues.get(val[i + 1])) {
                ans -= value;
            } else {
                ans += value;
            }
        }
        return ans;
    }
    
    isDateVaild( ...val ){
        // 检测日期是否有效 isDateVaild( new Date() )
        return !Number.isNaN( new Date(...val).valueOf() )
    }

    dayDif( date1, date2){
        // 计算两个日期之间的间隔 dayDif( new Date(), new Date("2022-2-1") )
        return Math.ceil( Math.abs(date1.getTime() - date2.getTime()) / 86400000 );
    }

    upperCase( str ){
        // 首字母大写 upperCase("aa bb ccc")
        return str.charAt(0).toUpperCase()+ str.slice(1);
    }

    string_lice( string, length ){
        // 截断字符串 string_lice("aa sssss dddd vvvv ffff bb ccc", 20)
        return string.length < length
            ? string
            : `${string.slice( 0, length-3 ) }...`
    }

    arr_duplicate_remova( arr ){
        // 数组去重
        return [...new Set(arr)];
    }
    
    arr_isNotEmpty( arr ){
        // 判断数组是不是为空
        return Array.isArray(arr) & arr.length > 0;
    }

    arr_average( ...args ){
        // 平均值
        return args.reduce( (total, currentValue, currentIndex, arr) =>{ 
           return total + currentValue
         } ) / args.length;
    }

    number_random( min, max){
        // 两个整数之间的随机数
        return Math.floor( Math.random() * (max  - min + 1) + min )
    }

    arr_merge(  ){
        var a = [];
        
        for(let i = 0; i< arguments.length; i++) {
            // a = a.concat( arguments[i] )
            a.push( ...arguments[i] )

        }
        a[0] = 3;
        return a;
    }

    arr_deleteHead( arr ){
        // arr.shift();
        // arr.slice(1)
        // arr.splice(0,1);
        arr.filter( (val, index, arr)=>{
            console.log(val, index, arr)
            return index !== 0;
        })
        // console.log(arr)
        arr[0] = 3;
        return arr
    }

    arr_deleteTail( arr ){
        // arr.pop();
        //  arr = arr.slice(0,arr.length-1)
        // arr = arr.splice(0,arr.length-1)
        arr = arr.splice(0,arr.length-1)
        return arr;
    }

}
// General method
var cluster = new methodCluster();
export default cluster;