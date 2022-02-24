<template>
	<br>
	<div class="row">
		<div class="col co-lg-2">
			<span class=""><b>horarios reservados</b></span>
		</div>
		<div class="col col-lg-10 text-right">
			<div class="legend">
				<span>
					<i class="fas fa-square icon-legend" style="color:#C4C4C4"></i>
					horario reservado
				</span>
				<span>
					<i class="fas fa-square icon-legend" style="color:#46118A"></i>
					cliente em atendimento
				</span>
					<span>
					<i class="fas fa-square icon-legend" style="color:#1BEA9F"></i>
					agendamento concluido
				</span>
				<span>
					<i class="fas fa-square icon-legend" style="color:#F58B8B"></i>
					agendamento cancelado
				</span>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="horarios-reservados">
			<div class="col col-lg-12">
				<span class="title">hoje</span>
				<div class="wrapper-hoarios">
					<horarioReservado horario="08:30"/>	
					<horarioReservado horario="09:00"/>		
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import horarioReservado from './horarioReservado' 
	export default{
		components:{
			horarioReservado:horarioReservado
		}
	}
</script>
<style scoped>
	.row{
		padding:10px;
	}
	.title{
		font-size: 18px;
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
</style>
 