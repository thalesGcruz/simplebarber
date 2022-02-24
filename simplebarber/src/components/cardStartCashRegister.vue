<template>
	<div class="card">
		
		<div class="card-body text-center">
			<button class="btn btn-lg  btn-primary">
				<i class="fas fa-play-circle"></i>
				Iniciar Caixa
			</button>
			<p class="lead"><b>O caixa com a data de hoje nao foi iniciado</b></p>
		</div>
	</div>
</template>
<script>
</script>
<style scoped>
	.card{
		padding-top:30px;
		width:100%;
		height:400px;
		
	}
	.card p{
		margin-top:5px;
		color:#333;
	}
	.card .text-date{
		background-color:#280044;
		padding: 3px;
		border-radius:5px;
		font-size: 15px;
	}
	.card .btn-primary{
		background:#5b0c75 !important;
	}


</style>