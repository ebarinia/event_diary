'use client'
import React, { useState } from 'react'
import RecommendedEvent from '../components/carousel/RecommendedEvent'
import EventCalendar from '../components/calendar/EventCalendar'
import Header from '../components/header/Header'
import EventList from '../components/allevents/EventList'



const EventDiaryContainer = () => {

  return (
    <>
    <RecommendedEvent/>
    <div className='w-1/2'>
    <EventCalendar/>
    </div>
    <EventList/>
    </>
  )
}

export default EventDiaryContainer