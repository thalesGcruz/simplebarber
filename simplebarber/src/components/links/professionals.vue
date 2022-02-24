<template>
	<li class="nav-item" v-if="view">
		<router-link :to="{name:'professionals'}" class="nav-link"> 
			<i class="fas fa-user-tie nav-icon"></i>
			<p>Profissionais</p>
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
			access: ['subscriber_user']
		}
	}
}
</script>