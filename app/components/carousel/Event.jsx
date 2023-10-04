import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Event = ( {event} ) => {
  return (
    <div className="relative group">
      <Link href={`/events/${event.id}`}>
        <Image
        src={event.images[3].url}
        alt={event.name}
        height={300}
        width={300}
        className='rounded-lg'
        />
        <div className="absolute text-center top-4 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-0 text-white">
          {event.name}
        </div>
        </Link>
    </div>
  )
}

export default Event