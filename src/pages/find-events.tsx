import { useEffect, useState } from "react"
import EventCard from "../components/eventCard";
import useGetEvents from "../services/eventServices";

export default function FindEvents() {
    const [delhiEvents, setDelhiEvents] = useState<any[]>([]);
    const [onlineEvents, setOnlineEvents] = useState<any[]>([]);
    const [festivalEvents, setFestivalEvents] = useState<any[]>([]);
    const [classesEvents, setClassesEvents] = useState<any[]>([]);

    const { getDelhiEvents, getClassEvents, getFestivalEvents, getOnlineEvents } = useGetEvents({ setDelhiEvents, setClassesEvents, setFestivalEvents, setOnlineEvents });

    useEffect(() => {
        getDelhiEvents();
        getFestivalEvents();
        getOnlineEvents();
        getClassEvents();
    }, [])

    return (
        <>
            <section className="bg-white">

                <section className="googlefont border-b-2 bg-white max-md:h-[14rem]">
                    <div className="w-5/6 h-96 relative mx-auto mt-24 mb-16 overflow-hidden rounded-xl">
                        <img src="https://cdn.evbstatic.com/s3-build/fe/build/images/39ac4703250a1d0fb15911c2c5f10174-generic_1_desktop.webp"
                            alt="eventImg" className="rounded-xl w-full h-full object-cover max-md:h-52" />

                        <div
                            className="text-white absolute inset-0 w-fit px-10 flex flex-col justify-center bg-gradient-to-r from-gray-700 to-white/0 rounded-xl max-md:h-52">
                            <p className="font-bold text-3xl my-2 max-md:text-sm"> Best events in </p>
                            <h2 className="text-5xl font-extrabold max-md:text-xl"> Delhi </h2>
                            <p className="font-medium w-[33rem] h-16 overflow-y-scroll text-sm my-6 max-md:w-32 max-md:text-xs">
                                Looking for something to do in Delhi? Whether you're a local, new in town or just cruising through
                                we've
                                got loads of great tips and events. You can explore by location, what's popular, our top picks, free
                                stuff... you got this. Ready?
                            </p>
                            <button
                                className="bg-blue-600 font-medium text-sm w-28 h-10 rounded-full flex justify-center items-center gap-2 max-md:text-xs max-md:w-20 max-md:h-8 max-md:mb-2">
                                <img src="https://cdn-icons-png.freepik.com/256/402/402326.png?uid=R156296459&ga=GA1.1.823769688.1686565282&semt=ais_hybrid"
                                    alt="location" className="w-5 h-5" />
                                <p> Delhi </p>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-10 bg-gray-100">
                    {/* <div className="w-5/6 h-[28rem] mx-auto mt-10 bg-gradient-to-b from-gray-300 to-white/30 mb-10 rounded-xl animate-pulse"></div> */}

                    <div className="w-5/6 mx-auto">
                        <h1 className="text-2xl text-gray-600 font-bold mb-10"> Popular in Delhi </h1>

                        {
                            delhiEvents.length > 0 ?
                                <div
                                    className={`flex flex-wrap ${delhiEvents.length >= 3 ? "justify-between" : " justify-start"} gap-8 max-[537px]:justify-center`}>
                                    {
                                        delhiEvents.map((event, index) => (
                                            index < 8 ?
                                                <EventCard img={event.image} title={event.title} description={event.description} date={event.date} start_time={event.start_time} location={event.location} price={event.price} apartment={event.apartment} venue={event.venue} region={event.region} /> : null
                                        ))
                                    }
                                </div> :
                                <div className="mx-auto mt-10 mb-20 w-full">
                                    <img src="https://cdn-icons-png.freepik.com/256/9122/9122832.png?uid=R156296459&ga=GA1.1.823769688.1686565282&semt=ais_hybrid"
                                        alt="ticket" className="w-36 h-36 mx-auto max-md:w-24 max-md:h-24" />
                                    <p className="text-indigo-950 text-2xl font-bold my-8 text-center max-md:text-sm"> No available Events
                                    </p>
                                </div>
                        }
                    </div>

                    <div className="w-5/6 mx-auto mt-16">
                        <h1 className="text-2xl text-gray-600 font-bold mb-10"> Online Events </h1>

                        {
                            onlineEvents.length > 0 ?
                                <div
                                    className={`flex flex-wrap ${onlineEvents.length >= 3 ? "justify-between" : " justify-start"} gap-8 max-[537px]:justify-center`}>
                                    {
                                        onlineEvents.map((event, index) => (
                                            index < 8 ?
                                                <EventCard img={event.image} title={event.title} description={event.description} date={event.date} start_time={event.start_time} location={event.location} price={event.price} apartment={event.apartment} venue={event.venue} region={event.region} /> : null
                                        ))
                                    }
                                </div> :
                                <div className="mx-auto mt-10 mb-20 w-full">
                                    <img src="https://cdn-icons-png.freepik.com/256/9122/9122832.png?uid=R156296459&ga=GA1.1.823769688.1686565282&semt=ais_hybrid"
                                        alt="ticket" className="w-36 h-36 mx-auto max-md:w-24 max-md:h-24" />
                                    <p className="text-indigo-950 text-2xl font-bold my-8 text-center max-md:text-sm"> No available Events
                                    </p>
                                </div>
                        }
                    </div>

                    <div className="w-5/6 mx-auto mt-16">
                        <h1 className="text-2xl text-gray-600 font-bold mb-10"> Festivals and Fairs Events </h1>

                        {
                            festivalEvents.length > 0 ?
                                <div
                                    className={`flex flex-wrap ${festivalEvents.length >= 3 ? "justify-between" : " justify-start"} gap-8 max-[537px]:justify-center`}>
                                    {
                                        festivalEvents.map((event, index) => (
                                            index < 8 ?
                                                <EventCard img={event.image} title={event.title} description={event.description} date={event.date} start_time={event.start_time} location={event.location} price={event.price} apartment={event.apartment} venue={event.venue} region={event.region} /> : null
                                        ))
                                    }
                                </div> :
                                <div className="mx-auto mt-10 mb-20 w-full">
                                    <img src="https://cdn-icons-png.freepik.com/256/9122/9122832.png?uid=R156296459&ga=GA1.1.823769688.1686565282&semt=ais_hybrid"
                                        alt="ticket" className="w-36 h-36 mx-auto max-md:w-24 max-md:h-24" />
                                    <p className="text-indigo-950 text-2xl font-bold my-8 text-center max-md:text-sm"> No available Events
                                    </p>
                                </div>
                        }
                    </div >

                    <div className="w-5/6 mx-auto mt-16">
                        <h1 className="text-2xl text-gray-600 font-bold mb-10"> Classes and workshops Events </h1>

                        {
                            classesEvents.length > 0 ?
                                <div
                                    className={`flex flex-wrap ${classesEvents.length >= 3 ? "justify-between" : " justify-start"} gap-8 max-[537px]:justify-center`}>
                                    {
                                        classesEvents.map((event, index) => (
                                            index < 8 ?
                                                <EventCard img={event.image} title={event.title} description={event.description} date={event.date} start_time={event.start_time} location={event.location} price={event.price} apartment={event.apartment} venue={event.venue} region={event.region} /> : null
                                        ))
                                    }
                                </div> :
                                <div className="mx-auto mt-10 mb-20 w-full">
                                    <img src="https://cdn-icons-png.freepik.com/256/9122/9122832.png?uid=R156296459&ga=GA1.1.823769688.1686565282&semt=ais_hybrid"
                                        alt="ticket" className="w-36 h-36 mx-auto max-md:w-24 max-md:h-24" />
                                    <p className="text-indigo-950 text-2xl font-bold my-8 text-center max-md:text-sm"> No available Events
                                    </p>
                                </div>
                        }
                    </div >

                </section >

            </section >
        </>
    )
}
