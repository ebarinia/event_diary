// 'use client'
import React from 'react'
import Image from "next/image";

const Event = () => {
  return (
    <div className="carousel rounded-box ml-[25%] mr-[25%] h-[250px] mt-10 shadow-lg">
    <div className="carousel-item">
      <Image
        src={require("../../../images/photo-1559703248-dcaaec9fab78.jpg")}
        alt="Burger"
      />
    </div>
    <div className="carousel-item">
      <Image
        src={require("../../../images/photo-1565098772267-60af42b81ef2.jpg")}
        alt="Burger"
      />
    </div>
    <div className="carousel-item">
      <Image
        src={require("../../../images/photo-1572635148818-ef6fd45eb394.jpg")}
        alt="Burger"
      />
    </div>
    <div className="carousel-item">
      <Image
        src={require("../../../images/photo-1494253109108-2e30c049369b.jpg")}
        alt="Burger"
      />
    </div>
    <div className="carousel-item">
      <Image
        src={require("../../../images/photo-1550258987-190a2d41a8ba.jpg")}
        alt="Burger"
      />
    </div>
    <div className="carousel-item">
      <Image
        src={require("../../../images/photo-1559181567-c3190ca9959b.jpg")}
        alt="Burger"
      />
    </div>
    <div className="carousel-item">
      <Image
        src={require("../../../images/photo-1601004890684-d8cbf643f5f2.jpg")}
        alt="Burger"
      />
    </div>
  </div>
  )
}

export default Event