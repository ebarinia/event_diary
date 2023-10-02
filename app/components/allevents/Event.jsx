import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Event = ( {event, page} ) => {
  if (page === 'allevents') {
  return (
    <Link href={`/events/${event.id}`}>
      <div className="w-60 bg-base-100 shadow-xl basis-1/4 ">
          <figure>
          <Image className='hover:scale-110 transition duration-500 cursor-pointer' src={event.images[2].url} alt="Event" width={300} height={300}/>
          </figure>
          <div className="card-actions justify-center"><h3 className="card-title mt-3">{event.name}</h3></div>
      </div>
    </Link>
    )
  }
  if(page === 'userevents') {
    return (
      <Link href={`/userevents/${event.id}`}>
        <div className="w-60 bg-base-100 shadow-xl basis-1/4 ">
            <figure>
            <Image className='hover:scale-110 transition duration-500 cursor-pointer' src={event.images[2].url} alt="Event" width={300} height={300}/>
            </figure>
            <div className="card-actions justify-center"><h3 className="card-title mt-3">{event.name}</h3></div>
        </div>
      </Link>
      )
  }
}

export default Event

