'use client'
import React, {useEffect} from "react"
import Image from "next/image"
import { Rating, Input, Textarea } from "@material-tailwind/react"

const UserEventForm = ( {event, overallRated, venueRated, pricesRated, atmosphereRated, oneLinerRated, 
    setOverallRated, setVenueRated, setPricesRated, setAtmosphereRated, setOneLinerRated, rateEvent} ) => {


    // useEffect(() => {
    //     setOverallRated(event.overallRated)
    //     setVenueRated(venueRated)
    //     setPricesRated(pricesRated)
    //     setAtmosphereRated(atmosphereRated)
    //     setOneLinerRated(oneLinerRated)
    //     }
    //     , [])

    const onRatedSubmit = () => {
        const ratedEvent = {
            id: event.id,
            booked: event.booked,
            overall: overallRated,
            venue: venueRated,
            prices: pricesRated,
            atmosphere: atmosphereRated,
            oneliner: oneLinerRated
        }
        rateEvent(ratedEvent)
    }

    return (
    
        <>
        <div className='max-w-[45%] mt-[5%] bg-slate-200 rounded-lg mx-auto my-auto'>
            <div className="flex flex-col rounded-lg 
                            bg-white shadow-2xl 
                            dark:bg-green-700 max-w-[100%] md:flex-row
                            ml-[5%] mb-[3%]">
                <Image className='h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' 
                    src={event.images[2].url} alt="Event" width={300} height={300}
                />

                <div className="flex flex-col justify-start p-6">
                    <h5
                        className="mb-1 text-lg font-medium text-neutral-900 dark:text-neutral-50">
                        {event.name}
                    </h5>
                    <p className="mb-4 text-base text-neutral-500 dark:text-neutral-200">
                        {event._embedded.venues[0].name} - {event._embedded.venues[0].city.name}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-300">
                        {event.dates.start.localDate} {event.dates.start.localTime}
                    </p>
                </div>
            </div>
            
            <div className='mt-[1%] bg-slate-200 rounded-lg'>
    
                <div className="md:flex md:items-center mb-5">
                    <div className="md:w-1/3">
                    <label className="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4" for="overall-rating">
                        Overall rating:
                    </label>
                    </div>
                    <div className="rating">
                        <Rating unratedColor="orange" ratedColor="orange" value ='' onChange={(value) => setOverallRated(value)}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4" for="venue-rating">
                        Venue:
                    </label>
                    </div>
                    <div className="rating">
                    <Rating unratedColor="orange" ratedColor="orange" value = '' onChange={(value) => setVenueRated(value)}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Prices:
                    </label>
                    </div>
                    <div className="rating">
                    <Rating unratedColor="orange" ratedColor="orange" value = '' onChange={(value) => setPricesRated(value)}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Atmosphere:
                    </label>
                    </div>
                    <div className="rating">
                        <Rating unratedColor="orange" ratedColor="orange" value = '' onChange={(value) => setAtmosphereRated(value)}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    
                    </label>
                    </div>
                    <div className="md:w-2/3">
                        <Textarea className="text-white" label = "how did it go?" size="lg" onChange={(event) => setOneLinerRated(event.target.value)}/>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                    <button className="shadow bg-orange-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                        onClick={onRatedSubmit}> Submit
                    </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    
    )

}

export default UserEventForm