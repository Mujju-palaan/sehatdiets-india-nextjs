'use client'
import React from 'react'
import crypto from 'crypto'


const page = () => {
    function generateTransactionId() {
        const timeStamp = Date.now();
        const randomNumber = Math.floor(Math.random() * 1000000);
        const merchantPrefix = 'T';
        const transactionId = `${merchantPrefix}${timeStamp}${randomNumber}`
        return transactionId;
    }

    const prod = {
        "merchantId": "M18SL6QE34PP",
        "merchantTransactionId": "MT7850590068188104",
        "merchantUserId": "MUID123",
        "amount": 1,
        "redirectUrl": "https://localhost:3000/redirect-url",
        "redirectMode": "POST",
        "callbackUrl": "https://localhost:3000/callback-url",
        "mobileNumber": "7880006363",
        "paymentInstrument": {
          "type": "PAY_PAGE"
        }
      } 
    const test ={
        "merchantId": "PGTESTPAYUAT",
        "merchantTransactionId": "MT7850590068188104",
        "merchantUserId": "MUID123",
        "amount": 10000,
        "redirectUrl": "https://webhook.site/redirect-url",
        "redirectMode": "REDIRECT",
        "callbackUrl": "https://webhook.site/callback-url",
        "mobileNumber": "9999999999",
        "paymentInstrument": {
          "type": "PAY_PAGE"
        }
      }
    
    const payload = JSON.stringify(prod);
    const payLoadMain = Buffer.from(payload).toString('base64');
        console.log(payLoadMain)
    const salt_key = 'ba42417d-04a2-432d-83c4-b475b3f53bcd'
    const key = `099eb0cd-02cf-4e2a-8aca-3e6c6aff0399`;
    const keyIndex = 1;
    const string = payLoadMain + '/pg/v1/pay' + salt_key;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + '###' + keyIndex;
    console.log(checksum)
    
    const URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";
    const prod_URL = 'https://api.phonepe.com/apis/hermes/pg/v1/pay'
    const options = {
        method: 'POST',
        url: URL,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checksum
        },
        data: {
            request: payLoadMain
        }
    };

    const Payment = async () => {
        const response = await fetch('https://api.phonepe.com/apis/hermes/pg/v1/pay', {         
          method: 'POST',         
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checksum
          },
          body: JSON.stringify({payLoadMain }),
          mode: 'no-cors',
        })
        const res = await response.json()
        console.log(res)
        window.location.href =  response.data.instrumentResponse.redirectInfo.url;
      }
    
    

  return (
    <div>
      <button onClick={Payment}>Make Payment</button>
    </div>
  )
}

export default page