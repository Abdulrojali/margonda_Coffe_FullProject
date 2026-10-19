<template>
  <div class="content">
      <table v-if="storeTransaksi.history">
    <div class="searchMenu">
      <input type="text" v-model="searchData" placeholder="search name">
      <button @click="searchName">search</button>

      <div class="filteringData">
        <select v-model="sortBy" @change="sortData">
          <option value="date">date</option>
          <option value="abjad">abjad</option>
        </select>
      </div>
    </div>


    <tr>
      <td>Name User</td>
      <th>Total Cost</th>
      <th>Date</th>
    </tr>
    <tr v-for="(data, index) in filteredData" :key="data._id">
      <td>{{ data.nameCostumers }}</td>
      <td>{{ data.totalAmount }}</td>
      <td>{{ formatDate(data.date) }}</td>
      <td>
        <i class="fa-solid fa-trash" @click="deleteData(data._id)"></i>
      </td>

      <td>
        <button @click="downloadFaktur(data)">download faktur</button>
      </td>
    </tr>
  </table>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import {transaksiStore} from "../../store/transaksi";
import axios from "axios";

const storeTransaksi = transaksiStore()


const searchData = ref("");
const sortBy = ref("");

const filteredData = computed(() => {
  let list = storeTransaksi.history?.paymentHistory || null;

  // search
  if (searchData.value) {
    list = list.filter(item =>
      item.nameCostumers.toLowerCase().includes(searchData.value.toLowerCase())
    );
  }

  // sorting
  if (sortBy.value === "abjad") {
    list.sort((a, b) => a.nameCostumers.localeCompare(b.nameCostumers));
  }
  if (sortBy.value === "date") {
    list.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return list;
});

function searchName() {
  // fungsi dummy karena sudah pakai computed
}

function sortData() {
  // fungsi dummy
}

onMounted(()=>{
  storeTransaksi.getHistoryPayments()
})

function deleteData(index) {
  axios.delete(`http://localhost:8080/chasier/checkout/product/delete/${index}`)
  .then((res=>{
  if(res.status===200){
    alert('sukses delete')
    window.location.reload()
  }
  }))
  .catch((err)=>{
    console.log(err)
  })
}

function downloadFaktur(data) {
  console.log("download faktur untuk:", data);
}

function formatDate(dateStr) {
  const d = new Date(dateStr);

  return new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(d);
}

</script>

<style scoped>
/* ============================= */
/*        Global Reset           */
/* ============================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  width: 100%;
  padding: 20px;
}

.heading {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 30px;
  text-transform: capitalize;
  color: #333;
}

/* ============================= */
/*  Empty State (Data Kosong)    */
/* ============================= */
.chartNotFoundOrder {
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.chartNotFoundOrder i {
  font-size: 6rem;
  color: #ff4d4d;
}

.chartNotFoundOrder p {
  font-size: 1.8rem;
  font-weight: 600;
  color: #444;
}

/* ============================= */
/*        Table Layout           */
/* ============================= */

/* ============================= */
/*        Table Layout           */
/* ============================= */
/* ============================= */
/*        Compact Table          */
/* ============================= */
/* ============================= */
/*      Larger Comfortable Table */
/* ============================= */

table {
  width: 95%;
  max-width: 1300px;             /* lebih besar */
  margin: 25px auto;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 3px 12px rgba(0,0,0,0.12);
}

table th {
  background: #333;
  color: #fff;
  padding: 14px 16px;            /* lebih besar */
  text-align: center;
  font-weight: 700;
  font-size: 1rem;               /* lebih besar */
  letter-spacing: 0.3px;
}

table td {
  padding: 12px 14px;            /* lebih besar */
  text-align: center;
  font-size: 0.95rem;            /* lebih besar */
  border-bottom: 1px solid #e6e6e6;
  height: 42px;                  /* ukuran row besar */
}

tr:nth-child(even) {
  background-color: #f7f7f7;
}

tr:hover {
  background-color: #efefef;
}

/* ============================= */
/* Icons */
/* ============================= */

table td i {
  cursor: pointer;
  font-size: 1.3rem;             /* icon lebih besar */
  padding: 6px;
  transition: 0.2s;
}

.fa-trash:hover {
  color: red;
}

/* ============================= */
/* Buttons */
/* ============================= */

table td button {
  padding: 8px 14px;             /* lebih besar */
  background: #6f4e37;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;             /* lebih besar */
  cursor: pointer;
  transition: 0.2s;
}

table td button:hover {
  transform: scale(1.05);
  opacity: 0.9;
}


/* ============================= */
/*          Search Bar           */
/* ============================= */

.searchMenu {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto 15px auto;
  display: flex;
  align-items: center;
  gap: 10px;
}

.searchMenu input {
  width: 70%;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.searchMenu button {
  padding: 8px 12px;
  background: #007bff;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}

.searchMenu button:hover {
  opacity: 0.9;
}

/* Dropdown filter */
.filteringData select {
  padding: 8px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

/* ============================= */
/*        Responsive Mobile      */
/* ============================= */

@media (max-width: 768px) {
  .heading {
    font-size: 1.6rem;
  }

  table th, table td {
    padding: 10px;
    font-size: 0.9rem;
  }

  .searchMenu {
    flex-direction: column;
    align-items: stretch;
  }

  .searchMenu input,
  .searchMenu button,
  .filteringData select {
    width: 100%;
  }
}

@media (max-width: 480px) {
  table {
    width: 100%;
  }

  .chartNotFoundOrder i {
    font-size: 4rem;
  }

  .chartNotFoundOrder p {
    font-size: 1.3rem;
  }
}
</style>
