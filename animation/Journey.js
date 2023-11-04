'use client'
import React from 'react'
import Lottie from "lottie-react"
import img from './assets/journey.json'
import styles from './acommon.module.css'

const Journey = () => {
  return (
    <div>
        <Lottie className={styles.journey} animationData={img} />
    </div>
  )
}

export default Journey