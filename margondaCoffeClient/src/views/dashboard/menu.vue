<template>
  <section id="menu" class="menu">
       <div class="container">
           <h2>Menu Kami</h2>
           <div class="menu-list">
               <div class="menu-item"
               v-for="(data,index) in listMenu" :key="index">
                   <img :src="data.urlImg" alt="">
                   <h3>{{ data.name }}</h3>
                   <span>{{ data.price }}</span>
                   <br>
                   <br>
                   <br>
                   <button @click="pushToCharts(data)"><i class="fa-solid fa-cart-shopping"></i></button>
               </div>
           </div>
       </div>
   </section>
</template>
<script>
import americano from '@/assets/americano.jpg'
import capuccino from '@/assets/capuccino.jpg'
import espresso from '@/assets/espresso.jpg'
import late from '@/assets/latte.jpg'

import { transaksiStore } from '@/store/transaksi';
export default{
   data(){
     return{
      listMenu:[
            {qty:1,urlImg:americano,name:'americano',deskripsi:'Minuman kopi murni yang kuat dan kaya rasa.',price:25000,totalAmount:25000,dataInputName:'',namaUser:null,statusOrder:false},
            {qty:1,urlImg:capuccino,name:'capucino',deskripsi:'Kombinasi sempurna antara kopi dan susu.',price:15000,totalAmount:15000,dataInputName:'',namaUser:null,statusOrder:false},
            {qty:1,urlImg:espresso,name:'espresso',deskripsi:'Rasa kopi klasik dengan foam susu yang lembut.',price:10000,totalAmount:10000,dataInputName:'',namaUser:null,statusOrder:false},
            {qty:1,urlImg:late,name:'late',deskripsi:'americano Minuman kopi murni yang kuat dan kaya rasa.',price:15000,totalAmount:15000,dataInputName:'',namaUser:null,statusOrder:false},
         
      ],
      storeTransaksi:transaksiStore()
     } 
   },
   methods:{
       pushToCharts(data){
         this.storeTransaksi.pushToChartsTransaksi(data)
         this.$router.push('/dashboard/transaksi')
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

.menu {
  padding: 50px 20px;
  background: #f7f7f7;
  text-align: center;
}

.menu h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 35px;
  font-weight: 600;
}

/* Grid Responsive Menu */
.menu-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 25px;
  width: 100%;
  max-width: 1200px;
  margin: auto;
}

/* Card Menu */
.menu-item {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 14px rgba(0,0,0,0.07);
  transition: 0.25s ease;
  cursor: pointer;
  position: relative;
}

.menu-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  opacity: 0.97;
}

/* Image */
.menu-item img {
  width: 100%;
  height: 170px;
  border-radius: 10px;
  object-fit: cover;
}

/* Nama Menu */
.menu-item h3 {
  margin-top: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

/* Harga */
.menu-item span {
  font-size: 1.1rem;
  font-weight: bold;
  color: #6f4e37;
  display: block;
  margin-top: 8px;
}

/* Button Add to Cart */
button {
  padding: 12px 16px;
  margin-top: 15px;
  background: #6f4e37;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 3px 8px rgba(0,0,0,0.15);
  transition: 0.25s ease;
}

button:hover {
  opacity: 0.9;
  transform: scale(1.05);
}

/* ========================== */
/*  Responsive Breakpoints    */
/* ========================== */

/* Tablet */
@media (max-width: 768px) {
  .menu h2 {
    font-size: 1.7rem;
  }

  .menu-item img {
    height: 150px;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .menu {
    padding: 40px 15px;
  }

  .menu h2 {
    font-size: 1.5rem;
  }

  .menu-item {
    padding: 15px;
  }

  .menu-item img {
    height: 140px;
  }

  button {
    width: 100%;
    padding: 12px;
  }
}

</style>