import {mapGetters} from 'vuex'
const controllerAccess = {
	created(){
		const access = this.access.find( el => el == this.getAccess )
		if(access){
			this.view = true
		}
	},
	computed:{
		...mapGetters(['getAccess'])
	}
	
}

export default controllerAccess