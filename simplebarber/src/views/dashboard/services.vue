<template>
<div>
	<headerContent title="Serviços" />	
	<div class="row" v-if="view">
		<div class="col-lg-12" >
			<div class="card">
				<div class="card-body">
					<div class="row">	
						<div class="col-7">
							
						</div>
						<div class="col-5 text-right">
							<button class="btn btn-primary">
							novo serviços</button>
						</div>
					</div>

					<div class="card-title ">
					</div>

					<tableServices />
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>	
	import headerContent from './template/headerContent'
	import controllerAccess from '../../mixins/controllerAccess'
	import tableServices from '../../components/tableServices'
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
			tableServices: tableServices
		}
	}
</script>