'use client'
import React from 'react'
import Lottie from "lottie-react"
import img from './assets/preamble.json'
import styles from './acommon.module.css'

const Preamble = () => {
  return (
    <div>
        <Lottie className={styles.Preamble} animationData={img} />
    </div>
  )
}

export default Preamble