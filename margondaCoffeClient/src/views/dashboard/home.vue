<template>
  <div class="home">
    <h1>Selamat Datang {{ nameUser }}</h1>
<!-- 
    Banner
    <img
      src="https://via.placeholder.com/900x300?text=Welcome+Dashboard"
      alt="Banner"
      class="banner"
    /> -->

    <!-- Info Transaksi -->
    <div class="content2">
      <h1>Info Transaksi</h1>

      <div class="listOrderInfo">
        <div
          class="list"
          v-for="(data, index) in dataListTotal"
          :key="index"
          @click="routeNavigasi(data.navigasiMenu)"
        >
          <h2>{{ data.name }}</h2>
          <b>{{ data.qty }}</b>
        </div>
      </div>
    </div>

    <!-- Diagram -->
    <h2 class="chartTitle">Diagram Total Transaksi</h2>
    <canvas id="chartPayment" width="900" height="350"></canvas>
  </div>
</template>

<script>
import { transaksiStore } from "@/store/transaksi";
import { computed, onMounted } from "vue";
import { nextTick } from "vue";
export default {
  setup() {
    const nameUser = localStorage.getItem("nameChasier");
    const storeTransaksi = transaksiStore();

    // DATA DINAMIS
    const lengthTotalTransaksi = computed(() => {
      return storeTransaksi.history?.paymentHistory?.length || 0;
    });

    const totalOrder = computed(() => storeTransaksi.logTransaksiUser.length);

    const dataListTotal = computed(() => [
      {
        name: "Total Order",
        qty: totalOrder.value,
        navigasiMenu: "/dashboard/transaksi",
      },
      {
        name: "Total Transaksi",
        qty: lengthTotalTransaksi.value,
        navigasiMenu: "/dashboard/riwayatTransaksi",
      },
    ]);

    // ==========================
    //       DRAW CHART
    // ==========================
    function drawChart() {
      const canvas = document.getElementById("chartPayment");
      const ctx = canvas.getContext("2d");

      const data = storeTransaksi.history?.paymentHistory || [];

      const labels = data.map((item) => item.nameCostumers);
      const values = data.map((item) => Number(item.totalAmount));

      if (!values.length) return;

      const maxValue = Math.max(...values);
      const scale = 200 / maxValue;

      const barWidth = 80;
      const gap = 40;
      let x = 60;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = "14px Arial";

      values.forEach((value, i) => {
        const height = value * scale;

        // BAR
        ctx.fillStyle = "#4e73df";
        ctx.fillRect(x, canvas.height - height - 40, barWidth, height);

        // LABEL NAMA
        ctx.fillStyle = "#333";
        ctx.fillText(labels[i], x + 10, canvas.height - 10);

        // LABEL NILAI
        ctx.fillText(`Rp ${value}`, x, canvas.height - height - 50);

        x += barWidth + gap;
      });
    }

    onMounted(async () => {
      await storeTransaksi.getHistoryPayments();
        await nextTick();
      drawChart();
    });

    return {
      nameUser,
      dataListTotal,
      routeNavigasi(data) {
        this.$router.push(data);
      },
    };
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
}

/* Banner */
.banner {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

/* Card Container */
.listOrderInfo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  width: 100%;
  padding: 10px;
}

/* Card */
.list {
  padding: 25px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.25s;
}

.list:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.list h2 {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.list b {
  font-size: 2rem;
  color: #2c3e50;
}

/* Chart */
.chartTitle {
  margin-top: 20px;
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
}

canvas {
  margin: 10px auto;
  display: block;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
