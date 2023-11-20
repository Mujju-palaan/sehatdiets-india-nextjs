'use client'
import React from 'react'
import { InlineWidget } from "react-calendly";

const Calendar = () => {
  return (
    <>
      <div className="App">
        <InlineWidget url="https://calendly.com/sehatnutrition/30min" />
      </div>
    </>
  )
}

export default Calendar