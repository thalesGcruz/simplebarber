<template>
	<table class="table table-bordered">
		<thead>
		<tr>
		<th scope="col">#</th>
		<th scope="col">nome</th>
		<th scope="col">preço</th>
		<th scope="col">tempo</th>
		<th scope="col"></th>
		</tr>
		</thead>
		<tbody>
			<lineTableServices
				v-for="(service , index) in getServices"
				:index="index"
				:key="service.id"
				:name="service.name"
				:price="service.price"
				:time="service.time"
			/>	
		</tbody>
	</table>
</template>
<script>
	import {mapGetters} from 'vuex'
	import lineTableServices from './lineTableServices'
	export default{
		components:{
			lineTableServices: lineTableServices
		},
		computed:{
			...mapGetters([
				'getServices'
			]),
		}
	}
</script>
<style scoped>
	table{
		margin-top:10px;
	}
</style>