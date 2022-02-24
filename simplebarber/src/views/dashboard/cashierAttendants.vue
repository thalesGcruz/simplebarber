<template>
<div v-if="view">
	<headerContent title="Atendentes" />
	<div class="card">	
		<div class="card-body">
			<div class="row">
				<cardCashierAttendant
				v-for="attendant in getCashierAttendants"
				:key="attendant.id"	
				:name="attendant.name"
				:email="attendant.email"
				/>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import {mapGetters} from "vuex"
import headerContent from  "./template/headerContent"
import controllerAccess from "../../mixins/controllerAccess"
import cardCashierAttendant from '../../components/cardCashierAttendant'
export default {
	mixins:[controllerAccess],
	data(){
		return {
			view: false,
			access: ['subscriber_user']
		}
	},
	components:{
		cardCashierAttendant: cardCashierAttendant,
		headerContent: headerContent
	},
	computed:{
		...mapGetters(['getCashierAttendants'])
	}
}
</script>