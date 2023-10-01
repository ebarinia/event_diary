import React from 'react'
import Image from "next/image";

const Event = ( {event} ) => {
  return (
    <div className="carousel-item">
      <Image
        src={event.images[2].url}
        alt="Event"
        height={300}
        width={300}
      />
    </div>
  )
}

export default Event