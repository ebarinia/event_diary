import React from "react";
import Event from "./Event";

const RecommendedEvent = ( {events}) => {

  const nameFilter = (name) => name.toLowerCase().split(' ').slice(0, 2).join(' ');
  const uniqueEvents = events.filter((event, index, self) => {
    return index === self.findIndex(e => nameFilter(e.name) === nameFilter(event.name));
  }); 

  const sortedEvents = uniqueEvents.sort((a, b) => {
    const dateA = new Date(a.dates.start.localDate);
    const dateB = new Date(b.dates.start.localDate);
    return dateA - dateB;
  }); 

  const eventNodes = sortedEvents.slice(0,10).map((event, index) => {
    return <Event event={event} key={index}/>
  })

  return (
    <>
    <div className="h-[50vh] flex items-center justify-center mb-7">
      <div >
        <p className="ml-[12%] text-gray-400 text-xl mb-4">Recommended Event</p>
        <div className="carousel flex mx-auto max-w-[75%] h-[250px] shadow-lg">
          {eventNodes}
        </div>
      </div>
    </div>
  </>
  );
};

export default RecommendedEvent;
