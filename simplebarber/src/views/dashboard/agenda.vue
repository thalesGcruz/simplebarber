<template>

<div class="card">	
	<div class="header-agenda">
	<div class="row">
		<div class="col-md-1 col-lg-1">
			<img src="../../assets/img/profile/profile-default.jpg" alt="user-avatar" class="img-circle img-fluid img-perfil">
		</div>
		<div class="col-md-11 col-lg-7 col-md-11">
			<dl class="description">
				<dd><b>{{ name }} {{ firstName }}</b> 
					<br><i class="fas fa-phone-square" style="color:#999"></i>
					{{ phone }}
				</dd>
			</dl>
		</div>
		<div class="col-lg-4">
			<Datepicker class="input-date" />
		</div>
	</div>
	</div>
	<div class="row reservados">
			<div class="col col-lg-12">
				<span class="title">hoje</span>
				<div class="wrapper-hoarios">
					<horarioReservado horario="08:30"/>	
					<horarioConcluido horario="09:00"/>		
					<horarioReservado horario="09:00"/>		
					<horarioEmAtendimento horario="09:00"/>
				</div>
			</div>
	</div>

	<div class="row horarios">
		<br>
		<div class="col-12 col-lg-12 box" >
			<span class="title">horarios</span>
				<div class="wrapper-hoarios">
				<horario v-for="horario in horarios"
					:key="horario.index"
					:horario="horario.horario"/>
					
			</div>
		</div>
	</div>
</div>
</template>
<script>
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
import horarioReservado from "../../components/horarioReservado"
import horarioEmAtendimento from "../../components/horarioEmAtendimento"
import horarioConcluido from "../../components/horarioConcluido"
import horario from "../../components/horario"
import {mapGetters} from 'vuex'

export default{
	created(){
		this.getProfessional()
		this.getMyAgendamentos()
		this.getHorariosVagos()
	},
	data(){
		return{
			horarios: null,
			idProfessional: null,
			name: null,
			firstName: null,
			phone: null,
		}
	},
	computed:{
		...mapGetters([
			'getHorarios',
			'getProfessionals',
			'getAgendamentos'
			])
	},
	components:{
		horarioReservado:horarioReservado,
		Datepicker:Datepicker,
		horarioEmAtendimento:horarioEmAtendimento,
		horarioConcluido:horarioConcluido,	
		horario:horario	
	},
	methods:{
		getProfessional(){
			const professional = this.getProfessionals.find(el => el.id == this.$route.params.idProfessional);
		
			if(professional){
				this.idProfessional = professional.id
				this.name = professional.name
				this.firstName = professional.firstName
				this.phone = professional.phone
			}else{
				this.$router.push({name:"professionals"});
			}
		},
		getMyAgendamentos(){		
			var myAgendamentos = this.getAgendamentos.filter(
				el => el.professionals_id == this.$route.params.idProfessional)

			if(myAgendamentos){
				return myAgendamentos
			}else{
				return [{}];
			}
		},
		getHorariosVagos(){
			var horarioVagos = this.getHorarios.filter(el =>
				el.status == null)
			
			if(horarioVagos){ 
				this.horarios = horarioVagos }
			else{
				this.horarios = []
			}
		}
	}
}

</script>
<style scoped>
	.card{
		margin-top:10px;
	}
	.header-agenda{
		border-left:8px solid #8d00a6;
		padding:20px 0px;
		border-bottom:2px solid #eee;
	}
	.img-perfil{
        margin-left:10px;
    }
	.description{
		margin-top:10px;
		margin-left:20px;
	}
    .input-date{
		margin-top:20px;
        width:95%;
        border:2px solid #eee;
    }
    .reservados{
		margin-top:20px;
		padding:10px;
    }
    .legend span{
		font-size: 14px;
		margin-left: 5px;
	}
	.icon-legend{
		font-size: 13px;
	}
	.title{
		margin-top:50px !important;
		background-color: #8d00a6;
		color: #fff;
		padding: 3px 10px;
		border-radius: 3px;
	}
	.wrapper-hoarios{
		margin-top: 20px;
	}
	.horarios{
		padding:10px;
	}
</style>