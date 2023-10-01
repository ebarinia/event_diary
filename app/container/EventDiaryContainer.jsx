'use client'
import React, { useEffect, useState } from 'react'
import RecommendedEvent from '../components/carousel/RecommendedEvent'
import EventCalendar from '../components/calendar/EventCalendar'
import EventList from '../components/allevents/EventList'
import EventService from '../api_services/fetchapi'
import { getMusicEvents, getSportsEvents, getTheatreEvents } from '../api_services/fetchapi'


const EventDiaryContainer = () => {

  const [events, setEvents] = useState ([])

  useEffect(() => {
    const allEvents = [getTheatreEvents(), getMusicEvents(), getSportsEvents()]
    
    Promise.all(allEvents)
    
    .then(data => data[0].concat(data[1]).concat(data[2]))
    .then(moreData => setEvents(moreData))
  }, [])

  return (
    <>
    <RecommendedEvent events={events}/>
    <div className='w-1/2'>
    <EventCalendar/>
    </div>
    <EventList events={events}/>
    </>
  )
}

export default EventDiaryContainer