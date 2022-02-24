<template>
	<div class="text-center  mr-2">
		<i class="fas fa-check-circle fa-2x"></i>
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
		color:#2de17d;
		cursor: pointer;
		width: 97px;
		height:  100px;
		border: 1px solid #C4C4C4;
		border-radius: 5px;
		border-bottom: 8px solid #2de17d;
	}
	div:hover{
		background: #f8f8f8;
	}
	div i{
		color: #2de17d;
		margin-top: 15px;
	}
	div p{
		font-size: 19px;
	}
</style>