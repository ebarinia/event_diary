import 'schedulely/dist/index.css';
import { Schedulely } from 'schedulely';

const EventCalendar = ( {userEvents, updateCalendarDetail} ) => {

  // const [calendarContent, setCalendarContent] = useState (false)
  
//   useEffect(()=> {
//     setCalendarContent(userEvents[0])
//     setLoading(false)
// }, [calendarContent])

  const handleCalendarClick = (event) => {
    updateCalendarDetail(event)
  }

    const calendarNodes = userEvents.map((event) => {
    if (event.booked === true) {
      return ({
        color: '#5dca6e',
        // end: event.dates.end.dateTime,
        id: event.id,
        start: event.dates.start.dateTime,
        summary: event.name,
      })
    }
    else {
      return ({
        color: '#f5ca4a',
        // end: event.dates.end.dateTime,
        id: event.id,
        start: event.dates.start.dateTime,
        summary: event.name,
      })
    }
  })

 
  return (
    <div className='mt-10'>
      <Schedulely events = {calendarNodes} actions = {{onEventClick: (event) => {handleCalendarClick(event)}}}/>
    </div>
    )
}


export default EventCalendar;