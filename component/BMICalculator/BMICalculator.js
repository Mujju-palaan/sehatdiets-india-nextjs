'use client'
import React, {useState} from 'react'
import './styles.css'
//const BMICalculator
const BMICalculator = () => {

  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 
  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height/100 * height/100))
      // let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 18.5) {
        setMessage('Underweight')
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('Healthy weight')
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage('Overweight')
      }
      else {
        setMessage('Obesity')
      }
    }
  }
 
 
  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
    <div className='container'>
      <h2 className='center' style={{color:'#50D5B1', fontFamily:'sans-serif,Pangeatext'}}>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
 
        <div>
          <label style={{fontSize:'1.4rem'}}>Weight (Kgs)</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
 
        <div>
          <label style={{fontSize:'1.4rem'}}>Height (cm)</label>
          <input value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>
 
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
 
      <div className='center'>
        <h3 style={{fontSize:'1.4rem'}}>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
    </div>
  </div>
  )
}

export default BMICalculator;