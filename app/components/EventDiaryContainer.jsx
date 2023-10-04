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
  const [calendarEvent, setCalendarEvent] = useState({})
  const page = "allevents"
  // const [selectedEvent, setSelectedEvent] = useState(null)
  const [isLoading, setLoading] = useState(true)

  
  useEffect(() => {
    EventDataService.getAllEvents()
    .then(sourceData => setEvents(sourceData))
    EventDataService.getUserEvents()
    .then(userData => {
      setUserEvents(userData)
      setLoading(false)
    })
  }, [])
  
  useEffect(()=> {
      setCalendarEvent(userEvents[0])
      setLoading(false)
  }, [userEvents])

  const updateCalendarDetail = (event) => {
    EventDataService.getOneUserEvent(event.id)
    .then(sourceData => {
        setCalendarEvent(sourceData)
    })
  }

  const updateBooking = (event) => {
    EventDataService.updateOneUserEvent(event)
    .then(sourceData => {
      setCalendarEvent(sourceData)
    })
  }

  if (isLoading) {return <p>React is shit</p>}
  else {
  return (
    <>
      <RecommendedEvent events={events}/>
      <div className='flex mx-auto max-w-[75%] mt-[10%] bg-slate-200 rounded-xl'>
        <div className='w-1/2'>
          <EventCalendar userEvents={userEvents} updateCalendarDetail = {updateCalendarDetail}/>
        </div>
        <div className='w-1/2 mt-[5%]'>
          <h2 className='text-2xl'>Your next event</h2>
          <EventCalendarDetail userEvents={userEvents} calendarEvent={calendarEvent} updateBooking={updateBooking}/>
        </div>
      </div>
      <EventList events={events} page = {page}/>
    </>
  )
  }
}

export default EventDiaryContainer







