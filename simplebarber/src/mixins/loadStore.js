import Cookie from 'js-cookie'
import { mapActions, mapGetters } from 'vuex'

const loadStore = {
  methods:{
    loadStore(startView){
      if(this.getUserId === null){

          const auth_token = Cookie.get('auth_token')
          
          this.axios.post('/me', {token:auth_token})
          .then((response) => {
            console.log(response.data)
            this.setUserId(response.data.user.id)
            this.setUserName(response.data.user.name)
            this.setUserFirstName(response.data.user.firstName)
            this.setUserEmail(response.data.user.email)
            
            this.axios.post('/loadStore',{
              token: Cookie.get('auth_token'),
              id: this.getUserId
            }).then((response) => {
              this.setAccess(response.data.access);
              switch(this.getAccess){
                case "subscriber_user":
                  // setando assinante
                  this.setSubscriberuserId(response.data.id);
                  // setando permissoes
                  this.setPermissions(response.data.permissions)
                  // setando barbershop
                  this.setBarbershopId(response.data.barbershop.id)
                  this.setBarbershopName(response.data.barbershop.name)
                  // setando professions
                  this.setProfessionals(response.data.barbershop.professionals);
                  // setando servicos
                  this.setServices(response.data.barbershop.services);
                  // setando atendentes caixa
                  this.setCashierAttedants(response.data.barbershop.cashier_attendants)
                  
                  startView()
                  break
                
                case "admin":
                  console.log("admin")
                  break
                
                case "cashier_attendant":
                  // setando atendente caixa
                  this.setCashierAttedantId(response.data.id)                    
                  //setando permissoes 
                  this.setPermissions(response.data.permissions)
                  // setando barbershop
                  this.setBarbershopId(response.data.barbershop.id)
                  this.setBarbershopName(response.data.barbershop.name)
                  //setando professionais
                  this.setProfessionals(response.data.barbershop.professionals)
                  // setando services
                  this.setServices(response.data.barbershop.services)
                  
                  startView()
                  break  
              }


            });

          })
          .catch((error) => {
              switch(error.response.status) {
                case 401:
                  Cookie.remove('auth_token')
                  this.$router.push({path:'/login'})
                  break;
              }         
          })
      }
      
    },
    ...mapActions([
      'setPermissions',
      'setAccess', 
      'setUserId',  
      'setUserName',
      'setUserFirstName',
      'setUserEmail',
      'setSubscriberuserId',
      'setBarbershopId',
      'setBarbershopName',
      'setProfessionals',
      'setServices',
      'setCashierAttedants',
      'setCashierAttedantId'
    ])
  
  },
  computed:{
      ...mapGetters([
          'getUserId',
          'getAccess',
          'getPermissions',
          'getUserName',
          'getBarbershopId',
          'getProfessionals',
      ])
  }

}
export default loadStore;