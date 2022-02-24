export default{
	state(){
		return {
			horarios:null
		}
	},
	getters:{
		getHorarios(state){
			return state.horarios
		}
	},
	mutations:{
		updateHorarios(state, val){
			state.horarios = val
		}
	},
	actions:{	
		setHorarios({commit}, val){
			commit('updateHorarios', val)
		}
	}
}	