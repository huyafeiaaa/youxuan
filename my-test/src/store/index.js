import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		res: [],
		homepage: {},
		car: [],
		dow:[]
	},
	mutations: {
		gets(state, index) {
			state.homepage = state.res[index]
		},
		jian(state, ind) {
			state.car[ind].itemType ? state.car[ind].itemType-- : 0
		},
		add(state, ind) {
			state.car[ind].itemType++
		}
	},
		getters: {
			totalplice: state => {
				var zong = 0;
				state.car.forEach((val,ind) => {
					zong += val.price * val.itemType
				})
				return zong
			}
		}
})