<template>
  <div class="paymentParentComponent">
    <div>
      <h3 class="judul">Checkout</h3>
      <div class="content">
        <div class="payment" v-if="statusInputDataUser==false">
       <h3>petugas yang melayani :{{ nameChasier }}</h3>
        <input type="text" placeholder="nama costumers" v-model="nameUser">
        <input type="text"   @keypress="blockText" placeholder="biaya yang di bayarkan" v-model="totalAmount">
        <div class="selectInputTransaksi">
          <h1 class="judul">pilih metode transaksi</h1>
          <select name="" id="" v-model="selectMetodeTransaksi">
          <option value="manual">manual</option>
          <option value="transfer">transfer</option>
        </select>
        </div>
        <b>total belanjaan Rp. {{ storeTransaksi.groccey_Amount }}</b>
        <button @click="submitInput(nameUser,totalAmount)" class="btnSubmitInput">submit</button>
    </div>
    <p v-else></p>
    <p v-if="statusInputDataUser==false"></p>
    <div class="output" v-else >
      <h1>faktur belanjaan</h1>
      <i class="bars"></i>
      <table>
        <tr>
          <td>nama costumers</td>
          <td>total belanja</td>
          <td>uang costumers</td>
          <td>kembalian</td>
          <td>metode pembayaran</td>
        </tr>
        <tr>
          <td>{{ nameUser }}</td>
          <td>{{ storeTransaksi.groccey_Amount }}</td>
          <td class="red">{{ totalAmount }}</td>
          <td class="green">{{ totalAmount - storeTransaksi.groccey_Amount }}</td>
          <td>{{ selectMetodeTransaksi  }}</td>
        </tr>
      </table>
    </div>
      <button v-if="statusCheckOut==true" @click="payNow">checkout</button>
      <p v-else></p>
    </div>
    </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios'
  import { transaksiStore } from '@/store/transaksi';
  import { ref } from 'vue';
  export default {
    data() {
      return {
        nameChasier:localStorage.getItem('nameChasier'),
      selectMetodeTransaksi:ref(''),
        storeTransaksi:transaksiStore(),
        totalAmount:'',
            nameUser:'',
            statusInputDataUser:false,
            statusCheckOut:false,
     };
    },
    methods: {

        blockText(e) {
    const allowed = /[0-9]/;
    if (!allowed.test(e.key)) e.preventDefault();
  },
  async payNow() {
  const transaksiUser = {
    nama: this.nameUser,
    totalBelanjaUser: this.storeTransaksi.groccey_Amount,
    uangUser: this.totalAmount,
    kembalianUser: this.totalAmount - this.storeTransaksi.groccey_Amount
  };

  // Jika manual, langsung selesai
  if (this.selectMetodeTransaksi === 'manual') {
    this.storeTransaksi.logRiwayatTransaksi.push(transaksiUser);
    setTimeout(async() => {
     await axios.post('http://localhost:8080/chasier/checkout/product/manual',{namecs:transaksiUser.nama,namecr:this.nameChasier,product:this.storeTransaksi.logTransaksiUser,amount:transaksiUser.uangUser})
     console.log(this.storeTransaksi.logTransaksiUser.name)
    this.$router.push('/dashboard/riwayatTransaksi');
    this.storeTransaksi.logTransaksiUser = [];
    }, 800);

    return;
  }

  // Jika transfer → buka popup pembayaran Midtrans
  try {
    const payload = {
      nameUser: this.nameUser,
      amount: this.totalAmount
    };

    // 1. Panggil backend → dapatkan token transaksi
    // axios.post('http://localhost:8080/chasier/checkout/product',{nameUser:this.namaUser,amount:this.totalAmount})
    const res = await axios.post("http://localhost:8080/chasier/checkout/product/transfer",{nama:this.nameUser,amount:this.totalAmount,namecr:this.nameChasier});

    const token = res.data.token;

    // 2. Simpan data transaksi ke store/variabel kamu (optional)
    // this.storeTransaksi.logTransaksiUser.push(transaksiUser);

    // 3. Tampilkan popup Snap Midtrans
    window.snap.pay(token, {
      onSuccess: (result) => {
        alert("Pembayaran berhasil!");

        // simpan status pembayaran kalau perlu
        // this.storeTransaksi.logRiwayatTransaksi.push({
        //   ...transaksiUser,
        //   status: "paid",
        //   midtransResult: result
        // });

        this.$router.push('/dashboard/riwayatTransaksi');
      },

      onPending: (result) => {
        alert("Menunggu pembayaran...");
        // this.storeTransaksi.logRiwayatTransaksi.push({
        //   ...transaksiUser,
        //   status: "pending",
        //   midtransResult: result
        // });
      },

      onError: (err) => {
        alert("Pembayaran gagal!");
        console.error(err);
      },

      onClose: () => {
        alert("Anda menutup popup sebelum selesai");
      }
    });

  } catch (err) {
    console.error("Midtrans error:", err);
    alert("Gagal memproses pembayaran");
  }
},
      submitInput(name,total){
            if(name==='' || total===''){
                alert('tolong masukkan input nama user dan total belanja')
                this.statusInputDataUser=false
            }
            else{
                this.statusInputDataUser=true
                this.statusCheckOut=true
            }
            
        }
    },
    mounted(){
      this.storeTransaksi.updateData
    }
  };
  </script>
  
  <style scoped>
