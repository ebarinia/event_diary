'use client'
import Link from 'next/link'
import Image from 'next/image'

const EventCalendarDetail = ( {calendarEvent, updateEvent, removeUserEvent} ) => {
    // const calendarEvent = calendarEvent.map((event) => {
    //   return ({
    //     color: '#4B578A',
    //     // end: event.dates.end.dateTime,
    //     id: event.id,
    //     start: event.dates.start.dateTime,
    //     summary: event.name,
    //     })
    //   })

  const handleBooking = () => {
    updateEvent({
    id: calendarEvent.id,
    booked: !calendarEvent.booked
    })
}

  const handleRemove = () => {
    removeUserEvent(calendarEvent.id)
}

  return (
      <>
        {calendarEvent && (
            <>
            <figure>
              <Image className='hover:scale-110 transition duration-500 cursor-pointer' src={calendarEvent.images[2].url} alt="Event" width={300} height={300}/>
            </figure>
          
           <div className="flex flex-col justify-start p-6">
                <h5
                  className="mb-1 text-lg font-medium text-neutral-900 dark:text-neutral-50">
                  {calendarEvent.name}
                </h5>
                <p className="mb-4 text-base text-neutral-500 dark:text-neutral-200">
                  {calendarEvent._embedded.venues[0].name} - {calendarEvent._embedded.venues[0].city.name}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-300">
                  {calendarEvent.dates.start.localDate} {calendarEvent.dates.start.localTime}
                </p>
          </div>
          {calendarEvent.booked && (
            <div>
              <button>Resell</button>
            </div>
          )}
          {!calendarEvent.booked && (
            <div>
              <Link href={calendarEvent.url} target="blank" className="bg-orange-500 hover:bg-orange-600 transition text-white font-bold py-2 px-4 rounded"><button onClick={handleBooking}>Book</button></Link>
              <button onClick={handleRemove}>Remove</button>
            </div>
          )}
          </>)
        }
        {!calendarEvent && <p>Please choose an event.</p>}
      </>
      )
}
  export default EventCalendarDetail