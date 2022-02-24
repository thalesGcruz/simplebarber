<template>
	<div class="text-center  mr-2">
		<i class="fas fa-clock fa-2x"></i>
		<p>{{ horario }}</p>
	</div>
</template>
<script>
	export default {
		props:{
			horario:String
		}
	}
</script>
<style scoped>
	div{
		display:inline-block;
		margin-top: 5px;
		color:#929292;
		cursor: pointer;
		width: 97px;
		height:  100px;
		border: 1px solid #C4C4C4;
		border-radius: 5px;
		border-bottom: 8px solid #C4C4C4;
	}
	div:hover{
		background: #f8f8f8;
	}
	div i{
		color: #C4C4C4;
		margin-top: 15px;
	}
	div p{
		font-size: 19px;
	}
</style>