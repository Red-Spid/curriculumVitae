

class methodCluster {

    createApp( data={} ) { //挂载 data 数据
        return Vue.createApp( data )
    }

    newVue( app="" ,id,arr=[] ){ //挂载 元素
        return app.use( arr[0] ).use( arr[1] ).mount('#'+id);
    }

    tempDom( app="", name = '', obj = {} ){ // 挂载 组件
        obj.template = "#"+name;
        app.component( name, obj )
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

}

var cluster = new methodCluster();
export {
    cluster
};