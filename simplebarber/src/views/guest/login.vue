<template>
<div class="hold-transition login-page">
	<div class="login-box">

		<div class="login-logo">
			<a href="../../index2.html"><b>Simple</b>barber</a>
		</div>

		<div class="card">
			<div class="card-body login-card-body">
			<p class="login-box-msg">
				Faça login para iniciar sua sessão
			</p>

			<form v-on:submit.prevent="login">
			<div class="input-group mb-3">
			<input v-model="credentials.email" type="email" class="form-control" placeholder="Email">
			<div class="input-group-append">
			<div class="input-group-text">
			<span class="fas fa-envelope"></span>
			</div>
			</div>
			</div>
			<div class="input-group mb-3">
			<input v-model="credentials.password" type="password" class="form-control" placeholder="Password">
			<div class="input-group-append">
			<div class="input-group-text">
			<span class="fas fa-lock"></span>
			</div>
			</div>
			</div>
			<div class="row">
			<div class="col-8">
			<div class="icheck-primary">
			<input type="checkbox" id="remember">
			<label for="remember" style="margin-left:5px"> Lembre de min
			</label>
			</div>
			</div>
			<!-- /.col -->
			<div class="col-4">
			</div>
			<!-- /.col -->
			</div>
			

			<div class="social-auth-links text-center mb-3">
				<button type="submit" class="btn btn-primary btn-block">	Entrar
				</button>
			</div>
			</form>
			<!-- /.social-auth-links -->

			<p class="mb-1">
			<a href="forgot-password.html">Esqueci a minha senha</a>
			</p>
			<p class="mb-0">
			<a href="register.html" class="text-center">Quero me cadastrar</a>
			</p>
			</div>
		</div>

	</div>
</div>
</template>

<script>
import Cookie from 'js-cookie'
export default{
	data(){
		return{
			credentials : {
				email: '',
				password: ''
			}
		}
	},
	methods:{
		login: function(){
				
			this.axios.post('/login', this.credentials)
			.then((response) => {
				Cookie.set(
					'auth_token', response.data.access_token,
					{
						expires:response.data.expires_in,
						sameSite: 'lax'
					});
		
				this.$router.push({name:'dashboard'})	
			})
			.catch((error) => {
				console.log(error);
				switch(error.response.status) {
					case 401:
						alert('vc nao esta autencicado');
					break;
				}
            })

		}
	}
}
</script>

<style scoped>
</style>