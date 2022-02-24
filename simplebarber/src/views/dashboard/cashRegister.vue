<template>
<div v-if="view">
	<headerContent title="Caixa" />	
	<div class="row">
		<div class="col-lg-12" >
			<div class="card">
				<div class="card-body">
					<div class="row">	
						<div class="col-6 col-lg-6">
							<cardStartCashRegister />
						</div>
						<div class="col-6 col-lg-6">
							<cardPedingCashRegister />
						</div>	
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	import headerContent from './template/headerContent'
	import controllerAccess from '../../mixins/controllerAccess'
	import cardPedingCashRegister from '../../components/cardPedingCashRegister'
	import cardStartCashRegister from '../../components/cardStartCashRegister'

	export default {
		mixins:[controllerAccess],
		data(){
			return{
				view:false,
				access:['subscriber_user','cashier_attendant']
			}
		},components:{
			headerContent:headerContent,
			cardPedingCashRegister:cardPedingCashRegister,
			cardStartCashRegister:cardStartCashRegister
		}
	}
</script>
