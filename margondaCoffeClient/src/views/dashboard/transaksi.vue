<template>
        <div class="chartNotFoundOrder" v-if="this.storeTransaksi.logTransaksiUser.length===0">
            <i  class="fa-solid fa-xmark"></i>
            <p>data kosong</p>
        </div>
<div class="parents" v-else>
  <chartComponents></chartComponents>
  <checkoutUi></checkoutUi>
</div>  
</template>
  
  <script>
  import { transaksiStore } from '@/store/transaksi';
  import chartComponents from '@/components/dashboardComponents/chartComponents.vue';
  import checkoutUi from '@/components/dashboardComponents/checkoutUi.vue';
  export default {
    data(){
      return{
        storeTransaksi:transaksiStore()
      }
    },
    components:{
      chartComponents,
      checkoutUi
    }
  };
  </script>
  
  <style scoped>
.judul {
  position: fixed;
  top: 10px;
  font-size: 2em;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
}

.parents {
  width: 100%;
  padding: 20px 0;
  background: #fdf6f6;
  display: flex;
  justify-content: center;
  align-items: center;
}

.listOrder {
  width: 80%;
  margin: 30px;
  display: grid;
  grid-template-columns: repeat(350px, 1fr);
  grid-gap: 10px;
}

.dataOrder {
  display: grid;
  grid-template-areas:
    "content1 content2"
    "content1 content2"
    "btn btn";
  grid-template-columns: 50% 50%;
  grid-gap: 30px;
  padding: 50px;
  box-shadow: 0 0 2px 1px gray;
  justify-content: center;
  align-items: center;
}

.dataOrder img {
  width: 100%;
  height: 150px;
}

.dataOrder b {
  font-size: 2.5em;
  font-weight: 900;
  text-transform: capitalize;
}

.dataOrder p {
  font-size: 0.9em;
  font-weight: 200;
}

.dataOrder h1 {
  font-size: 1em;
  font-weight: 700;
}

.dataOrder button {
  width: 75%;
  padding: 8px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 2px 1px gray;
}

.contentOrder {
  box-shadow: 0 0 2px 1px gray;
  gap: 3px;
}

.sedang {
  width: 75%;
  height: 100px;
  padding: 0 20px;
  border: none;
  box-shadow: 0 0 1px 1px gray;
}

.kecil {
  width: 75%;
  padding: 4px;
}

.red {
  color: red;
  font-weight: 100;
}

.center {
  width: 100%;
  margin: auto;
  position: absolute;
  font-size: 3em;
  color: red;
  text-transform: uppercase;
}

.chartNotFoundOrder {
  position: absolute;
  margin: 10% 0 0 20%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
}

.chartNotFoundOrder i {
  font-size: 7em;
  color: red;
}

.chartNotFoundOrder p {
  font-size: 7em;
}

  </style>
  