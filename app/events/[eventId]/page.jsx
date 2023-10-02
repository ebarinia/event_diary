'use client'
import React, {useState, useEffect} from "react";
import EventDataService from '../../api_services/fetchapi'


export default function EventPage({ params }) {

    const [selectedEvent, setSelectedEvent] = useState (null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        EventDataService.getOneEvent(params.eventId)
        .then(sourceData => {
            setSelectedEvent(sourceData)
            setLoading(false)
        })
      }, [])

    if (isLoading) return <p>React is shit</p>
    return (
        <p>{selectedEvent.name}</p>
        )




    
}

