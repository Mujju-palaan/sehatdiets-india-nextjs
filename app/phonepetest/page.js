'use client'
import React from 'react'
import crypto from 'crypto'

const page = () => {

  const test = {
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
    const payload = JSON.stringify(test);
    const payLoadMain = Buffer.from(payload).toString('base64');
        console.log(payLoadMain)
    // const salt_key = 'ba42417d-04a2-432d-83c4-b475b3f53bcd'
    const key = `099eb0cd-02cf-4e2a-8aca-3e6c6aff0399`;
    const keyIndex = 1;
    const string = payLoadMain + '/pg/v1/pay' + key;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + '###' + keyIndex;
    console.log(checksum)

  const handler = () => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
       'Content-Type': 'application/json',
       'X-VERIFY': checksum
      },
      body: JSON.stringify({
        request: payLoadMain
      })
    };
    
    fetch('https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay', options)
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