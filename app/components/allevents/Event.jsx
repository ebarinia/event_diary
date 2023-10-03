import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Event = ( {event, page} ) => {
  if (page === 'allevents') {
  return (
    <Link href={`/events/${event.id}`}
      className="flex flex-col rounded-lg bg-gray-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
      <Image className='h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg hover:scale-110 transition duration-500' src={event.images[2].url} alt="Event" width={300} height={300}/>
      <div className="flex flex-col justify-start p-6">
        <h5
          className="mb-1 text-lg font-medium text-neutral-900 dark:text-neutral-50">
          {event.name}
        </h5>
        <p className="mb-4 text-base text-neutral-500 dark:text-neutral-200">
          {event._embedded.venues[0].name} - {event._embedded.venues[0].city.name}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          {event.dates.start.localDate} {event.dates.start.localTime}
        </p>
      </div>
    </Link>
    )
  }
  if(page === 'userevents') {
    return (
      <Link href={`/userevents/${event.id}`}
        className="rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <Image className='h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg hover:scale-110 transition duration-500' src={event.images[2].url} alt="Event" width={300} height={300}/>
        <div className="flex flex-col justify-start p-6">
          <h5
            className="mb-2 text-lg font-medium text-neutral-900 dark:text-neutral-50">
            {event.name}
          </h5>
          <p className="mb-4 text-base text-neutral-500 dark:text-neutral-200">
            {event._embedded.venues[0].name} - {event._embedded.venues[0].city.name}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-300">
            {event.dates.start.localDate} {event.dates.start.localTime}
          </p>
        </div>
      </Link>
      )
  }
}
export default Event











