'use client'
import React, { useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
import axios from "axios";
import dayjs from "dayjs";
import {Skeleton} from "@nextui-org/react";
import { url } from "../api/backend/webApiUrl";
export default function PaymentQrCode({ ...props }: any) {
  const logo = require("../../assets/imgs/IMG-20230919-WA0013~2.jpg");
  const[total,setTotal] = useState<number>()
  const[codigoQrCode,setCodigoQrCode] = useState<string>()
  const [dataExpiracao,setDataExpiracao] = useState<any>()
  useEffect(()=>{

    getPay()

  },[])
const getPay = async()=>{
//O id na rota será pego nas informações do pedido criado,no caso o id do pagamento do mercado pago
  await axios.get(`${url}/Payment/66290326178`).then(r=>{
  console.log(r.data)
  setTotal(r.data.transactionAmount)
  setCodigoQrCode(r.data.pointOfInteraction.transactionData.qrCode)
  setDataExpiracao(r.data.dateOfExpiration)

  })



}

  return (
<>

    { codigoQrCode &&(
 <div className=" grid-box bg-light flex flex-col items-center justify-center   ">

        
     
 <QRCode
 
   value={codigoQrCode}
   size={270}
   logoHeight={40}
   logoWidth={40}
   eyeRadius={12}
   
   quietZone={7}
   logoImage={logo}
 />
  


 
 <p className="p-1.5 text-lg">R$ {total?.toFixed(2)} Reais</p>
 <p className="p-1.5 text-lg" > Este código expirará  {dayjs(dataExpiracao).format('DD/MM/YYYY [as] HH:mm:ss')}</p>
 <p className="p-1.5 text-lg"> {codigoQrCode}</p>

 </div>
    )}
   
        </>
      
  )
}
