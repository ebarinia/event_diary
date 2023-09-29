'use client'
import React, { useState } from 'react'
import RecommendedEvent from '../components/carousel/RecommendedEvent'
import EventCalendar from '../components/calendar/EventCalendar'
import Header from '../components/header/Header'


const EventDiaryContainer = () => {

  return (
    <>
    <Header/>
    <RecommendedEvent/>
    <div className='w-1/2 float-left'>
    <EventCalendar/>
    </div>
    </>
  )
}

export default EventDiaryContainer