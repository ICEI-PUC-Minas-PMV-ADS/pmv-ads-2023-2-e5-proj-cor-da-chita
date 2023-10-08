// Opção de pagar com PIX
"use client"
import React from "react";
import { QRCode } from 'react-qrcode-logo';
import { useEffect, useState } from 'react';
export default function QrCode(...props:any) {
 
  const logo = require('../assets/imgs/IMG-20230919-WA0013~2.jpg')
  return <>

  <div className=" flex flex-col ">

   <QRCode value={"www.globo.com.br"}  size={200}  logoHeight={40} logoWidth={40} 
      eyeRadius={7}
      logoPadding={2.2}
      quietZone={7}
      logoImage={logo}/>
       {/* <p className="mt-3">R${props.transactionAmount}</p> 
        <p className="mt-3">R${props.pointOfInteraction.transactionData.qrCode}</p> */}
       <p className="mt-5">R$23</p> 
        <p className="mt-3">zxcvzxcvzxcvzxcvzxcvzxvzxv</p>

        </div>

  
  </>;
}
