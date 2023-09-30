// Para renderizar os cards dos produtos ao clicar em categoria ou usar o menu de busca
import { Button } from "@nextui-org/react";
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
export default function ProductCard(props: any) {
  return <>
  <>
  <Card className="py-4 w-36">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="../imgs/istockphoto-495829576-612x612.jpg"
          width={270}
         
        />
        <p className="text-tiny uppercase font-bold">{props.descricao}</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
       
      </CardBody>
    </Card>
  </>
  
  
  
  </>;
}
