<template>
	<div class="col-12 col-sm-3 col-md-3 ">
    <div class="card  text-center d-flex flex-fill card-professional">
      <div class="card-header text-muted  border-bottom-0">
      </div>
      <div class="card-body pt-0">
           <img src="../assets/img/profile/profile-default.jpg" alt="user-avatar" class="img-circle img-fluid img-perfil">
						<h6 class="mt-2">{{name}} {{firstName }}</h6>

              <ld>
								<dd><i class="fas fa-phone-square"></i> {{ phone }}
								</dd>
								<dd>  {{ comission }} <i class="fas fa-percentage"></i></dd>
							</ld>
								
								<router-link :to="({ name:'agenda', params:{	idProfessional:	this.id} })">
									<button class="btn btn-primary btn-sm btn-agenda" id="show-modal" @click="showModal=true">
										<i class="fas fa-calendar-alt"></i>	agenda
									</button>
								</router-link>

								
        </div>
      <div class="card-footer text-center">
				<router-link to="" style="color:#fff">
						<i class=""></i> ver perfil
				</router-link>
      </div>
    </div>
	</div>

  
</template>
<script>

export default {
	
	props:{
		index:Number,
		id: Number,
		name: String,
		firstName: String,
		comission: Number,
		phone: String,
		email: String,
		login: Number
	},
	data(){
		return{
			showModal:false
		}
	},
	components:{
	}
	
		// background:#272a38 !important;
		// color:#c9c9c9 !important;
}
</script>
<style scoped>
	.card-professional{
		border-radius:8px;	
	}
	.btn-agenda{
		margin-top:10px;
		color:#eee !important;	
	}
	.img-perfil{
		border:5px solid #999;
	}
	.btn-perfil{
		
		margin-top:5px;
	}
	ld{
		font-size:13px;
	}
	ld dd{
			font-size:16px;
	}
	small{
		margin-top:5px;
		padding:3px;
		border-radius:3px;
	}
	.card-footer{
		background:#8d00a6;
	}
</style>