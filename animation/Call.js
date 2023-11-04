'use client'
import React from 'react'
import Lottie from "lottie-react"
import img from './assets/call.json'
import styles from './acommon.module.css'

const Call = () => {
  return (
    <div>
        <Lottie className={styles.call} animationData={img} />
    </div>
  )
}

export default Call