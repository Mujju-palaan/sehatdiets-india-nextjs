'use client'
import crypto from 'crypto'

const Page = () => {
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
    const prod_URL = 'apis/pg-sandbox/pg/v1/pay'

  const handleReq = () => {
    // setShowvar(true);
    console.log("JHASkf");

  const options = {
    method: 'POST',
    headers: 
    {accept: 'application/json', 
    'Content-Type': 'application/json',
    'X-VERIFY': checksum
  },
  body: JSON.stringify({
          request: payloadMain
        })
  };
  console.log(options);

  fetch('https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay', options)
  .then(response => response.json())
  .then(response => {console.log(response)
  window.location.href =  response.data.instrumentResponse.redirectInfo.url;
})
  
  .catch(err => console.error(err));
  }
  
  
return (
  <>
  <button  onClick={handleReq}>Hello Click me</button>
  </>
)
}

export default Page