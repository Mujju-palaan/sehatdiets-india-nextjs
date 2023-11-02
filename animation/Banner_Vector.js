'use client'
import Lottie from "lottie-react"
import img from './assets/Banner_Vector.json'
import styles from './acommon.module.css'

const Banner_Vector = () => {
  return (
    <>
        <div >
            <Lottie className={styles.Banner_Vector} animationData={img} />
        </div>  
    </>
  )
}

export default Banner_Vector