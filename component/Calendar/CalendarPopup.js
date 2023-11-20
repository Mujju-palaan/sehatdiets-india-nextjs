'use client'
import React from 'react'
import { PopupWidget } from "react-calendly";


const CalendarPopup = () => {
  return (
    <div className="App">
      
      <PopupWidget
        url="https://calendly.com/acmesales"
        rootElement={document.getElementById("__next")}
        text="Click here to schedule meeting!"
        textColor="#ffffff"
        color="#50D5B1"
      />
    </div>
  )
}

export default CalendarPopup