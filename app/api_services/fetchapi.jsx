const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json?'
const api = '&apikey=0xvibNa31Az9U6GRL9EBMjZW0lfneAHq'
const dmaid = '&dmaId=607'
const size = '&size=20'

// const EventService = {

    export const getMusicEvents = () => {
        const classification = 'classificationName=music'
        return fetch(baseURL
        + classification
        + size
        + dmaid
        + api)
        .then(res => res.json())
        .then(data => data._embedded.events)
    } 

    export const getSportsEvents = () => {
        const classification = 'classificationName=sports'
        return fetch(baseURL
        + classification
        + dmaid
        + size
        + api)
        .then(res => res.json())
        .then(data => data._embedded.events)}

   export const getTheatreEvents =  () => {
        const classification = 'classificationName=theatre'
        return fetch(baseURL
        + classification
        + dmaid
        + size
        + api)
        .then(res => res.json())
        .then(data => data._embedded.events)}

    // const allEvents = [musicEvents, sportsEvents, theatreEvents]

//    Promise.all([musicEvents, sportsEvents, theatreEvents])

        
// export default EventService