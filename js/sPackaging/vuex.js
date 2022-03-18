/*
 * vuex 的声明 
 */

import { createStore }  from "../eResources/vuex.js";
// import state from "../vuex/store/index.js";
import dataJson from "../../../json/index.js";

import getters from "../vuex/getters/index.js";
import mutations from "../vuex/mutations/index.js";
import actions from "../vuex/actions/index.js";
import module from "../vuex/module/index.js";

const store = createStore({
  state:dataJson,
  getters,
  mutations,
  actions: actions,
  module
})
console.log( store )

export default store;