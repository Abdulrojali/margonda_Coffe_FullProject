<template>
  <div class="container">
    <h1 class="heading">list Orders</h1>
    <div class="contentCharts">
        <div class="flexCharts">
          <div class="charts"
      v-for="(data,index) in storeTransaksi.logTransaksiUser"
      :key="index">
      <div class="section1">
        <img :src="data.urlImg" alt="">
      </div>
      <div class="section2">
        <h1> {{ data.name }}</h1>
        <b> RP. {{ data.price }}</b>
        <div class="qty">
        <div class="totalQty">
          <button @click="incrementQty(index)">+</button>
        <p>{{ data.qty }}</p>
        <button @click="decrementQty(index)">-</button>
      </div>
        </div>
        <p>amount {{ data.totalAmount }}</p>
        </div>
           <div class="delete" @click="deleteTransaksi(index)">x </div>
       </div>
       </div>

    </div>
  </div>
</template>
<script>
import { transaksiStore } from '@/store/transaksi.js';
import { ref } from 'vue';
export default{
  data(){
    return{
      dataInputName:ref(''),
      numberPhone:ref(''),
      indexedProductOrder:null,
      storeTransaksi:transaksiStore(),
     statusBuyTransaksi:null
    }
  },
methods:{
    incrementQty(index){
      this.indexedProductOrder=index
      const plus='plus'
      this.storeTransaksi.updateDataTransaksi(index,plus)
    },
    decrementQty(index){
      const min ='min'
        this.storeTransaksi.updateDataTransaksi(index,min)
      },
      deleteTransaksi(index){
        this.storeTransaksi.deleteDataTransaksiByIndex(index)
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

.center {
  text-align: center;
}

.alert {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 100%;
  margin-top: 15%;
  font-size: 3em;
  font-weight: 800;
  text-transform: capitalize;
  text-align: center;
  color: red;
}

.container {
  width: 100%;
  height: 100%;
}

.heading {
  width: 80%;
  margin-left: 5%;
  font-size: 3em;
  font-weight: 800;
  text-transform: capitalize;
}

.contentCharts {
  width: 100%;
}

.flexCharts {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 10% 0;
}

.charts {
  width: 50%;
  margin: auto;
  padding: 20px;
  background-color: white;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
  box-shadow: 0 0 0 0.3px gray;
}

.section1 {
  display: flex;
  gap: 10px;
}

.charts img {
  width: 80%;
  height: 100px;
}

.charts h1 {
  font-size: 1.1em;
  font-weight: 780;
  text-transform: capitalize;
  margin-top: 5px;
}

p,
b {
  margin-top: 5px;
  font-size: 0.9em;
  font-weight: 500;
}

.total,
.totalQty {
  display: flex;
  gap: 20px;
  margin-top: 5px;
}

.totalQty p {
  font-size: 0.9em;
}

button {
  border: none;
  font-size: 1.25em;
  font-weight: 250;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

.qty {
  margin: 0;
}

.totalAmountBtn {
  width: 25%;
  padding: 5px 10px;
  margin: auto;
  background-color: green;
  color: white;
  font-size: 1.25em;
}

.inputCharts,
.listOrderCharts {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
}

.inputName {
  width: 50%;
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
}

.inputName input {
  width: 40%;
  padding: 5px 10px;
}

.inputName button {
  padding: 5px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.9em;
  cursor: pointer;
}

.menulistProduct {
  display: flex;
}
.charts {
  position: relative; /* wajib untuk absolute child */
}

/* posisi tombol delete */
.delete {
  position: absolute;
  top: 5px;
  right: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 3px 6px;
  background: red;
  color: white;
  border-radius: 50%;
  font-size: 1.5em;
  cursor: pointer;
}

</style>