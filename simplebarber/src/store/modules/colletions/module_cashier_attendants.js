export default {
	state(){
		return {
			cashierAttendants : null
		}
	},
	getters:{
		getCashierAttendants(state){
			return state.cashierAttendants
		}
	},
	mutations:{
		updateCashierAttendants(state, val){
			state.cashierAttendants = val
		}
	},
	actions:{
		setCashierAttedants({commit}, val){
			commit('updateCashierAttendants', val);
		}
	}

}