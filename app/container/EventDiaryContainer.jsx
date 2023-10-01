'use client'
import React, { useEffect, useState } from 'react'
import RecommendedEvent from '../components/carousel/RecommendedEvent'
import EventCalendar from '../components/calendar/EventCalendar'
import EventList from '../components/allevents/EventList'
import EventDataService from '../api_services/fetchapi'


const EventDiaryContainer = () => {

  const [events, setEvents] = useState ([])

  useEffect(() => {
    const allEvents = [
      EventDataService.getMusicEvents(), 
      EventDataService.getSportsEvents(), 
      EventDataService.getTheatreEvents()
    ]
    Promise.all(allEvents)
    .then(data => data.flat())
    .then(sourceData => setEvents(sourceData))
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