export default {
	state(){
		return {
			services: null
		}
	},
	getters:{
		getServices(state){
			return state.services
		}
	},
	mutations:{
		updateServices(state, val){
			state.services = val
		}
	},
	actions:{
		setServices({commit}, val){
			commit('updateServices', val)
		}
	}	
}