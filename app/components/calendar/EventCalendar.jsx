import 'schedulely/dist/index.css';
import { Schedulely } from 'schedulely';

const EventCalendar = ( {userEvents} ) => {

  const calendarNodes = userEvents.map((event) => {
    return ({
      color: '#4B578A',
      // end: event.dates.end.dateTime,
      id: event.id,
      start: event.dates.start.dateTime,
      summary: event.name,
      })
    })
  
  return (
    <div className='mt-10'>
      <Schedulely events = {calendarNodes} />
    </div>
    )
}


export default EventCalendar;