import React from 'react'
import Image from "next/image";

const Event = () => {
  return (
    <div className='grid grid-cols-3 gap-4 ml-[10%] mr-[10%] mt-10 mb-10'>
    <div className="card w-80 bg-base-100 shadow-xl basis-1/4 ">
  <figure>
  <Image className='hover:scale-110 transition duration-500 cursor-pointer' src={require("../../../images/band.jpg")} alt="Event"/>
    </figure>
    <div className="card-actions justify-center">
    <h2 className="card-title">Event</h2>
    </div>
    </div>

    <div className="card w-80 bg-base-100 shadow-xl basis-1/4">
    <figure>
    <Image className='hover:scale-110 transition duration-500 cursor-pointer' src={require("../../../images/band.jpg")} alt="Event"/>
    </figure>
    <div className="card-actions justify-center">
    <h2 className="card-title">Event</h2>
    </div>
    </div>

    <div className="card w-80 bg-base-100 shadow-xl basis-1/4">
    <figure>
    <Image className='hover:scale-110 transition duration-500 cursor-pointer' src={require("../../../images/band.jpg")} alt="Event"/>
    </figure>
    <div className="card-actions justify-center">
    <h2 className="card-title">Event</h2>
    </div>
    </div>

    <div className="card w-80 bg-base-100 shadow-xl basis-1/4">
    <figure>
    <Image className='hover:scale-110 transition duration-500 cursor-pointer' src={require("../../../images/band.jpg")} alt="Event"/>
    </figure>
    <div className="card-actions justify-center">
    <h2 className="card-title">Event</h2>
    </div>
    </div>

    <div className="card w-80 bg-base-100 shadow-xl basis-1/4">
    <figure>
    <Image className='hover:scale-110 transition duration-500 cursor-pointer' src={require("../../../images/band.jpg")} alt="Event"/>
    </figure>
    <div className="card-actions justify-center">
    <h2 className="card-title">Event</h2>
    </div>
    </div>

    <div className="card w-80 bg-base-100 shadow-xl basis-1/4">
    <figure>
    <Image className='hover:scale-110 transition duration-500 cursor-pointer' src={require("../../../images/band.jpg")} alt="Event"/>
    </figure>
    <div className="card-actions justify-center">
    <h2 className="card-title">Event</h2>
    </div>
    </div>
  </div>
    )
}

export default Event

