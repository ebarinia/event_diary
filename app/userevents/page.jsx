'use client'
import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import EventDataService from '../api_services/fetchapi'
import EventList from '../components/allevents/EventList'

const UserEvents = () => {

  const [userEvents, setUserEvents] = useState([])
  const page = "userevents"

  useEffect (() => {
    EventDataService.getUserEvents()
    .then(data => setUserEvents(data))
  }, [])
  
  return (
    <>
      <Header/>
      <div className='text-center text-3xl font-bold mt-10'>List of events</div>
      <EventList events={userEvents} page={page}/>
    </>
  )
}

export default UserEvents