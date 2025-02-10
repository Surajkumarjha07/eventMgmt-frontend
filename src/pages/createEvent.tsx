import { useEffect, useState } from "react"
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export default function CreateEventPage() {
    const [cookie, setCookie] = useState("");

    useEffect(() => {
        const fetchedCookie = Cookies.get("authToken");
        if (fetchedCookie) {
            setCookie(fetchedCookie);
        }
    }, [])

    const Events = [
        { text: 'Music Events', img: 'https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/2023/organizer/categories/c-eventbrite--il__music.webp' },

        { text: 'Corporate Events', img: 'https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/2023/organizer/categories/c-eventbrite--il__corporate-events.webp' },

        { text: 'Online Events', img: 'https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/2023/organizer/categories/c-eventbrite--il__online-events.webp' },

        { text: 'Food & Beverages Events', img: 'https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/2023/organizer/categories/c-eventbrite--il__food-beverage.webp' },

        { text: 'Performing Arts Events', img: 'https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/2023/organizer/categories/c-eventbrite--il__performing-arts.webp' },

        { text: 'Classes & Workshops Events', img: 'https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/2023/organizer/categories/c-eventbrite--il__classess-workshops.webp' },

        { text: 'Retail Events', img: 'https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/2023/organizer/categories/c-eventbrite--il__retail.webp' },

        { text: 'Non-Profit Events', img: 'https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/2023/organizer/categories/c-eventbrite--il__charity-causes.webp' },

        { text: 'Festivals & Fairs Events', img: 'https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/2023/organizer/categories/c-eventbrite--il__festivals-fairs.webp' },
    ]

    return (
        <>
            {/* main section */}
            <section className="mt-14">

                <section className="w-full h-full">
                    <div className="bg-indigo-950 h-auto w-full text-white text-center py-8">
                        <h1 className="text-5xl font-bold max-md:text-lg max-md:mt-5"> Where Event Organizers Grow </h1>
                        <p className="font-bold text-lg my-4 mt-8 max-md:text-sm"> The all-in-one ticketing and discovery platform trusted by millions
                            of
                            organizers and attendees worldwide </p>

                        <Link to={cookie ? "/event-form" : "/"}>
                            <button className="bg-orange-700 w-80 py-2 rounded-md font-bold text-lg max-md:text-sm max-md:w-48 cursor-pointer">
                                {cookie ? 'Create your event' : 'Get started for free'}
                            </button>
                        </Link>
                    </div>
                </section>

                <section className="text-center text-indigo-950 my-10 mx-auto">
                    <h1 className="text-5xl font-bold max-md:text-lg"> Event hosting made easy </h1>
                    <p className="text-xl  font-semibold my-4 max-md:text-sm"> Easily create and manage events on a platform that
                        attendees
                        love and trust </p>

                    <div className="flex justify-center items-center w-full max-md:px-4 max-md:text-center">
                        <div className="w-1/2 max-md:w-full">
                            <div className="w-72 text-start my-6 mx-auto max-md:text-center">
                                <img src="https://eventbrite-s3.s3.amazonaws.com/marketing/landingpages/assets/2023/organizer/icons/svg/organizer-icon__orange--sell-tickets.svg"
                                    alt="ticket" className="max-md:mx-auto" />
                                <h2 className="font-bold text-xl my-4 max-md:text-sm"> Event Ticketing </h2>
                                <p className="text-sm max-md:text-xs"> Sell more tickets with customizable event pages and a seamless
                                    checkout experience for attendees on a trusted platform </p>
                            </div>

                            <div className="w-72 text-start my-6 mx-auto max-md:text-center">
                                <img src="https://cdn.evbstatic.com/s3-s3/marketing/landingpages/assets/2023/organizer/icons/svg/organizer-icon__orange--reports.svg"
                                    alt="report" className="max-md:mx-auto" />
                                <h2 className="font-bold text-xl my-4 max-md:text-sm"> Reporting & Analysis </h2>
                                <p className="text-sm max-md:text-xs"> Learn more about your buyers and discover where sales are coming
                                    from with real-time analytics </p>
                            </div>

                            <div className="w-72 text-start my-6 mx-auto max-md:text-center">
                                <img src="https://eventbrite-s3.s3.amazonaws.com/marketing/landingpages/assets/2023/organizer/icons/svg/organizer-icon__orange--organizer-app.svg"
                                    alt="organizer" className="max-md:mx-auto" />
                                <h2 className="font-bold text-xl my-4 max-md:text-sm"> Organizer App </h2>
                                <p className="text-sm max-md:text-xs"> Check guests in, sell tickets at the door, and track data with
                                    our
                                    easy-to-use Eventbrite Organizer App </p>
                            </div>
                        </div>

                        <div className="w-1/2 max-md:hidden">
                            <img src="https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/2023/organizer/organizer--eventbrite--host-events--001.webp"
                                alt="mobile" className="w-4/5" />
                        </div>
                    </div>

                </section>

                <section className="text-center text-white my-10 py-10 mx-auto bg-indigo-950">
                    <h1 className="text-5xl font-bold max-md:text-lg"> Reach the right people </h1>
                    <p className="text-xl font-semibold my-4 max-md:text-sm"> Grow your community on a marketplace where millions of people look for
                        things to do. </p>

                    <div className="flex justify-center items-center w-full">
                        <div className="w-1/2 max-md:w-full">
                            <div className="w-72 text-start my-6 mx-auto max-md:text-center">
                                <img src="https://eventbrite-s3.s3.amazonaws.com/marketing/landingpages/assets/2023/organizer/icons/svg/organizer-icon__purple--attendee.svg"
                                    alt="ticket" className="max-md:mx-auto" />
                                <h2 className="font-bold text-xl my-4 max-md:text-sm"> Attendee Discovery </h2>
                                <p className="text-sm max-md:text-xs"> Personalized recommendations are tailored to attendees' interests and location,
                                    matching them with events they&apos;d be most interested in attending </p>
                            </div>

                            <div className="w-72 text-start my-6 mx-auto max-md:text-center">
                                <img src="https://eventbrite-s3.s3.amazonaws.com/marketing/landingpages/assets/2023/organizer/icons/svg/organizer-icon__purple--eventbrite-ads.svg"
                                    alt="report" className="max-md:mx-auto" />
                                <h2 className="font-bold text-xl my-4 max-md:text-sm"> EventStream Ads </h2>
                                <p className="text-sm max-md:text-xs"> Promote your event across Eventbrite and get 14x more visibility on our
                                    homepage, related events, search results, and more </p>
                            </div>

                            <div className="w-72 text-start my-6 mx-auto max-md:text-center">
                                <img src="https://eventbrite-s3.s3.amazonaws.com/marketing/landingpages/assets/2023/organizer/icons/svg/organizer-icon__purple--marketing-tools.svg"
                                    alt="organizer" className="max-md:mx-auto" />
                                <h2 className="font-bold text-xl my-4 max-md:text-sm"> Marketing Tools </h2>
                                <p className="text-sm max-md:text-xs"> Engage attendees and reach new ones with our suite of automated email and social
                                    marketing tools </p>
                            </div>
                        </div>

                        <div className="w-1/2 max-md:hidden">
                            <img src="https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/2023/organizer/organizer--eventbrite--reach-people--002.webp"
                                alt="mobile" className="w-4/5" />
                        </div>
                    </div>

                </section>

                <section className="text-center text-indigo-950 my-10 py-10 mx-auto bg-white">
                    <h1 className="text-5xl font-bold max-md:text-lg"> Get paid, earn more </h1>
                    <p className="text-xl font-semibold my-4 max-md:text-sm"> Do what you love and earn more money with low-cost fees and quicker
                        payouts </p>

                    <div className="flex justify-center items-center w-full">
                        <div className="w-1/2 max-md:w-full">
                            <div className="w-72 text-start my-6 mx-auto max-md:text-center">
                                <img src="https://eventbrite-s3.s3.amazonaws.com/marketing/landingpages/assets/2023/organizer/icons/svg/organizer-icon__purple--wallet-money.svg"
                                    alt="ticket" className="max-md:mx-auto" />
                                <h2 className="font-bold text-xl my-4 max-md:text-sm"> Low-cost fees </h2>
                                <p className="text-sm max-md:"> Clear value, transparent fees </p>
                            </div>

                            <div className="w-72 text-start my-6 mx-auto max-md:text-center">
                                <img src="https://eventbrite-s3.s3.amazonaws.com/marketing/landingpages/assets/2023/organizer/icons/svg/organizer-icon__purple--payment-marketplace.svg"
                                    alt="report" className="max-md:mx-auto" />
                                <h2 className="font-bold text-xl my-4 max-md:text-sm"> Payment Processing </h2>
                                <p className="text-sm max-md:text-xs"> Easily collect and simplify event payments with built-in, full-service payment
                                    processing </p>
                            </div>

                            <div className="w-72 text-start my-6 mx-auto max-md:text-center">
                                <img src="https://eventbrite-s3.s3.amazonaws.com/marketing/landingpages/assets/2023/organizer/icons/svg/organizer-icon__purple--scheduled-payouts.svg"
                                    alt="organizer" className="max-md:mx-auto" />
                                <h2 className="font-bold text-xl my-4 max-md:text-sm"> Scheduled Payouts </h2>
                                <p className="text-sm max-md:text-xs"> Get paid before your event takes place on a customized schedule of your choice
                                </p>
                            </div>
                        </div>

                        <div className="w-1/2 max-md:hidden">
                            <img src="https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/2023/organizer/organizer--eventbrite--get-paid-earn-more--003.webp"
                                alt="mobile" className="w-4/5" />
                        </div>
                    </div>

                </section>

                <section className="bg-white my-10">

                    <div className="px-40 my-10 max-md:px-2">
                        <p className="text-gray-700 font-semibold text-sm text-center"> EXPLORE OUR SOLUTIONS </p>
                        <h1 className="text-gray-800 text-3xl font-bold my-3 max-md:text-lg text-center"> Discover solutions for events of all kinds and sizes
                        </h1>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-5 max-md:px-2">

                        {
                            Events.map((event, index) => (
                                <div key={index} className="w-96 bg-gray-100 flex justify-start items-center gap-5 rounded-lg overflow-hidden cursor-pointer hover:bg-white hover:shadow-lg hover:shadow-gray-300" >
                                    <img src={event.img} alt="templates" className="w-36 h-36 pointer-events-none max-md:w-16 max-md:h-16" />
                                    <p className="font-semibold text-2xl text-gray-800 max-md:text-sm"> {event.text} </p>
                                </div>
                            ))
                        }

                    </div>

                </section >

            </section >
        </>
    )
}
