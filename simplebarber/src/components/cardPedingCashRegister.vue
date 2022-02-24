<template>
	<div class="card ">
	<!-- 	<div class="card-header">
			<div class="text-center">
				<i class="fas fa-coins fa-2x"></i>
				<span class="mr-2">
					<b>Caixas com fechamaneto pedente</b>
				</span>
			</div>
		</div> -->
		<div class="card-body">
			<ul class="list-group">
				<li class="list-group-item d-flex justify-content-between align-items-center">
						<div>
							<i class="fas fa-calendar-day"></i>
							24-08-2022
						</div>
						<span class="badge  badge-pill">
							finalizar
						</span>
				</li>
				<li class="list-group-item d-flex  align-items-center"><i class="fas fa-search mr-2"></i> Não há registros de caixa com pendencias
			</li>
			</ul>
		</div>
	</div>
</template>
<script>
</script>
<style scoped>
	.card{
		padding-top:30px;
		color:#f0c0f7 !important;
		height:400px;
		width:100%;
		background: rgb(60,5,99);
		background: linear-gradient(180deg, rgba(60,5,99,1) 0%, rgba(94,0,134,1) 52%, rgba(148,0,170,1) 100%); 
	}
	.card .card-header span{
		margin-left: 8px;
	}
	.card li{
		background:#790098 !important;
	}
	.card li .badge{
		cursos:pointer !important;
		background-color:#5b0c75 !important;
		padding:8px;
		color:#fff;
		cursor:pointer;
	}
	.card li .badge:hover{
			background-color:#500668 !important;
	}
	
</style>

