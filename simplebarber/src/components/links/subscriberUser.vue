<template>
	<li class="nav-item" v-if="view">
		<a href="#" class="nav-link">
			<i class="fas fa-user nav-icon"></i>
			<p>Usuarios Assinantes</p>
		</a>
	</li>
</template>
<script>
import controllerAccess from '../../mixins/controllerAccess'
export default {
	mixins:[controllerAccess],
	data(){
		return {
			view: false,
			access: ['admin']
		}
	}
}
</script>