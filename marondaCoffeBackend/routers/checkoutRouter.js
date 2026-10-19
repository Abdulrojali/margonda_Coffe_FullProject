const express = require('express')
const checkoutRouter = express.Router()

const checkoutControllers= require('../controllers/checkoutControllers')
// checkoutRouter.post('/product',checkoutProducts)
checkoutRouter.delete('/product/delete/:id',checkoutControllers.deleteCheckOutProduct)
checkoutRouter.post('/product/transfer',checkoutControllers.createPaymentOrderTransfer)
checkoutRouter.post('/product/manual',checkoutControllers.createpaymentOrderManual)
checkoutRouter.post('/product/callback',checkoutControllers.callBackReturnIfOrderFailed)
checkoutRouter.get('/product/payment/history',checkoutControllers.getAllHistoryPaymentProduct)
module.exports=checkoutRouter