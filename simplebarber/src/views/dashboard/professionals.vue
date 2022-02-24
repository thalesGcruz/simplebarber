<template>
<div v-if="view">
	<headerContent title="Profissionais" />	
	<div class="card card-solid">
        <div class="card-header row">
			<div class="col-7">
				
			</div>
			<div class="col-5 text-right">
				<registerProfessionals />
			</div>
        </div>
        <div class="card-body pb-0">
			<div class="row">
				
				<cardProfessionals v-for="professional in getProfessionals" 
					:key="professional.id"
					:name="professional.name"
					:firstName="professional.firstName"
					:email="professional.email"
					:phone="professional.phone"
					:comission="professional.comission"
					:login="professional.login"
				></cardProfessionals>
			
			</div>
		</div>
		<div class="card-footer">
          <nav aria-label="Contacts Page Navigation">
            <ul class="pagination justify-content-center m-0">
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul>
          </nav>
        </div>
	</div>	
			
</div>
</template>
<script>	
	import headerContent from './template/headerContent'
	import controllerAccess from '../../mixins/controllerAccess'
	import cardProfessionals from '../../components/cardProfessionals'
	import registerProfessionals from '../../components/registerProfessionals'
	import {mapGetters} from 'vuex'
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
			cardProfessionals: cardProfessionals,
			registerProfessionals: registerProfessionals
		},
		computed:{
			...mapGetters([
				'getProfessionals'
			])
		}		
	}
</script>