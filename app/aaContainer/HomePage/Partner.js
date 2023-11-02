import React from 'react'
import styles from './partner.module.scss'

const Partner = () => {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
        <div>
            <h1>We partner with select, top tier brands across multiple stages of their growth</h1>
        </div>
        <div style={{display:'flex'}}>
            <div >
                <div>4,000+</div>
                <div>BRANDS USE OUR PRODUCTS</div>
            </div>
            <div>
                <div>78%</div>
                <div> REPEAT CUSTOMERS</div>
            </div>
            <div>
                <div>1.5x</div>
                <div>GROWTH WITHIN 6 MONTHS OF FUNDING</div>
            </div>
            <div>
                <div>₹600 Cr+</div>
                <div>FUNDS DISBURSED</div>
            </div>
        </div>
    </div>
  )
}

export default Partner