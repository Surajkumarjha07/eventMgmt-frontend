import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EventCard from "../components/eventCard";
import useGetEvents from "../services/eventServices";

export default function Home() {
  const [cookie, setCookie] = useState("");
  const [visibleContent, setVisibleContent] = useState(false);
  const [delhiEvents, setDelhiEvents] = useState<any[]>([]);
  const navigate = useNavigate();

  const { getDelhiEvents } = useGetEvents({setDelhiEvents});

  useEffect(() => {
    const fetchedCookie = Cookies.get("authToken");

    if (fetchedCookie) {
      setCookie(fetchedCookie);
      getDelhiEvents();
    }
    else {
      navigate("/");
    }
  }, [navigate])

  useEffect(() => {
    const authorized = async () => {
      try {
        await fetch("https://eventmgmt-backend.onrender.com/userAuthenticate", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie}`
          },
          credentials: "include"
        })
          .then(response => {
            if (response.status === 200 || response.ok) {
              setVisibleContent(true);
            }
            else {
              navigate("/");
            }
          })
      } catch (error) {
        console.error("error: ", error);
        toast.error("Unable to authorize. Please try again later.", {
          hideProgressBar: true,
          autoClose: 2000,
          position: "top-center",
        });
        navigate("/")
      }
    };

    if (cookie) {
      authorized();
    }
  }, [cookie]);

  return (
    <>
      {
        visibleContent &&

        <section className="mt-16 bg-gray-50 w-full overflow-x-hidden">
          <div className="relative w-full h-fit overflow-hidden">
            <img src="https://cdn.evbstatic.com/s3-build/fe/build/images/5fe808e647422b815b98b73c28ecf405-3_tablet_1067x470.webp"
              alt="Image" className="w-full block max-[428px]:mt-11" />

            <div className="absolute w-fit inset-0 px-24 py-16 flex flex-col justify-end max-md:px-5 max-md:py-3">
              <Link to={"/find-events"}>
                <button
                  className="text-white text-sm text-center font-semibold bg-orange-700 px-3 py-3 max-md:text-xs max-md:px-1 max-md:py-1 cursor-pointer">
                  Find your next event
                </button>
              </Link>
            </div>

          </div>

          <div className="w-5/6 mx-auto mt-16">
            <h1 className="text-2xl text-gray-800 font-bold my-10"> Top trending in Delhi </h1>

            <div className='flex flex-wrap justify-between gap-8 max-[537px]:justify-center'>

            </div>

            <div className="mx-auto mt-10 mb-20 w-full">
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
                  </div>
                  :
                  <>
                    <img src="https://cdn-icons-png.freepik.com/256/9122/9122832.png?uid=R156296459&ga=GA1.1.823769688.1686565282&semt=ais_hybrid"
                      alt="ticket" className="w-36 h-36 mx-auto max-md:w-24 max-md:h-24" />
                    <p className="text-indigo-950 text-2xl font-bold my-8 text-center max-md:text-sm"> No available Events </p>
                  </>
              }
            </div>

          </div>

        </section>
      }
    </>
  )
}
