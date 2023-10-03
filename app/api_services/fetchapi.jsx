const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json?'
const baseEventURL = 'https://app.ticketmaster.com/discovery/v2/events/'
const baseUserHost = 'http://localhost:3000/api/user_events/'
const api = 'apikey=0xvibNa31Az9U6GRL9EBMjZW0lfneAHq'
const dmaid = '&dmaId=607'
const size = '&size=60'
const classification = '&classificationName=[music, sports, theatre]'

const EventDataService = {
    async getAllEvents() {
        const res = await fetch(baseURL
            + classification
            + size
            + dmaid
            + '&' + api)
        const data = await res.json()
        return data._embedded.events
    },

    async getOneEvent(eventId) {
        const res = await fetch(baseEventURL + eventId + ".json?" + api)
        const data = await res.json()
        return data
    },

    // Functions for the DB below
    async getShortlistedEvents() {
        const res = await fetch(baseHost);
        const data = await res.json();
        return data
    },
    async deleteDatabaseEvent(id) {
        const res = await fetch(baseURL + id, {
            method: 'DELETE'
        })
        return res.status;
    },
    async getUserEvents() {
        const res = await fetch(baseUserHost);
        const data = await res.json();
        return data
    },

    async getOneUserEvent(eventId) {
        const res = await fetch(baseUserHost + eventId);
        const data = await res.json();
        return data
    }

}
export default EventDataService