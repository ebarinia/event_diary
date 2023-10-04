import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Event = ( {event} ) => {
  return (
    <div className="relative group">
      <Link href={`/events/${event.id}`}>
        <Image
        src={event.images[2].url}
        alt={event.name}
        height={300}
        width={300}
        className=''
        />
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-0 text-white group-hover:bg-opacity-50 transition-opacity duration-200">
          {event.name}
        </div>
        </Link>
    </div>
  )
}

export default Event