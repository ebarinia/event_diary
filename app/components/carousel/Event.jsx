import React from 'react'
import Image from "next/image";

const Event = ( {event} ) => {
  return (
    <div className="carousel-item">
      <Image
        src={event.images[2].url}
        alt={event.name}
        height={300}
        width={300}
        className='object-cover hover:blur-sm transition duration-500'
      />
      </div>
  )
}

export default Event