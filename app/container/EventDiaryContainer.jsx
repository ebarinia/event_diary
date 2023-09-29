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
    <EventCalendar/>
    </>
  )
}

export default EventDiaryContainer