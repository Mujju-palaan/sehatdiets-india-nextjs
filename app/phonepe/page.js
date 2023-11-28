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

  fetch('apis/pg-sandbox/pg/v1/pay', options)
  .then(response => response.json())
  .then(response => {console.log(response)
  window.location.href =  response.data.instrumentResponse.redirectInfo.url;
})
  
  .catch(err => console.error(err));
  }
  
// const fetch = require('node-fetch');

// const url = 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';
// const options = {
//   method: 'POST',
//   headers: {accept: 'application/json', 'Content-Type': 'application/json', 
//   'X-VERIFY': 'd7a8e4458caa6fcd781166bbdc85fec76740c18cb9baa9a4c48cf2387d554180###1'},
//   data: JSON.stringify({
//     request: 'ewogICJtZXJjaGFudElkIjogIlBHVEVTVFBBWVVBVCIsCiAgIm1lcmNoYW50VHJhbnNhY3Rpb25JZCI6ICJNVDc4NTA1OTAwNjgxODgxMDQiLAogICJtZXJjaGFudFVzZXJJZCI6ICJNVUlEMTIzIiwKICAiYW1vdW50IjogMTAwMDAsCiAgInJlZGlyZWN0VXJsIjogImh0dHBzOi8vd2ViaG9vay5zaXRlL3JlZGlyZWN0LXVybCIsCiAgInJlZGlyZWN0TW9kZSI6ICJSRURJUkVDVCIsCiAgImNhbGxiYWNrVXJsIjogImh0dHBzOi8vd2ViaG9vay5zaXRlL2NhbGxiYWNrLXVybCIsCiAgIm1vYmlsZU51bWJlciI6ICI5OTk5OTk5OTk5IiwKICAicGF5bWVudEluc3RydW1lbnQiOiB7CiAgICAidHlwZSI6ICJQQVlfUEFHRSIKICB9Cn0='
//     })
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
//   }  
return (
  <>
  <button  onClick={handleReq}>Hello Click me</button>
  </>
)
}

export default Page