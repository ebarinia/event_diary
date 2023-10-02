import Header from '@/app/components/header/Header'
import React from 'react'

const EventForm = ({params}) => {

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

  return (
    <>
    <Header/>
    <div>User Event Form to be finished</div>
    </>
  )
}

export default EventForm