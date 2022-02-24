export default {
	state(){
		return{
			professionals: null
		}
	},
	getters:{
		getProfessionals(state){
			return state.professionals
		}
	},
	mutations:{
		updateProfessionals(state, val){
			state.professionals = val
		}
	},
	actions:{
		setProfessionals({commit}, val){
			commit('updateProfessionals', val)
		}
	}
}