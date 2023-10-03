import React from 'react'
import Event from './Event'

const EventList = ({ events, page }) => {
  const nameFilter = (name) => name.toLowerCase().split(' ').slice(0, 2).join(' ');
  const uniqueEvents = events.filter((event, index, self) => {
    return index === self.findIndex(e => nameFilter(e.name) === nameFilter(event.name));
  });
  const eventNodes = uniqueEvents.map((event, index) => {
    return <Event event={event} key={index} page={page} />
  })
  return (
    <div className='grid grid-cols-2 gap-4 mt-10 mx-auto max-w-[75%]'>
      {eventNodes}
    </div>
  );
};
export default EventList;







