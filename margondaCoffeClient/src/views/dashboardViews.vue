<template>
    <div class='home'>
        <navigasiDashboard></navigasiDashboard>
        <RouterView></RouterView>
    </div>
</template>

<script>
import navigasiDashboard from '../components/dashboardComponents/navigasiDashboard.vue'
import {RouterView} from 'vue-router'
export default{
    components:{
        navigasiDashboard
    }
}
</script>

<style scoped>
*{
    padding:0;
    box-sizing:border-box;
    margin:0;
}
.home{
    width:100%;
    height:100vh;
    display:grid;
    grid-template-columns:15% auto;    
}
</style>