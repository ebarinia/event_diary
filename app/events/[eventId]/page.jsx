'use client'
import React, {useState, useEffect} from "react";
import EventDataService from '../../api_services/fetchapi'
import Header from "@/app/components/header/Header";
import Image from "next/image";
import Link from "next/link";
import Map from '../../components/googlemap/Map'

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
        <>
        <Header/>
        <Link href='/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</Link>
        <div className="flex mx-auto max-w-[60%] mt-[7%] ">
            <div className="relative h-72 w-72">
                <Image 
                    className="shadow-md" 
                    src={selectedEvent.images[2].url} 
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="ml-4">
                <p className="text-3xl font-extrabold justify-center">{selectedEvent.name}</p>
                <div>
                    <p className="">{selectedEvent.classifications[0].segment.name}</p>
                    <p className="">{selectedEvent.dates.start.localDate} at {selectedEvent.dates.start.localTime}</p>
                    <p className="">Producter: {selectedEvent.promoter.name}</p>
                    <p className="">{selectedEvent.classifications[0].genre.name}</p>
                    {selectedEvent.priceRanges && selectedEvent.priceRanges[0] && 
                    <p className="">Price: {selectedEvent.priceRanges[0].max} GBP</p>} {/* conditional for the price */} 
                    <p className="">{selectedEvent._embedded.venues[0].name} - {selectedEvent._embedded.venues[0].city.name}</p>
                    <p className="text-xs">Please Note: {selectedEvent.pleaseNote}</p>
                    <div className="flex">
                    <Link href='*' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book</Link>
                    <Link href='*'><svg xmlns="http://www.w3.org/2000/svg" fill={selectedEvent.favourite ? "red" : "none"}  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-3 w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="mx-auto max-w-[20%]">
        <Map address={`${selectedEvent._embedded.venues[0].name} ${selectedEvent._embedded.venues[0].city.name}`}/>
        </div>
        {/* <Map address={`${selectedEvent._embedded.venues[0].name} ${selectedEvent._embedded.venues[0].city.name}`}/> */}
        </>
    )
}



