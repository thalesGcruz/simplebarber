export default {
	state(){
		return {
			agendamentos: null
		}
	},
	getters:{
		getAgendamentos(state){
			return state.agendamentos
		}
	},
	mutations:{
		updateAgendamentos(state, val){
			state.agendamentos =  val
		}
	},
	actions:{
		setAgendamentos({commit}, val){
			commit('updateAgendamentos', val)
		}
	}
}