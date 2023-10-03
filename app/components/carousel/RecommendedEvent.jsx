import React from "react";
import Event from "./Event";

const RecommendedEvent = ( {events}) => {

  const nameFilter = (name) => name.toLowerCase().split(' ').slice(0, 2).join(' ');
  const uniqueEvents = events.filter((event, index, self) => {
    return index === self.findIndex(e => nameFilter(e.name) === nameFilter(event.name));
  });
  const eventNodes = uniqueEvents.map((event, index) => {
    return <Event event={event} key={index}/>
  })

  return (
    <>
    <div className="carousel rounded-box flex mx-auto max-w-[75%] h-[250px] mt-[10%] mb-[10%] shadow-lg">
      {eventNodes}
    </div>
    </>
  );
};

export default RecommendedEvent;
