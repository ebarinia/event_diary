import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Event = ( {event} ) => {
  return (
    <div className="group carousel-item">
      <Link href={event.url} target='blank'>
        <Image
        src={event.images[2].url}
        alt={event.name}
        height={300}
        width={300}
        className='object-cover hover:blur-sm transition duration-500'
        />
      </Link>
      </div>
  )
}

export default Event