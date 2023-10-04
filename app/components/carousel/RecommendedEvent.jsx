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

  const eventNodes = sortedEvents.slice(0,4).map((event, index) => {
    return <Event event={event} key={index}/>
  })

  return (
    <>
    <div className="h-[40vh] flex items-center justify-center mb-8">
      <div >
        <p className="text-orange-700 font-bold text-xl mb-4">Recommended Event</p>
        <div className="carousel rounded-xl p-4 space-x-4 bg-gray-700 flex mx-auto max-w-[100%] shadow-lg">
          {eventNodes}
        </div>
      </div>
    </div>
  </>
  );
};

export default RecommendedEvent;
