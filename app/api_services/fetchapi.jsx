const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json?'
const api = '&apikey=0xvibNa31Az9U6GRL9EBMjZW0lfneAHq'
const dmaid = '&dmaId=607'
const size = '&size=20'

const EventDataService = {

    async getMusicEvents() {
        const classification = 'classificationName=music'
        const res = await fetch(baseURL
            + classification
            + size
            + dmaid
            + api)
        const data = await res.json()
        return data._embedded.events
    }, 

    async getSportsEvents() {
        const classification = 'classificationName=sports'
        const res = await fetch(baseURL
            + classification
            + dmaid
            + size
            + api)
        const data = await res.json()
        return data._embedded.events
    },

   async getTheatreEvents() {
        const classification = 'classificationName=theatre'
        const res = await fetch(baseURL
           + classification
           + dmaid
           + size
           + api)
       const data = await res.json()
       return data._embedded.events
    }

}

export default EventDataService