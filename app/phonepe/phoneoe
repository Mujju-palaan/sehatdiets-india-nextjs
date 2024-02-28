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
console.log(generateTransactionId())

  const merchantUserId =  "MUID" + Date.now()
  console.log(merchantUserId)
  const prod = {
    "merchantId": "M18SL6QE34PP",
    "merchantTransactionId": generateTransactionId(),
    "merchantUserId": merchantUserId,
    "amount": 1000,
    "redirectUrl": "https://sehatdiets.com/phonepe-redirect-url",
    "redirectMode": "REDIRECT",
    "callbackUrl": "https://sehatdiets.com/phonepe-callback-url",
    "mobileNumber": "7880006363",
    "paymentInstrument": {
      "type": "PAY_PAGE"
    }
  }
    const payload = JSON.stringify(prod);
    const payLoadMain = Buffer.from(payload).toString('base64');
        console.log(payLoadMain)
    const salt_key = 'ba42417d-04a2-432d-83c4-b475b3f53bcd'
    const keyIndex = 1;
    const string = payLoadMain + '/pg/v1/pay' + salt_key;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + '###' + keyIndex;
    console.log(checksum)

  const handler = () => {
    const options = {
      // mode: 'no-cors',
      method: 'POST',
      headers: {
        accept: 'application/json',
       'Content-Type': 'application/json',
       'X-VERIFY': checksum
      },
      body: JSON.stringify({
        request: payLoadMain
      }),
    };
    
    fetch('https://api.phonepe.com/apis/hermes/pg/v1/pay', options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        window.location.href =  response.data.instrumentResponse.redirectInfo.url;
    })
      .catch(err => console.error(err));
  }
  return (
    <>
      <button onClick={handler}>Make Payment</button>
    </>
    )



}

export default page