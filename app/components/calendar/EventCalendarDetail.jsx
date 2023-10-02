
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
        <div className="">
          {calendarEvent && calendarEvent.images && (
            <figure>
              <Image className='hover:scale-110 transition duration-500 cursor-pointer' src={calendarEvent.images[2].url} alt="Event" width={300} height={300}/>
            </figure>
          )}
          {calendarEvent && (
            <div className="card-actions justify-center">
              <h3 className="card-title mt-3">{calendarEvent.name}</h3>
            </div>
          )}
        </div>
      )
}
  export default EventCalendarDetail