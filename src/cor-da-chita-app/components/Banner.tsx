import React from "react";


export default function Banner() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-800">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="text-center z-10">
        <h1 className="text-4xl font-bold mb-4">Cor da Chita</h1>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
        <p>image</p>
        {/* <Image src={imageUrl} alt="Banner Image" width={400} height={300} /> */}
      </div>
    </div>
  );
}
