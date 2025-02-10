import { useEffect, useState } from "react"
import EventCard from "../components/eventCard";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export default function EventInfo() {
    const [fetchedEvents, setFetchedEvents] = useState<any[]>([]);
    const [cookie, setCookie] = useState("");
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const date = searchParams.get("date");
    const start_time = searchParams.get("start_time");
    const location = searchParams.get("location")
    const img = searchParams.get("img");
    const price = searchParams.get("price")
    const apartment = searchParams.get("apartment");
    const region = searchParams.get("region");
    const venue = searchParams.get("venue");

    const getEvents = async () => {
        try {
            const response = await fetch("https://eventmgmt-backend.onrender.com/getAllEvents", {
                method: "GET",
                credentials: "include"
            })

            if (response.ok || response.status === 200) {
                const res = await response.json();
                setFetchedEvents(res.allEvents);
            }
        } catch (error) {
            console.log("error: ", error);
        }
    }

    useEffect(() => {
        const fetchedCookie = Cookies.get("authToken");
        if (fetchedCookie) {
            setCookie(fetchedCookie);
        }
        console.log("img: ", img);

        getEvents();
    }, [])

    const bookTicket = async () => {
        try {
            const response = await fetch("https://eventmgmt-backend.onrender.com/bookTicket", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cookie}`
                },
                body: JSON.stringify({ title, date, location }),
                credentials: "include"
            })

            if (response.ok || response.status === 200) {
                toast.success("Your Ticket is booked", {
                    hideProgressBar: true,
                    autoClose: 1500,
                    type: 'success',
                    position: 'top-center',
                });
            }

        } catch (error) {
            console.log("error: ", error);
            toast.error("Internal server error", {
                hideProgressBar: true,
                autoClose: 1500,
                type: 'error',
                position: 'top-center',
            });
        }
    }

    return (
        <>
            {/* Main section */}
            <section className="mt-16 bg-gray-50 w-screen h-full max-md:h-full max-md:w-screen overflow-x-hidden">

                {/* <!-- Upper Section --> */}
                <section className="w-full border-b-2">
                    {/* <!-- Main Upper section --> */}
                    <section className="w-5/6 mx-auto">
                        <div className="relative mx-auto my-10 max-md:mx-auto h-[28rem] max-[428px]:h-[10rem] max-[428px]:mt-16 max-lg:mt-20 max-lg:h-[18rem] rounded-2xl overflow-hidden">
                            <img src={`https://eventmgmt-backend.onrender.com/uploads/${img}`} alt="EventImg"
                                className="rounded-xl w-3/4 h-full mx-auto absolute inset-0 z-30" />
                        </div>

                        <div className="flex justify-between items-center max-[1200px]:block h-auto mx-auto">
                            <div>
                                <h2 className="googlefont text-blue-950 font-semibold text-xl max-md:text-sm"> {date} </h2>
                                <h1
                                    className="googlefont text-indigo-950 font-extrabold text-5xl w-[40rem] my-4 max-md:text-lg max-[1200px]:w-full max-[1200px]:text-4xl">
                                    {title} - {location} </h1>
                                <h4 className="text-xl font-bold text-indigo-950">
                                    {description}
                                </h4>
                                <h4 className="text-xl font-bold text-indigo-950">
                                    { }
                                </h4>
                                <p className="googlefont text-blue-950 font-medium my-8 max-md:text-sm"> Join us in {location} on {date}, at the {apartment} </p>
                            </div>

                            <div className="max-md:mx-auto max-[1200px]:my-5 max-[1200px]:w-fit">
                                <div className="w-80 h-fit max-md:w-60 rounded-xl px-4 py-4 bg-white border text-center">
                                    <p className="googlefont font-medium text-xl"> {!price ? "Free" : "From INR"} {price} </p>
                                    <button className="googlefont bg-orange-600 w-full max-md:w-36 py-2 mt-6 text-white rounded-md cursor-pointer" onClick={bookTicket}> Get Tickets </button>
                                </div>
                            </div>
                        </div>

                        <div className="h-fit">
                            <h3 className="googlefont text-blue-950 font-bold text-2xl max-md:text-lg"> Date and time </h3>
                            <div className="flex justify-start items-center gap-4 my-2">
                                <img src="https://cdn-icons-png.freepik.com/256/15999/15999772.png?uid=R156296459&ga=GA1.1.823769688.1686565282&semt=ais_hybrid"
                                    alt="Calendar" className="w-5 h-5" />
                                <p className="googlefont font-medium text-blue-950 text-sm"> date · {start_time} IST </p>
                            </div>
                        </div>

                        <div className=" h-auto mx-auto my-10">
                            <h3 className="googlefont text-blue-950 font-bold text-2xl max-md:text-lg"> Location </h3>
                            <div className="flex justify-start items-start gap-4 my-2">
                                <img src="https://cdn-icons-png.freepik.com/256/11376/11376553.png?uid=R156296459&ga=GA1.1.823769688.1686565282&semt=ais_hybrid"
                                    alt="Calendar" className="w-4 h-5" />

                                <div>
                                    <p className="googlefont font-medium text-blue-950 max-md:text-sm"> {apartment} {location} </p>
                                    <p className="googlefont text-xs my-2 text-blue-950"> {region} - {venue} </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                {/* <!-- Lower Section --> */}

                <section className="w-full mb-16">
                    {/* <!-- Main Lower section --> */}
                    <section className="w-5/6 mx-auto">
                        <h1 className="text-blue-950 text-2xl font-bold my-10"> Other events you may like </h1>

                        <div className={`flex flex-wrap ${fetchedEvents.length >= 3 ? "justify-between" : "justify-start"} gap-8 max-[537px]:justify-center`}>
                            {
                                fetchedEvents.map((event, index) => (
                                    index < 8 ?
                                        <EventCard title={event.title} description={event.description} date={event.date} start_time={event.start_time} location={event.location} price={event.price} img={event.image} apartment={event.apartment} venue={event.venue} region={event.region} />
                                        : ""
                                ))
                            }

                        </div>
                    </section>
                </section >

            </section >
        </>
    )
}
