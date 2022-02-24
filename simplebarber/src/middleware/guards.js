import Cookie from 'js-cookie'

export default {
	auth: (to, from, next) => {	
		let auth_token = Cookie.get('auth_token');
		if(!auth_token){	
				next({name:'login'})

		}else{
			next();	
		}
    },
    guest: (to, from, next) => {	
		let auth_token = Cookie.get('auth_token');
		if(!auth_token)next()
		else next({name:'dashboard'});	
    }
}