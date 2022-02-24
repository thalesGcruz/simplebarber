<template>
	<div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
      <div class="card bg-light d-flex flex-fill">
        <div class="card-header text-muted border-bottom-0">
          Barbeiro
        </div>
        <div class="card-body pt-0">
          <div class="row">
            <div class="col-7">
              <h2 class="lead"><b>{{ name }} {{ firstName }}</b></h2>
              <p class="text-muted text-sm">

				<b><i class="fas fa-envelope"></i> email</b> 
				<br>{{email }}<br><br>

				<b><i class="fas fa-phone-square-alt"></i> telefone </b>
				<br>{{ phone }}<br><br>

				<b><i class="fas fa-percentage"></i> comissão:
				</b> {{ comission }}% <br>

				<b><i class="fas fa-lock"></i> login: </b> 
				<small v-if="login==0" class="bg-danger">inativo </small>

				<small v-if="login==1" class="bg-success"> ativo </small>

              </p>
            </div>
            <div class="col-5 text-center">
								<img src="../assets/img/profile/profile-default.jpg" alt="user-avatar" class="img-circle img-fluid">

					<button class="btn btn-info" id="show-modal" @click="showModal=true">agenda</button>
					<br>
          <a href="#" class="btn btn-sm btn-info mt8" style="margin-top:10px">
					<i class=""></i> ver perfil
					</a>
            </div>
          </div>
        </div>
        <div class="card-footer">
			<div class="text-right"></div>
        </div>
      </div>
	</div>
 <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
						<headerAgenda />
      </template>
			<template #body>
				<reservadosAgenda />
				<horariosAgenda />
			</template>
    </modal>
  
</template>
<script>
import modal from './modalAgenda'
import headerAgenda from './headerAgenda'
import reservadosAgenda from './reservadosAgenda'
import horariosAgenda from './horariosAgenda'

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
		modal:modal,
		headerAgenda:headerAgenda,
		reservadosAgenda:reservadosAgenda,
		horariosAgenda:horariosAgenda
	}
	
}
</script>
<style scoped>
	small{
		padding: 2px 8px;
		border-radius: 4px;
	}

</style>