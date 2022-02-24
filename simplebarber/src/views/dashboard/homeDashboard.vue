<template>
<div>
	<headerContent title="pagina inical" />	
    <homeAdmin />
    <homeSubscriberUser />
</div>
</template>
<script>
import headerContent from './template/headerContent'
import homeSubscriberUser from './homeSubscriberUser'
import homeAdmin from './homeAdmin'
export default{
	components : {
		headerContent: headerContent,
		homeAdmin: homeAdmin,
		homeSubscriberUser:homeSubscriberUser
	}	
}
</script>