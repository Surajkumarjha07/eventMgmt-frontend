import { useEffect, useState } from "react"
import EventCard from "../components/eventCard";
import { useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";

export default function SearchEventPage() {
    const [fetchedEvents, setFetchedEvents] = useState<any[]>([]);
    const [cookie, setCookie] = useState("");

    const [searchParams] = useSearchParams();

    const getEventsByCategory = async (category: string) => {
        const response = await fetch(`http://localhost:4000/eventsByCategory?category=${category}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${cookie}`
            },
            credentials: "include"
        })

        if (response.ok || response.status === 200) {
            const res = await response.json();
            setFetchedEvents(res.allEvents);
        }
    }

    useEffect(() => {
        const fetchedCookie = Cookies.get("authToken");
        const category = searchParams.get("category");
        if (fetchedCookie) {
            setCookie(fetchedCookie);
        }

        if (category) {
            getEventsByCategory(category);
        }
    }, [])


    return (
        <>
            <section className="mt-20 w-full h-screen">
                <h1 className="text-4xl font-extrabold text-indigo-950 text-center my-10 underline max-md:text-xl max-md:mt-14 max-md:mb-7">
                    {fetchedEvents.length > 0 ? 'Your Searched Events!' : 'Sorry for now!'}
                </h1>

                <div className="w-5/6 mx-auto mt-16">

                    {
                        fetchedEvents.length > 0 ?

                            <div
                                className={`flex flex-wrap ${fetchedEvents.length >= 3 ? "justify-between" : "justify-start"} gap-8 max-[537px]:justify-center`}>

                                {
                                    fetchedEvents.map((event, index) => (
                                        index < 8 ?
                                            <EventCard img={event.image} title={event.title} description={event.description} date={event.date} start_time={event.start_time} location={event.location} price={event.price} apartment={event.apartment} venue={event.venue} region={event.region} />
                                            : ""
                                    ))
                                }

                            </div>
                            :
                            <div className="mx-auto mt-10 mb-20 w-full">
                                <img src="https://cdn-icons-png.freepik.com/256/9122/9122832.png?uid=R156296459&ga=GA1.1.823769688.1686565282&semt=ais_hybrid"
                                    alt="ticket" className="w-36 h-36 mx-auto max-md:w-24 max-md:h-24" />
                                <p className="text-indigo-950 text-2xl font-bold my-8 text-center max-md:text-sm"> No available Events </p>
                            </div>
                    }

                </div >

            </section >
        </>
    )
}
