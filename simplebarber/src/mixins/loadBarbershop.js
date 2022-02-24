import Cookie from 'js-cookie'
import {mapGetters, mapActions} from 'vuex'
const loadBarbershop = {
	data(){
		return{
			load:true,
			view:false,
			access:['subscriber_user']
		}
	},
	methods:{
		loadBarbershop(controllerAccess){
				
				if(this.getBarbershopId == null){
					this.axios.post('/getBarbershop',{
						token: Cookie.get('auth_token'),
						id: this.getSubscriberuserId
					}).then((response)=> {
						console.log(response.data)
						this.setBarbershopId(response.data[0].id)
						this.setBarbershopName(response.data[0].name)
						controllerAccess();	
					}).catch((error) => {
						switch(error.response){
							case 401:
								Cookie.remove('auth_token')
								this.$router.push({name:'login'})
								break
						}
					})	
				}else{
					controllerAccess();
				}	
			},
			...mapActions(['setBarbershopId','setBarbershopName']),	

	},
	computed:{
		...mapGetters([
			'getBarbershopName',
			'getSubscriberuserId',
			'getBarbershopId'
		])
	},
}
export default loadBarbershop