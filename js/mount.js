
function newVue( id ){
	return new Vue({
		el: "#"+id,
		data: {
			messages: "hellow"
		}
	})
}

const app = newVue("app")
const app1 = newVue("app1")
