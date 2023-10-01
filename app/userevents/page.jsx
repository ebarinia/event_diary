'use client'
import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import EventDataService from '../api_services/fetchapi'

const UserEvents = () => {

  const [shortlistedEvents, setShortlistedEvents] = useState([])

  useEffect (() => {
    EventDataService.getShortlistedEvents()
    .then(data => setShortlistedEvents(data))
  }, [])
  
  return (
    <>
    <Header/>
    <div className='text-center text-3xl font-bold mt-10'>List of events</div>
    </>
  )
}

export default UserEvents