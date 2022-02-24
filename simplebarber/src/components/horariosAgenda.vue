<template>
	<div class="horarios">
		<div class="row">
			<span class="title">horarios</span><br><br>
			<div class="col-12 col-lg-12 box" >
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
				<horarioReservado />
			</div>
		</div>
	</div>
</template>
<script>
import horarioReservado from "./horarioReservado"
export default {
	components:{
		horarioReservado:horarioReservado
	}
}
</script>
<style scoped>
	.row{
		padding:10px;
	}
	.horarios{
		margin-top: 20px !important;
	}
	.horarios .box{
		margin-top:20px;
	}
	.horarios .title{
		background-color: #8d00a6;
		color: #fff;
		margin-left:4px;
		padding: 3px 10px;
		border-radius: 3px;
	}
</style>
