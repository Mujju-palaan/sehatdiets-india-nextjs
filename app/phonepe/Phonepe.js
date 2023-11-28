const [showvar, setShowvar] = useState(false);
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
    // const salt_key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399'
    // const payload = JSON.stringify(paymentPayload);
    // const payloadMain = Buffer.from(payload).toString('base64');
    // const keyIndex = 1;
    // const string = payloadMain + '/pg/v1/pay' + salt_key;
    // const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    // const checksum = sha256 + '###' + keyIndex;
    // console.log(checksum)
    const prod_URL = "apis/pg-sandbox/pg/v1/pay"


    const handleReq = () => {
      setShowvar(true);
    console.log("JHASkf");

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'X-VERIFY': 'bb865e6c6b4fd565d4ff604b7cea8f2bbdc01be7f9ca20f4050b5b1962161a95###1'
        },
        body: JSON.stringify({
          request: 'ewogICJtZXJjaGFudElkIjogIlBHVEVTVFBBWVVBVCIsCiAgIm1lcmNoYW50VHJhbnNhY3Rpb25JZCI6ICJNVDc4NTA1OTAwNjgxODgxNzgiLAogICJtZXJjaGFudFVzZXJJZCI6ICJNVUlENDAzIiwKICAiYW1vdW50IjogMTAwLAogICJyZWRpcmVjdFVybCI6ICJodHRwczovL3dlYmhvb2suc2l0ZS9yZWRpcmVjdC11cmwiLAogICJyZWRpcmVjdE1vZGUiOiAiUE9TVCIsCiAgImNhbGxiYWNrVXJsIjogImh0dHBzOi8vd2ViaG9vay5zaXRlL2NhbGxiYWNrLXVybCIsCiAgIm1vYmlsZU51bWJlciI6ICI5OTk5OTk5OTk5IiwKICAicGF5bWVudEluc3RydW1lbnQiOiB7CiAgICAidHlwZSI6ICJQQVlfUEFHRSIKICB9Cn0='
        })
      };

      
      fetch(prod_URL , options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            window.location.href =  response.data.instrumentResponse.redirectInfo.url;
        })
        .catch(err => console.error(err));

    }
    