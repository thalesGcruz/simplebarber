export default {
	state(){
		return{
			id:null,
		}
	},
	getters:{
		getCashierAttendantId(state){
			return state.id
		}
	},
	mutations:{
		updateCashierAttendantId(state, val){
			state.id = val
		}
	},
	actions:{
		setCashierAttedantId({commit}, val){
			commit('updateCashierAttendantId', val)
		}
	} 
}