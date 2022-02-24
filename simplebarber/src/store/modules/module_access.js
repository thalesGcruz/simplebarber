export default {
	state(){
		return {
			access:null
		}
	},
	getters:{
		getAccess(state){
			return state.access
		}
	},
	mutations:{
		updateAccess(state, val){
			state.access = val
		}
	},
	actions:{
		setAccess({commit}, val){
			commit('updateAccess', val)
		}
	}

}