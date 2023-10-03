'use client'
import Header from '@/app/components/header/Header'
import React, {useState, useEffect} from 'react'
import EventDataService from '@/app/api_services/fetchapi'

const EventForm = ({params}) => {

  const [selectedEvent, setSelectedEvent] = useState (null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    EventDataService.getOneUserEvent(params.eventId)
    .then(sourceData => {
        setSelectedEvent(sourceData)
        setLoading(false)
    })
  }, [])

if (isLoading) return <p>React is shit</p>

return (
    <>
      <Header/>
      <p>{selectedEvent.name}</p>
    </>
  )
}

export default EventForm