export default {
    /**
     * Getter 接受 state 作为其第一个参数：
     * Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值：
     * 可以通过让 getter 返回一个函数，来实现给getter传参。对 store 里的数组进行查询时非常有用。
     * @param {*} state 
     * @returns 
     */
    doneTodos: (state) => {
        return state.todos.filter(todo => todo.done)
    }
}