import { useEffect, useState } from "react"

export default function EventList(){
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    const [events, setEvents] = useState(["No events found"])

    useEffect(() => {
        async function fetchEvents(){
            try {
                const response = await fetch(`https://staging.national-ice-centre.com/api/events/read?token=${apiKey}`)
                const jsonBody = await response.json()
                setEvents(jsonBody.events)
            } catch (error) {
                console.error(error)
            }
            
        }
        fetchEvents()
    }, [])

    return (
        <>
        <h1>hi event list</h1>
        <ul>{events.map((event, i) => <li key={i}>{event.name}</li>)}</ul>
        </>
        )
}