<template>
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <!-- <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8"> -->
      <span class="brand-text font-weight-light">Simple Baber</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">

          <img src="../../../assets/img/profile/profile-default.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">
              {{ getUserName }} {{ getUserFirstName }}
          </a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item">
            <router-link :to="{name:'dashboard'}" 
              class="nav-link">
              <i class="fas fa-home nav-icon"></i>
              <p>Home</p>
            </router-link>
          </li>
          <myBarbershop />
          <cashRegister />
          <agenda />
          <cashierAttendant />
          <professionals />
          <services />
          <subscriberUser />
          <li class="nav-item">
            <router-link :to="{name:'dashboard'}" 
              class="nav-link">
              <i class="fas fa-cogs nav-icon"></i>
              <p>configurações</p>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
<script>

import { mapGetters } from 'vuex'
// links
import myBarbershop from '../../../components/links/myBarbershop'
import professionals from '../../../components/links/professionals'
import services from '../../../components/links/services'
import subscriberUser from '../../../components/links/subscriberUser'
import cashierAttendant from '../../../components/links/cashierAttendant'
import agenda  from '../../../components/links/agenda'
import cashRegister  from '../../../components/links/cashRegister'

export default{
  computed:{
    ...mapGetters(['getUserName','getUserFirstName'])
	},
	components:{
    myBarbershop: myBarbershop,
    cashierAttendant:cashierAttendant,  
    professionals: professionals,
    services: services,
    subscriberUser:subscriberUser,
    agenda:agenda,
    cashRegister:cashRegister
  }
}
</script>
