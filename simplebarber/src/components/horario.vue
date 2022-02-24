<template>
	<div class="text-center  mr-2">
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
		padding:10px 0px;
		display:inline-block;
		margin-top: 4px;
		color:#929292;
		cursor: pointer;
		width: 80px;
		height:  57px;
		border: 1px solid #C4C4C4;
		border-radius: 5px;
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