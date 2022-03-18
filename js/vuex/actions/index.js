export default {
    /**
     * Action 类似于 mutation，不同在于：
     * Action 提交的是 mutation，而不是直接变更状态。
     * Action 可以包含任意异步操作。 
     * @param {*} context 
     * @param {*} a 
     */
    computedDate(context,a){
        context.commit("COMPUTE_DATE",a);
    },
  
    forlist(context,a){
        context.commit("FOR_LIST",a);
    },
    increment(context) {
        context.commit('INCREMENT')
    }
}