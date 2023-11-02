'use client'
import Lottie from "lottie-react"
import img from './assets/Girl_saying_Hi.json'
import styles from './acommon.module.css'

const Girl_saying_Hi = () => {
  return (
    <>
        <div >
            <Lottie className={styles.size} animationData={img} />
        </div>  
    </>
  )
}

export default Girl_saying_Hi