export default {
	state(){
		return {
			permissions: null,
		}
	},
	getters: {
		getPermissions(state){
			return state.permissions
		}
	},
	mutations: {
		updatePermissions(state, val){
			state.permissions = val
		}
	},
	actions: {
		setPermissions({commit}, val){
			commit('updatePermissions', val)
		}
	}
}