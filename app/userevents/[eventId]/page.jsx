'use client'
import Header from '@/app/components/header/Header'
import React, {useState, useEffect} from 'react'
import EventDataService from '@/app/api_services/fetchapi'
import UserEventForm from '@/app/components/userEvents/UserEventForm'
// import { useRouter } from 'next/navigation'

const EventForm = ({params}) => {

  const [selectedEvent, setSelectedEvent] = useState (null)
  const [isLoading, setLoading] = useState(true)
  const [overallRated, setOverallRated] = useState (1)
  const [venueRated, setVenueRated] = useState (1)
  const [pricesRated, setPricesRated] = useState (1)
  const [atmosphereRated, setAtmosphereRated] = useState (1)
  const [oneLinerRated, setOneLinerRated] = useState ("No comment")
  // const router = useRouter()

  useEffect(() => {
    EventDataService.getOneUserEvent(params.eventId)
    .then(sourceData => {
        setSelectedEvent(sourceData)
        setLoading(false)
    })
  }, [])

  const rateEvent = (ratedEvent) => {
    EventDataService.updateEventReview(ratedEvent)
    // .then(() => {router.push('/userevents')})
  }

if (isLoading) return <p>React is shit</p>

return (
    <>
      <Header/>
        <UserEventForm event={selectedEvent} overallRated = {overallRated} venueRated={venueRated} 
        pricesRated={pricesRated} atmosphereRated={atmosphereRated} oneLinerRated={oneLinerRated} 
        setOverallRated = {setOverallRated} setVenueRated = {setVenueRated} setPricesRated = {setPricesRated} setAtmosphereRated = {setAtmosphereRated} 
        setOneLinerRated = {setOneLinerRated} rateEvent = {rateEvent}/>
    </>
  )

}

export default EventForm