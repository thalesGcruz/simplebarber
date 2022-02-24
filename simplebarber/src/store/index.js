import modulePermissions from './modules/colletions/module_permissions'
import moduleProfessionals from './modules/colletions/module_professionals'
import moduleServices from './modules/colletions/module_services'
import moduleCashierAttendants from './modules/colletions/module_cashier_attendants' 

//aviso separa modulos de diferentes usuarioa
import moduleUser from './modules/users/module_user'
import moduleCashierAttendant from './modules/users/module_cashier_attendant'

import moduleBarbershop from './modules/module_barbershop'
import moduleAccess from './modules/module_access'

export default {
	modules : {
		access: moduleAccess,
		permissions:modulePermissions,
		user:moduleUser,
		barbershop:moduleBarbershop,
		professionals:moduleProfessionals,
		services:moduleServices,
		cashierAttendants: moduleCashierAttendants,
		cashierAttendant: moduleCashierAttendant
	}
}