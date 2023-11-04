'use client'
import React from 'react'
import Lottie from "lottie-react"
import img from './assets/payment.json'
import styles from './acommon.module.css'

const Payment = () => {
  return (
    <div>
        <Lottie className={styles.payment} animationData={img} />
    </div>
  )
}

export default Payment