/* ========================================== */
/*                 RESET                      */
/* ========================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ========================================== */
/*          CONTAINER & WRAPPER               */
/* ========================================== */
.paymentParentComponent {
  width: 60%;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
}

.judul {
  font-size: 1.6rem;
  font-weight: 600;
  margin: 20px 0;
  color: #333;
}

/* ========================================== */
/*            PAYMENT FORM                    */
/* ========================================== */
.payment {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.payment h1 {
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: capitalize;
}

.payment input,
.payment select {
  width: 80%;
  height: 35px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  font-size: 1rem;
}

.payment input:focus,
.payment select:focus {
  border-color: #4CAF50;
}

/* Submit Button */
.btnSubmitInput {
  width: 120px;
  height: 40px;
  background: #4CAF50;
  color: #fff;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: 0.25s ease;
  font-size: 0.95rem;
}

.btnSubmitInput:hover {
  background: #45a049;
  transform: scale(1.05);
}

/* ========================================== */
/*             OUTPUT / FAKTUR                */
/* ========================================== */
.output {
  width: 100%;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.output h1 {
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: capitalize;
}

.bars {
  border-bottom: 1px solid #666;
  margin: 10px 0;
}

/* Highlight Colors */
.green {
  color: green;
}

.red {
  color: red;
}

/* ========================================== */
/*                 TABLE                      */
/* ========================================== */
table {
  width: 100%;
  margin-top: 10px;
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

td,
th {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 0.95rem;
}

th {
  background: #333;
  color: #fff;
}

tr:nth-child(even) {
  background: #f8f8f8;
}

/* ========================================== */
/*             BUTTON (GLOBAL)                */
/* ========================================== */
button {
  padding: 10px 18px;
  background: #4CAF50;
  color: #fff;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.25s ease;
}

button:hover {
  background: #45a049;
}

/* ========================================== */
/*              RESPONSIVE CSS                */
/* ========================================== */
@media (max-width: 900px) {
  .paymentParentComponent {
    width: 80%;
  }

  .payment input,
  .payment select {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .paymentParentComponent {
    width: 95%;
    padding: 15px;
  }

  .judul {
    font-size: 1.4rem;
  }

  .payment {
    width: 100%;
  }

  table td,
  table th {
    padding: 8px;
    font-size: 0.85rem;
  }

  button,
  .btnSubmitInput {
    width: 100%;
  }

  .content {
    gap: 20px;
  }
}

@media (max-width: 400px) {
  .judul {
    font-size: 1.2rem;
  }
}

</style>