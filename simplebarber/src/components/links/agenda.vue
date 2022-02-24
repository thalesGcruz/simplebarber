<template>
	<li class="nav-item" v-if="view">
		<router-link :to="{name:'services'}" class="nav-link">
			<i class="fas fa-calendar-alt nav-icon"></i>
			<p>Agenda</p>
		</router-link>
	</li>
</template>
<script>
import controllerAccess from '../../mixins/controllerAccess'
export default {
	mixins:[controllerAccess],
	data(){
		return {
			view: false,
			access: ['cashier_attendant','subscriber_user']
		}
	}
}
</script>