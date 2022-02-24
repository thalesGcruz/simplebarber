<template>
  <li class="nav-item" v-if="view">
        <router-link :to="{name:'cashierAttendants'}" 
          class="nav-link">
          <i class="fas fa-headset nav-icon"></i>
          <p>atendentes</p>
        </router-link>
   </li>
</template>
<script>
	import controllerAccess from '../../mixins/controllerAccess' 
	export default{
		mixins:[controllerAccess],
		data(){
			return{
				view: false,
				access:['subscriber_user']
			}
		}
	}
</script>