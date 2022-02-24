import { mapGetters } from 'vuex'
const controllerPermissions = {
	created(){
		const permission  = this.getPermissions.find(el => el.name == this.permission)
		if(permission){
			this.view = true
		}	
	},	
	
	computed:{
		...mapGetters(['getPermissions']),
	}

}

export default controllerPermissions