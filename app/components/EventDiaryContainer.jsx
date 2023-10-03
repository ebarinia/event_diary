'use client'
import React, { useEffect, useState } from 'react'
import RecommendedEvent from './carousel/RecommendedEvent'
import EventCalendar from './calendar/EventCalendar'
import EventList from './allevents/EventList'
import EventDataService from '../api_services/fetchapi'
import EventCalendarDetail from './calendar/EventCalendarDetail'

const EventDiaryContainer = () => {
  const [events, setEvents] = useState ([])
  const [userEvents, setUserEvents] = useState ([])
  const [calendarEvent, setCalendarEvent] = useState([])
  const page = "allevents"
  // const [selectedEvent, setSelectedEvent] = useState(null)
  
  useEffect(() => {
    EventDataService.getAllEvents()
    .then(sourceData => setEvents(sourceData))
    EventDataService.getUserEvents()
    .then(userData => {
      setUserEvents(userData)
    })
  }, [])
  
  useEffect(()=> {
      setCalendarEvent(userEvents[0])
  }, [userEvents])

  // const handleClickEvent = (event) => {  
  //     setSelectedEvent(event)

  // }
  
  
  return (
    <>
      <RecommendedEvent events={events}/>
      <div className='flex mx-auto max-w-[75%]'>
      <div className='w-1/2'>
        <EventCalendar userEvents={userEvents}/>
      </div>
      <div className='w-1/2'>
        <EventCalendarDetail userEvents={userEvents} calendarEvent={calendarEvent}/>
      </div>
      </div>
      <EventList events={events} page = {page}/>
    </>
  )

}

export default EventDiaryContainer







