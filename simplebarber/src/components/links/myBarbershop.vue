<template>
   <li class="nav-item" v-if="view">
    <router-link :to="{name:'myBarbershop'}" class="nav-link">
		<i class="fas fa-store nav-icon"></i>
		<p>Minha Barbearia</p>
    </router-link>
  </li>
</template>
<script>
	import controllerAccess from '../../mixins/controllerAccess' 
	export default{
		mixins:[controllerAccess],
		data(){
			return {
				view: false,
				access: ['subscriber_user']
			}
		}
	}
</script>
                                  