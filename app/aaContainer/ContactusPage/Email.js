import React from 'react'
import styles from './Email.module.css'
import { MdEmail, MdForum, MdWhatsapp } from "react-icons/md";

const Email = () => {
  return (
    <div className={styles.main}>
        <h1 style={{color:'#f5f6f9'}}>Get in Touch</h1>
        <div className={styles.icon}><MdEmail /></div>
        <h2 style={{color:'#f5f6f9'}}>Support@sehatdiets.com</h2>
       
    </div>
  )
}

export default Email