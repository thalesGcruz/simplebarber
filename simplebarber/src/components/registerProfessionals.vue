<template>
	<div v-if="view">
		<button @click="register" class="btn btn-primary">
			novo profissional
		</button>
	</div>
</template>
<script>
import controllerPermissions from "../mixins/controllerPermissions"
// import Swal from 'sweetalert2'

export default {
	mixins:[controllerPermissions],
	data(){
		return{
			view: false,
			permission: 'register_professional'
		}
	},
	methods:{
		register(){
			alert('ola mundo');
		}
	}
}
</script>