
import Image from 'next/image'

const EventCalendarDetail = ( {calendarEvent} ) => {
    // const calendarEvent = calendarEvent.map((event) => {
    //   return ({
    //     color: '#4B578A',
    //     // end: event.dates.end.dateTime,
    //     id: event.id,
    //     start: event.dates.start.dateTime,
    //     summary: event.name,
    //     })
    //   })
    
    return (
      <>
          {calendarEvent && (
            <>
            <p className='text-xl text-gray-400 ml-4'>Your next event:</p>
            <figure>
              <Image className='ml-5 shadow-xl' src={calendarEvent.images[2].url} alt="Event" width={300} height={300}/>
            </figure>
          
           <div className="flex flex-col justify-start p-6">
                <h5
                  className="mb-1 text-lg font-medium text-gray-400 dark:text-neutral-50">
                  {calendarEvent.name}
                </h5>
                <p className="mb-4 text-base text-neutral-500 dark:text-neutral-200">
                  {calendarEvent._embedded.venues[0].name} - {calendarEvent._embedded.venues[0].city.name}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-300">
                  {calendarEvent.dates.start.localDate} at {calendarEvent.dates.start.localTime}
                </p>
          </div>
        </>)}
      </>
      )
}
  export default EventCalendarDetail