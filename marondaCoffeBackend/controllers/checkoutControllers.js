const {payments,historyPayments} = require('../models/payments')

const snap =require ('../midtrans.js');
const midtransClient = require("midtrans-client");

const createPaymentOrderTransfer = async(req,res)=>{
      const { nama,amount, namecr } = req.body;
const idorder = 'ORDER-' + Date.now() + '-' + Math.floor(Math.random() * 1000);

const total_Amount = Number(String(amount).replace(/\D/g, ""));
  const params = {
    transaction_details: {
      order_id: idorder,
      gross_amount: total_Amount,
    },
    customer_details: {
      first_name: nama,
    }
  };

  try {
    const transaction = await snap.createTransaction(params);
    res.json({
      token: transaction.token,
      redirect_url: transaction.redirect_url
    });
  } catch (err) {
    console.error('Midtrans error:', err);
    res.status(500).json({ error: err.message });
  }
}
const callBackReturnIfOrderFailed=async(req,res)=>{
      const notification = req.body;

  const core = new midtransClient.CoreApi({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY
  });

  try {
    const status = await core.transaction.notification(notification);

    const orderId = status.order_id;
    const transactionStatus = status.transaction_status;
    const fraudStatus = status.fraud_status;

    // ⬇️ Update status transaksi di database kamu
    if (transactionStatus === 'capture') {
      if (fraudStatus === 'challenge') {
        // marked challenge
      } else if (fraudStatus === 'accept') {
        // transaksi sukses
        const createPaymentOrderTransfer=await new payments({
          name:nama,
          totalAmount:amount,
          paymentMethod:"transfer"
        })
        const createNewHistoryPaymentsTransfer=await new historyPayments({
          nameCostumers:nama,
          nameChasier:namecr,
          totalAmount:amount
        })
        if(!createPaymentOrderTransfer || !createNewHistoryPaymentsTransfer){
          res.status(401).send('invalid transfer, try againt')
        }
        else{
          createPaymentOrderTransfer.save()
          createNewHistoryPaymentsTransfer.save()
          res.status(200).send('sukses order transfer')
        }
      }
    } else if (transactionStatus === 'settlement') {
      // uang masuk
    } else if (transactionStatus === 'deny') {
      // pembayaran ditolak
    } else if (transactionStatus === 'expire') {
      // tidak dibayar, expired
    } else if (transactionStatus === 'cancel') {
      // dibatalkan
    }

    res.status(200).send({ message: 'OK' });
  } catch (err) {
    console.error('Callback error:', err);
    res.status(500).send(err.message);
  }
}

async function createpaymentOrderManual(req,res) {
  try{
    // namecs = name costumers 
    // namecr = name chasiers
    const {namecs,namecr,amount}=req.body 
   const createnewPaymentOrderManual= await new payments({
    name:namecs,
    totalAmount:amount,
    paymentMethod:"manual"
    })
    if(!createnewPaymentOrderManual){
      res.status(401).send('invalid create new order payment manual')
    }
    else{
      createnewPaymentOrderManual.save()
      const createNewHistoryPaymentsManual = await new historyPayments({
     nameCostumers:namecs,
      nameChasier:namecr,
      totalAmount:amount
      })
      createNewHistoryPaymentsManual.save()
      res.status(200).send('sukses create payment order manual')
    }
  }
  catch(err){
    res.status(404).send(err)
  }
}

async function deleteCheckOutProduct(req,res){
    try{
        const {id} =req.params
       const deleteHistory= await historyPayments.findByIdAndDelete(id)
       if(deleteHistory){
res.status(200).send('sukses delete product in collection payments')
       }
        else{
          res.status(401).send('invalid delete data history')
        }
    }
    catch(err){
        res.status(404).send(err)
    }
}


async function getAllHistoryPaymentProduct(req,res){
  try{
    const paymentHistory = await historyPayments.find()
    if(!paymentHistory){
      res.status(401).send('invalid get data history by chasier service')
    }
    else{
      res.status(200).json({paymentHistory})
    }
  }
  catch(Err){
    res.status(404).send(Err)
  }
}
module.exports ={deleteCheckOutProduct,createPaymentOrderTransfer,callBackReturnIfOrderFailed,createpaymentOrderManual,getAllHistoryPaymentProduct}