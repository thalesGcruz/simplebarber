import view from './imports/views'
// import component from './imports/components'
import guard from '../middleware/guards'

const routes = [
	{
		path: '/',
		name: 'guest',
		component: view.login
	},
	{
		path: '/login',
		name: 'login',
		component: view.login,
		beforeEnter: guard.guest
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		component: view.dashboard,
		beforeEnter: guard.auth,
		redirect: {name:'homeDashboard' },
		children: [
			{
				path: '',
				name: 'homeDashboard', 
				component: view.homeDashboard},
			
			{
				path: 'professionals',
				name: 'professionals',
				component: view.professionals
			},
			
			{
				path: 'myBarbershop',
				name: 'myBarbershop',
				component: view.myBarbershop
			},
			{
				path: 'services',
				name: 'services',
				component: view.services
			},
			{
				path: 'cashierAttendants',
				name: 'cashierAttendants',
				component: view.cashierAttendants
			},
			{
				path: 'cashRegister',
				name: 'cashRegister',
				component: view.cashRegister
			},
			{
				path: 'agenda/:idProfessional',
				name: 'agenda',
				component: view.agenda
			}
		]
	},
	{
		path: '/reset-password',
		name: 'reset-passwrod',
		component: view.login		
	},
	{
		path: '/register',
		name: 'register',
		component: view.login		
	}

]

export default routes