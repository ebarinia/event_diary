import React from 'react'
import Event from './Event'

const EventList = ( {events, page}) => {

  const eventNodes = events.map((event, index) => {
    return <Event event={event} key={index} page = {page}/>
  })
  return (
    <div className='grid grid-cols-5 gap-4 ml-[10%] mr-[10%] mt-10 mb-10'>
     {eventNodes}
    </div>

  )
}

export default EventList