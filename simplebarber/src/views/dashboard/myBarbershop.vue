<template>
<div v-if="view">
	<headerContent title="Minha Barbearia" />	
	<div class="row" >
		<div class="col-lg-12" >
			<div class="card">
				<div class="card-body">
					<h5 class="card-title">
						veja aqui os dados de sua barbearia<br>
					</h5>
					<br><br>
						<h3>{{ getBarbershopName }}</h3>
						<span>Horário de funcionamento de {{ getBarbershopStartTime }} as
							{{ getBarbershopEndTime }}
						</span>
					<p class="card-text">
						
					</p>
					<br>
					<editBarbershop />
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>	
	import {mapGetters} from 'vuex'
	import headerContent from './template/headerContent'
	import editBarbershop from '../../components/editBarbershop'
	import controllerAccess from '../../mixins/controllerAccess'
	
	export default {
		mixins:[controllerAccess],
		data(){
			return{
				view:false,
				access:['subscriber_user']
			}
		},
		components:{
			headerContent: headerContent,
			editBarbershop: editBarbershop
		},
		computed:{
			...mapGetters([
				'getBarbershopName',
				'getBarbershopStartTime',
				'getBarbershopEndTime'
				])
		}
	}
</script>