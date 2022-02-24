export default {
	state(){
		return {	
			id: null,
			subscriberuser_id: null,
			name: null,
			startTime:null,
			endTime:null,
		}
	},
	getters: {
		getBarbershopName(state){
			return state.name
		},
		getBarbershopId(state){
			return state.id
		},
		getBarbershopEndTime(state){
			return state.endTime
		},
		getBarbershopStartTime(state){
			return state.startTime
		}
	},
	mutations: {
		updateBarbershopName(state, val){
			state.name = val
		},
		updateBarbershopId(state, val){
			state.id = val
		},
		updateBarbershopStartTime(state, val){
			state.startTime = val
		},
		updateBarbershopEndTime(state, val){
			state.endTime = val
		}
	},
	actions: {
		setBarbershopName({commit}, val){
			commit('updateBarbershopName', val)
		},
		setBarbershopId({commit}, val){
			commit('updateBarbershopId', val)
		},
		setBarbershopStartTime({commit}, val){
			commit('updateBarbershopStartTime', val)
		},
		setBarbershopEndTime({commit}, val){
			commit('updateBarbershopEndTime', val)
		}
	}
}