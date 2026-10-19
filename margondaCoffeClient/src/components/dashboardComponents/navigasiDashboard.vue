<template>
    <div class='container'>
        <a>margonda cofee </a>
        <div class='links'>
            <p
             v-for="(data,index) in dataRoute" :key='index'
            @click='anchorRouteDashboard(data.route)'>{{data.name}}       
        </p>
        </div>
        <a @click='logoutAccounts'>logout</a>
    </div>
</template>

<script>
import { transaksiStore } from '@/store/transaksi';
export default{
    setup(){
        const storeTransaksi=transaksiStore()
        const lengthChartData= storeTransaksi.lengthChartTransaksi
        console.log(lengthChartData)
        const dataRoute=[
                {name:'home',route:'/dashboard/halamanUtama'},
                {name:'menu',route:'/dashboard/menu'},
                {name:'transaksi',route:'/dashboard/transaksi'},
                {name:'riwayat transaksi',route:'/dashboard/riwayatTransaksi'},
            ]
            return {dataRoute,storeTransaksi,lengthChartData}
    },
    methods:{
        anchorRouteDashboard(data){
            if(data){
                this.$router.push(data)
            }
        },
        logoutAccounts(e){
            e.preventDefault()
            this.$router.push('/loginChasier')
        }
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  height: 100vh;
  padding: 20px;
  background: #6f4e37; /* warna kopi */
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.container > a {
  font-size: 1.6em;
  font-weight: 800;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;
}

/* Menu list */
.links {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 25px;
  width: 100%;
}

.links p {
  font-size: 1.1em;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease;
}

.links p:hover {
  opacity: 0.7;
  transform: translateY(-3px);
}

/* Logout button styling */
.container > a:last-child {
  font-size: 1.2em;
  opacity: 0.9;
  transition: 0.3s ease;
}

.container > a:last-child:hover {
  opacity: 0.7;
}

/* ===========================
   RESPONSIVE DESIGN
=========================== */

/* Tablet */
@media (max-width: 768px) {
  .container {
    padding: 25px;
  }

  .container > a {
    font-size: 1.4em;
  }

  .links p {
    font-size: 1em;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .container {
    padding: 20px 10px;
  }

  .container > a {
    font-size: 1.3em;
  }

  .links {
    gap: 20px;
  }

  .links p {
    font-size: 0.95em;
  }
}

</style>