import React from "react";
import Event from "./Event";

const RecommendedEvent = ( {events}) => {

  const eventNodes = events.map((event, index) =>{
    return <Event key={index} event={event}/>
  })

  return (
    <>
    <div className="carousel rounded-box ml-[25%] mr-[25%] h-[250px] mt-10 shadow-lg">
      {eventNodes}
    </div>
    </>
  );
};

export default RecommendedEvent;
