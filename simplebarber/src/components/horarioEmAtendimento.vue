<template>
	<div class="text-center  mr-2">
		<i class="fas fa-user-clock fa-2x"></i>
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
		color:#8d00a6;
		cursor: pointer;
		width: 97px;
		height:  100px;
		border: 1px solid #C4C4C4;
		border-radius: 5px;
		border-bottom: 8px solid #8d00a6;
	}
	div:hover{
		background: #f8f8f8;
	}
	div i{
		color: #8d00a6;
		margin-top: 15px;
	}
	div p{
		font-size: 19px;
	}
</style>