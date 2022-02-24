export default {
	state(){
		return {	
			id: null,
			subscriberuser_id: null,
			name: null
		}
	},
	getters: {
		getBarbershopName(state){
			return state.name
		},
		getBarbershopId(state){
			return state.id
		}
	},
	mutations: {
		updateBarbershopName(state, val){
			state.name = val
		},
		updateBarbershopId(state, val){
			state.id = val
		}
	},
	actions: {
		setBarbershopName({commit}, val){
			commit('updateBarbershopName', val)
		},
		setBarbershopId({commit}, val){
			commit('updateBarbershopId', val)
		}
	}
}