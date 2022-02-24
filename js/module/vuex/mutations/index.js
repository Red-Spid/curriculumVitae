/**
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的事件类型 (type)和一个回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
 * 调用方法 store.commit('increment')
 */

import * as types from "./mutation-types.js";

export default {

    [types.COMPUTE_DATE](state, val) {
        //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
        val.is = false;
        let dateBegin = new Date(val.releaseTime.replace(/-/g, "/"));//将-转化为/，使用new Date
        let dateEnd = new Date();//获取当前时间
        let dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
        let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
        let leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
        let hours = Math.floor(leave1 / (3600 * 1000))//计算出小时数
        //计算相差分钟数
        let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
        let minutes = Math.floor(leave2 / (60 * 1000))//计算相差分钟数
        //计算相差秒数
        let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
        let seconds = Math.round(leave3 / 1000);

        //这里的dayDiff就是上文计算出的天数差
        let monthDiff = Math.floor(dayDiff / 30);//以30天为一个月不够精准严谨


        let yearDiff = Math.floor(monthDiff / 12);//获取相差的年份
        if (yearDiff >= 1) {
            val.interpolation = yearDiff + "年前";
            //   console.log( val.interpolation )
            return val.interpolation
        }

        //获取相差的月份
        if (monthDiff < 12 && monthDiff > 0) {
            val.interpolation = monthDiff + "个月前";//获取相差的月份
            //   console.log( val.interpolation )
            return val.interpolation
        }

        // 获取相差的天数
        if (dayDiff >= 1) {
            val.interpolation = dayDiff + "天前";
            //   console.log( val.interpolation )
            return val.interpolation
            console.log(" 相差 " + dayDiff + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒")
        }

        // 获取相差的小时
        if (hours >= 1) {
            val.interpolation = hours + "小时前";
            //   console.log( val.interpolation )
            return val.interpolation
        }

        if (minutes >= 1) {
            val.interpolation = minutes + "小时前";
            //   console.log( val.interpolation )
            return val.interpolation
        }

        if (seconds >= 1) {
            val.interpolation = "刚刚发布";
            //   console.log( val.interpolation )
            return val.interpolation;
            // console.log(dateDiff+"时间差的毫秒数",dayDiff+"计算出相差天数",leave1+"计算天数后剩余的毫秒数"
            // ,hours+"计算出小时数",minutes+"计算相差分钟数",seconds+"计算相差秒数");
        }

    },

    [types.INCREMENT](state) {
        // 变更状态
        state.count++
    },

    [types.FOR_LIST](state, a) {
        Object.keys(state.list).forEach(function (key) {
            if (key == a) {
                state.list[key].active = true;

            } else {
                state.list[key].active = false
            }
        })
    }
}