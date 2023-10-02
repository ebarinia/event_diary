const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json?'
const baseHost = 'http://localhost:3000/api/events/'
const baseCalendarHost = 'http://localhost:3000/api/user_events/'
const api = '&apikey=0xvibNa31Az9U6GRL9EBMjZW0lfneAHq'
const dmaid = '&dmaId=607'
const size = '&size=60'
const classification = '&classificationName=[music, sports, theatre]'

const EventDataService = {
    async getAllEvents() {
        const res = await fetch(baseURL
            + classification
            + size
            + dmaid
            + api)
        const data = await res.json()
        return data._embedded.events
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
        const res = await fetch(baseCalendarHost);
        const data = await res.json();
        return data
    }
}
export default EventDataService