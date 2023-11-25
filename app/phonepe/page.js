'use client'
import crypto from 'crypto'
import axios from 'axios';



const paymentPayload = {
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
      const salt_key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399'
        const payload = JSON.stringify(paymentPayload);
        const payloadMain = Buffer.from(payload).toString('base64');
        const keyIndex = 1;
        const string = payloadMain + '/pg/v1/pay' + salt_key;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;
        console.log(checksum)
  const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"

const PhonePeComponent = () => {
  
  const handlePayment =  () => {
        

      const options = {
      method: 'POST',
      url: prod_URL,
      // credentials: "include",
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum
      },
      data: {
        request: payloadMain
      }
      
  };
  fetch('https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  // axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
}
    
  

  return (
    <div>
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
};

export default PhonePeComponent;

// export const dynamic = 'force-dynamic' // defaults to force-static
 
// export async function POST(request) {
//   return new Response('Hello, Next.js!', {
//     status: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '/phonepe',
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//     },
//   })
// }