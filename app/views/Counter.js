import React from 'react'
import styles from './Counter.module.scss'

const Counter = () => {
  return (
    <div className={styles.main}>
        <h2>Number of Visitors :</h2>
        {/* <!-- hitwebcounter Code START --> */}
        <a href="https://www.hitwebcounter.com" target="_blank">
        <img src="https://hitwebcounter.com/counter/counter.php?page=9923274&style=0019&nbdigits=9&type=ip&initCount=50" 
        title="Counter Widget" alt="Visit counter For Websites"   border="0" /></a>
    </div>
  )
}

export default Counter