import login from '../../views/guest/login'
import dashboard from '../../views/dashboard/dashboard'
import homeDashboard from '../../views/dashboard/homeDashboard'
import professionals from '../../views/dashboard/professionals'
import myBarbershop from '../../views/dashboard/myBarbershop'
import services from '../../views/dashboard/services'
import cashierAttendants from '../../views/dashboard/cashierAttendants'
import cashRegister from '../../views/dashboard/cashRegister'
import agenda from '../../views/dashboard/agenda'

const views = {
	login: login,
	dashboard: dashboard,
	homeDashboard: homeDashboard,
	professionals: professionals,
	myBarbershop: myBarbershop,
	services: services,
	cashRegister:cashRegister,
	cashierAttendants:cashierAttendants,
	agenda:agenda
}

export default views


