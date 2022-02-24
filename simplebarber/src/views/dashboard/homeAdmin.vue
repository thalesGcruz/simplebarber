<template>
<div class="row" v-if="view">
	<div class="col-lg-12" >
		<div class="card">
			<div class="card-body">
				<h5 class="card-title">
					Pagina inicial do administrador master
				</h5>

				<p class="card-text">
					Seja bem vindo! 
				</p>

				<a href="#" class="card-link">Card link</a>
				<a href="#" class="card-link">Another link</a>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	import controllerAccess from '../../mixins/controllerAccess'
	export default {
		mixins:[controllerAccess],
		data(){
			return{
				view:false,
				access:['admin']
			}
		}
	}
</script>