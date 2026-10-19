import { createRouter, createWebHistory } from 'vue-router'
import loginChasier from '@/views/loginViews/loginChasier.vue'
import loginAdmin from '@/views/loginViews/loginAdmin.vue'
import dashboardHome from '@/views/dashboardViews.vue'
import landingpage from '@/views/landingapageViews.vue'


import homeDashboard from '@/views/dashboard/home.vue'
import menuDashboard from '@/views/dashboard/menu.vue'
import riwayatTransaksiDashboard from '@/views/dashboard/riwayatTransaksi.vue'
import transaksiDashboard from '@/views/dashboard/transaksi.vue'
import viewsDataCharts from '@/views/dashboard/viewsCharts.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'landingpage',
      component:landingpage
    },
        {
          path:'/loginChasier',
          name:'loginChasier',
          component:loginChasier
        },
        {
          path:'/loginAdmin',
          name:'loginAdmin',
          component:loginAdmin
        },
    {
      path:'/dashboard',
      name:'dashboard',
      children:[
        {name:'dashboardHome',path:'halamanUtama',component:homeDashboard},
        {name:'dashboardMenu',path:'menu',component:menuDashboard},
        {name:'dashboardTransaksi',path:'transaksi',component:transaksiDashboard},
        {name:'dashboardriwayatTransaksi',path:'riwayatTransaksi',component:riwayatTransaksiDashboard},
        {name:'viewsCharts',path:'viewsCharts/:id',component:viewsDataCharts},
      ],     
      component:dashboardHome
    }
  ],
})

export default router
