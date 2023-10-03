import React from 'react'
import Event from './Event'

const EventList = ({ events, page }) => {
  
  //This is to filter the duplicates in the list of events
  const nameFilter = (name) => name.toLowerCase().split(' ').slice(0, 2).join(' ');
  const uniqueEvents = events.filter((event, index, self) => {
    return index === self.findIndex(e => nameFilter(e.name) === nameFilter(event.name));
  }); 

  //This is to sort the events by their date
  const sortedEvents = uniqueEvents.sort((a, b) => {
    const dateA = new Date(a.dates.start.localDate);
    const dateB = new Date(b.dates.start.localDate);
    return dateA - dateB;
  }); 

  const eventNodes = sortedEvents.map((event, index) => {
    return <Event event={event} key={index} page={page} />
  })

  return (
    <div className='grid grid-cols-2 gap-4 mx-auto max-w-[75%] mb-10'>
      {eventNodes}
    </div>
  );
};

export default EventList;






