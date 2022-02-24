<template>
	<body class="hold-transition sidebar-mini " >
			<div v-if="load" class="preloader flex-column justify-content-center align-items-center">
				<h3>Carregando...</h3>
			</div>
        <div class="wrapper" v-if="view">
			<!-- Preloader -->

			<navbar />
			<sidebar />
	
			<div class="content-wrapper">
				<div class="content">
					<div class="container-fluid">			  
						<router-view></router-view>
					</div>
				</div>
			</div>
			
			<controlSidebar />
			<footerDash />

		</div>
	</body>
</template>
<script>
import loadStore from '../../mixins/loadStore'
import navbar from './template/navbar'
import sidebar from './template/sidebar'
import controlSidebar from './template/controlSidebar'
import footerDash from './template/footer'
// import {mapGetter} from 'vuex'
export default{
	mixins:[loadStore],
	created(){
		this.loadStore(this.startView)
	},
	data(){
		return {
			view: false,
			load:true
		}
	},
	components:{
		navbar: navbar,
		sidebar: sidebar,
		controlSidebar: controlSidebar,	
		footerDash: footerDash
	},
	methods:{
		startView(){
			this.view = true,
			this.load = false
		}
	}
}

</script>
<style>

</style>

