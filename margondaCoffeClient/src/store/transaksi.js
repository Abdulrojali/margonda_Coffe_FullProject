import { defineStore } from "pinia";
import axios from "axios";
export const transaksiStore = defineStore('transaksi',{
    state:()=>({
        chasierName:localStorage.getItem('nameChasier'),
        // array to push data charts order and riwayat transaksi
        logTransaksiUser:[],
        dataUserOrderProduct:[],
        logRiwayatTransaksi:[],
        history:'',
        // data user payment
        dataPaymentUserChange:[],

        // quantity use if change update data qty like increment or decrement
        qty:1,
        
        // active toggle in class inputname and listnameOrder
        statusNameOrder:null,
        
        // get value in increment or decrement in chartComponents.vue
        incrementDecrementQty:null,

        // get income in totalamount in riwayatTransaksi
        income:null,
        lengthChartTransaksi:0,
        groccey_Amount:0,
        changeAmount:0,
        product:[
            {urlImg:'../../assets/espresso.jpg',name:'Espresso',deskripsi:'Minuman kopi murni yang kuat dan kaya rasa.',price:20000,totalAmount:20000},
            {urlImg:'../../assets/latte.jpg',name:'latte',deskripsi:'Kombinasi sempurna antara kopi dan susu.',price:25000,totalAmount:25000},
            {urlImg:'../../assets/capuccino.jpg',name:'cappucino',deskripsi:'Rasa kopi klasik dengan foam susu yang lembut.',price:25000,totalAmount:25000},
            {urlImg:'../../assets/americano.jpg',name:'americano',deskripsi:'americano Minuman kopi murni yang kuat dan kaya rasa.',price:18000,totalAmount:18000},
         
        ],
    }),
    actions:{
        deleteDataTransaksiByIndex(index){
            this.logTransaksiUser.splice(index,1)
        },
        // push menu to charts
        pushToChartsTransaksi(data){
            this.logTransaksiUser.push(data)
            this.lengthChartTransaksi=this.logTransaksiUser.length
            this.groccey_Amount=this.logTransaksiUser.reduce((total, item) => total + item.totalAmount, 0)
        },

          // update data amount product * quantity 
        updateDataTransaksi(index,kondisi){
        this.incrementDecrementQty=kondisi
            const dataTransaksi=this.logTransaksiUser[index]
                if(this.incrementDecrementQty==='plus'){
                    this.qty++
                            dataTransaksi.qty=this.qty
                            dataTransaksi.totalAmount=parseInt(dataTransaksi.price * this.qty)
                }
                else{
                    if(dataTransaksi.qty<=1){
                        dataTransaksi.qty=1
                        this.groccey_Amount=dataTransaksi.price
                    }
                    else{
                    this.qty--
                    dataTransaksi.qty=this.qty
                    dataTransaksi.totalAmount=parseInt(dataTransaksi.price * this.qty)
                 }
                }
               this.groccey_Amount= this.logTransaksiUser.reduce((total, item) => total + item.totalAmount, 0)
               
            },
            submitDataPayment(name,amount){
                const dataPayment={
                    nama:name,
                    changeAmount:amount
                }
                this.dataPaymentUserChange.push(dataPayment)
            },
            getHistoryPayments(){
                axios.get('http://localhost:8080/chasier/checkout/product/payment/history',{chasier:this.chasierName})
                .then((res)=>{
                    this.history=res.data
                })
                .catch((err)=>console.log(err))
            }
    }
});