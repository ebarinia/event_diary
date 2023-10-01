import React from 'react'
import Event from './Event'

const EventList = ( {events}) => {

  const eventNodes = events.map((event, index) => {
    return <Event event={event} key={index}/>
  })
  return (
    <>
    
     {eventNodes}
    </>

  )
}

export default EventList