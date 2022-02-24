<template>
	<tr>
		<th scope="row">{{ ( index + 1 ) }}</th>
		<td>{{ name }}</td>
		<td>{{ priceReal }}</td>
		<td>{{ time }} - minutos</td>
		<td class="text-right">
			<button class="btn-action btn-sm btn btn-outline-primary">
				<i class="fas fa-edit"></i>editar
			</button>
			<button class="btn-action btn-sm btn btn-outline-danger">
				<i class="fas fa-trash-alt"></i>
				remover
			</button>
		</td>  
	</tr>
</template>
<script>
	export default {
		props:{
			index:Number,
			name:String,
			price:Number,
			time:Number
		},
		computed:{
			priceReal(){
				return this.price.toLocaleString('pt-br',
					{style:'currency',currency:'BRL'})
				
			}
		}

	}
</script>
<style>
.btn-action{
	margin-left:6px
}
</style>