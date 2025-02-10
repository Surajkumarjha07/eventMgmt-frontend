import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="flex justify-center items-center gap-10 w-full h-auto py-10 text-white bg-indigo-950 max-md:px-10">
                <div>
                    <h1 className="text-5xl font-bold max-md:text-xl"> Grow eventfully </h1>
                    <p className="text-xl font-medium my-4 w-[42rem] max-md:text-sm max-md:w-full"> Explore all the built-in tools you need to start, run, and grow your business with events. </p>
                    <Link to={"/sign-up"}>
                        <button className="bg-orange-600 w-80 py-2 rounded-md font-bold max-md:text-sm max-md:w-60"> Try EventStream for free </button>
                    </Link>
                </div>

                <div>
                    <img src="https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/event_ticketing_006.webp" alt="footerImg" className="w-[40rem] h-[25rem] max-lg:hidden" />
                </div>
            </footer>
        </>
    )
}
