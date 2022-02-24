<template>
	<button  v-if="view" v-on:click="editBarbershop"
		class="btn btn-primary">
		editar barbearia
	</button>
</template>
<script>
import controllerPermissions from '../mixins/controllerPermissions'
import Swal from 'sweetalert2'
export default{
	mixins:[controllerPermissions],
	data(){
		return{
			view:false,
			permission: 'edit_barbershop'
		}
	},
	methods:{
		editBarbershop(){
			Swal.fire({
				title: 'texto informativo',
				text: this.getPermissions[0],
				icon: 'info',
				confirmButtonText: 'Cool'
			})
		}
	}
}
</script>