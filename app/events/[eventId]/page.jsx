'use client'
import React, {useState, useEffect} from "react";
import EventDataService from '../../api_services/fetchapi'
import Header from "@/app/components/header/Header";
import Image from "next/image";
import Link from "next/link";
import Map from '../../components/googlemap/Map'
import { useRouter } from "next/navigation";

export default function EventPage({ params }) {

    const [selectedEvent, setSelectedEvent] = useState (null)
    const [isLoading, setLoading] = useState(true)
    const router = useRouter()
    let formattedDate

    useEffect(() => {
        EventDataService.getOneEvent(params.eventId)
        .then(sourceData => {
            setSelectedEvent(sourceData)
            setLoading(false)
        })
      }, [])

    const handleBooking = (() => {
        selectedEvent.booked = true;
        EventDataService.addOneUserEvent(selectedEvent)
        .then(()=>{router.push('/')})
    })
    
    const handleFavourite = (() => {
        selectedEvent.booked = false;
        EventDataService.addOneUserEvent(selectedEvent)
        .then(()=>{setSelectedEvent(selectedEvent)})
    })

    if (selectedEvent) {
    const eventDate = new Date(selectedEvent.dates.start.localDate);
    const options = {year: 'numeric', month: 'short', day: 'numeric' };
    formattedDate = eventDate.toLocaleDateString('en-UK', options);
    }

    if (isLoading) return <p>Loading</p>
    return (
        <>
        <Header/>
        <div className="flex mx-auto max-w-[60%] mt-[7%]">
            <div className="relative h-72 w-72">
                <Image 
                    className="shadow-md" 
                    src={selectedEvent.images[2].url} 
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="ml-4">
                <p className="text-3xl font-extrabold justify-center text-gray-400">{selectedEvent.name}</p>
                    <p className="text-gray-400">({selectedEvent.classifications[0].genre.name})</p>
                    <p className="text-gray-400"> Date: {formattedDate} at {selectedEvent.dates.start.localTime.split(':').slice(0, 2).join(':')}</p>
                    {selectedEvent.priceRanges && selectedEvent.priceRanges[0] && 
                    <p className="text-gray-400">Price: £{selectedEvent.priceRanges[0].max}</p>}
                    <p className="text-gray-400">Location: {selectedEvent._embedded.venues[0].name} - {selectedEvent._embedded.venues[0].city.name}</p>
                    <div className="flex mt-5">
                        <Link onClick={handleBooking} href={selectedEvent.url} target="blank" className="bg-orange-500 hover:bg-orange-600 transition text-white font-bold py-2 px-4 rounded">Book</Link>
                        <Link onClick={handleFavourite} href='*'><svg xmlns="http://www.w3.org/2000/svg" fill={!selectedEvent.booked ? "red" : "white"}  viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="ml-3 w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg></Link>
                    </div>
            </div>
        </div>
        <div className="mt-[5%] mx-auto max-w-[40%]">
            <Map address={`${selectedEvent._embedded.venues[0].name} ${selectedEvent._embedded.venues[0].city.name}`}/>
        </div>
        </>
    )
}



