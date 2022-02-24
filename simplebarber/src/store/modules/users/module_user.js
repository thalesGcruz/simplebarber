export default {
	state(){
		return{
			user : {
				id: null,
				name: null,
				firstName: null,
				email: null,
			},
			subscriberuser:{
				id: null,
				cpf: null,
				phone: null
			}
		}
	},
	getters:{

		getUser(state){
			return state.user
		},
		getUserId(state){
			return state.user.id
		},
		getUserName(state){
			return state.user.name
		},
		getUserFirstName(state){
			return state.user.firstName
		},
		getSubscriberuserId(state){
			return state.subscriberuser.id
		}
	},
	mutations:{
		updateUserId(state, val){
			state.user.id = val 
		},
		updateUserName(state, val){
			state.user.name = val
		},
		updateUserFirstName(state, val){
			state.user.firstName = val
		},
		updateUserEmail(state, val){
			state.user.email = val
		},
		updateSubscriberuserId(state, val){
			state.subscriberuser.id = val		
		}
	},
	actions:{
		setUserId({commit}, val){
			commit('updateUserId', val)
		},
		setUserName({commit}, val){
			commit('updateUserName', val)
		},
		setUserFirstName({commit}, val){
			commit('updateUserFirstName', val)
		},
		setUserEmail({commit}, val){
			commit('updateUserEmail', val)
		},
		setSubscriberuserId({commit}, val){
			commit('updateSubscriberuserId', val)
		}
	}
}