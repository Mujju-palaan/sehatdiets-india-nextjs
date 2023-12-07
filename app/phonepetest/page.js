'use client'
import React from 'react'

const page = () => {

  const handler = () => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
       'Content-Type': 'application/json',
       'X-VERIFY': 'd7a8e4458caa6fcd781166bbdc85fec76740c18cb9baa9a4c48cf2387d554180###1'
      },
      body: JSON.stringify({
        request: 'ewogICJtZXJjaGFudElkIjogIlBHVEVTVFBBWVVBVCIsCiAgIm1lcmNoYW50VHJhbnNhY3Rpb25JZCI6ICJNVDc4NTA1OTAwNjgxODgxMDQiLAogICJtZXJjaGFudFVzZXJJZCI6ICJNVUlEMTIzIiwKICAiYW1vdW50IjogMTAwMDAsCiAgInJlZGlyZWN0VXJsIjogImh0dHBzOi8vd2ViaG9vay5zaXRlL3JlZGlyZWN0LXVybCIsCiAgInJlZGlyZWN0TW9kZSI6ICJSRURJUkVDVCIsCiAgImNhbGxiYWNrVXJsIjogImh0dHBzOi8vd2ViaG9vay5zaXRlL2NhbGxiYWNrLXVybCIsCiAgIm1vYmlsZU51bWJlciI6ICI5OTk5OTk5OTk5IiwKICAicGF5bWVudEluc3RydW1lbnQiOiB7CiAgICAidHlwZSI6ICJQQVlfUEFHRSIKICB9Cn0='
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