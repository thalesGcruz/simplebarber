<template>
	<div class="col-md-4">
	<div class="card card-widget widget-user">
		<div class="widget-user-header bg-dark">
			<h3 class="widget-user-username">{{ name }}</h3>
			<span class="widget-user-desc">{{ email }}</span>
		</div>
		<div class="widget-user-image">
		<img class="img-circle elevation-2" src="../assets/img/profile/profile-default-2.jpg" alt="User Avatar">
		</div>
		<div class="card-footer">
			<div class="row">
				<div class="col-sm-12 ">
					<div class="description-block">
					<h5 class="description-header"><i class="fas fa-headset nav-icon"></i></h5>
					<span class="description-text">Atendente</span>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12 ">
					<div class="description-block">
					<h5 class="description-header"></h5>
					<span class="description-text">
						<button class="btn btn-primary">ver perfil</button>
					</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
export default {

	props:{
		name: String,
		email: String
	}
}
</script>
