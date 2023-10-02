'use client'
import React, { useEffect, useState } from 'react'
import RecommendedEvent from '../components/carousel/RecommendedEvent'
import EventCalendar from '../components/calendar/EventCalendar'
import EventList from '../components/allevents/EventList'
import EventDataService from '../api_services/fetchapi'
import EventCalendarDetail from '../components/calendar/EventCalendarDetail'

const EventDiaryContainer = () => {

  const [events, setEvents] = useState (null)
  const [userEvents, setUserEvents] = useState (null)
  const [userEventsIsLoading, setUserEventsLoading] = useState(true)
  // const [calendarEvent, setCalendarEvent] = useState(null)

  useEffect(() => {
    const allEvents = [
      EventDataService.getMusicEvents(), 
      EventDataService.getSportsEvents(), 
      EventDataService.getTheatreEvents()
    ]
    Promise.all(allEvents)
    .then(data => data.flat())
    .then(sourceData => setEvents(sourceData))

    EventDataService.getUserEvents()
    .then(userData => {
      setUserEvents(userData)
      setUserEventsLoading(false)
      // setCalendarEvent(userEvents[0])
    })
    
  }, [])

  // useEffect(() => {
  //     if (userEvents) {
  //       setCalendarEvent(userEvents[0])
  //     }
  // }, [userEvents])

  // console.log(userEvents[0])
  
  if (userEventsIsLoading) return <p>React is a piece of shit...</p>
  if (!userEvents) return <p>No events marked...</p>
    
  return (
    <>
      <RecommendedEvent events={events}/>
      <div className='flex ml-[15%] mr-[15%]'>
      <div className='w-1/2'>
        <EventCalendar userEvents={userEvents}/>
      </div>
      <div className='w-1/2'>
        <EventCalendarDetail userEvents={userEvents}/>
      </div>
      </div>
      <EventList events={events}/>
    </>
  )
}

export default EventDiaryContainer

// example.com/events.json?classificationName[]=music&classificationName[]=sport