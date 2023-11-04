'use client'
import React from 'react'
import Lottie from "lottie-react"
import img from './assets/call2.json'
import styles from './acommon.module.css'

const Call2 = () => {
  return (
    <div>
        <Lottie className={styles.call2} animationData={img} />
    </div>
  )
}

export default Call2