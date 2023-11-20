'use client'
import React from 'react'
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const Whatsapp = () => {
  return (
    <div>
        <WhatsAppWidget
        phoneNo="918712219195"
        position="right"
        widgetWidth="300px"
        widgetWidthMobile="260px"
        autoOpen={true}
        autoOpenTimer={5000}
        messageBox={true}
        messageBoxTxt="Hi Team, is there any related service available ?"
        iconSize="50"
        iconColor="white"
        iconBgColor="rgba(33, 240, 21, 0.8)"
        headerIcon="https://www.pdapps.net.in/_next/static/media/android-chrome-192x192.9a39c2c7.png"
        headerIconColor="pink"
        headerTxtColor="black"
        headerBgColor="tomato"
        headerTitle="Sehat Nutrition"
        headerCaption="Online"
        bodyBgColor="#bbb"
        chatPersonName="Support"
        chatMessage={
          <>
            Hi there 👋 <br />
            <br /> How can I help you?
          </>
        }
        footerBgColor="#999"
        placeholder="Type a message.."
        btnBgColor="yellow"
        btnTxt="Start Chat"
        btnTxtColor="black"
      />
    </div>
  )
}

export default Whatsapp