import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export default function ManageEvents() {
  const [totalEventsCreated, setTotalEventsCreated] = useState<any[]>([]);
  const [totalEventsBooked, setTotalEventsBooked] = useState<any[]>([]);
  const [cookie, setCookie] = useState("");

  const getAllUserEvents = async () => {
    const response = await fetch("http://localhost:4000/getAllUserEvents", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie}`
      },
      credentials: "include"
    })

    if (response.ok || response.status === 200) {
      const res = await response.json();
      setTotalEventsCreated(res.allUserEvents);
    }
  }

  const getAllTickets = async () => {
    const response = await fetch("http://localhost:4000/getAllTickets", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie}`
      },
      credentials: "include"
    })

    if (response.ok || response.status === 200) {
      const res = await response.json();
      setTotalEventsBooked(res.allTickets);
    }
  }

  useEffect(() => {
    const fetchedCookie = Cookies.get("authToken");

    if (fetchedCookie) {
      setCookie(fetchedCookie);
    }
    getAllTickets();
    getAllUserEvents();
  }, [])

  const deleteEvent = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const title = target.parentElement?.parentElement?.parentElement?.children[0].firstChild?.textContent;
    console.log(title);

    try {
      const response = await fetch("http://localhost:4000/deleteUserEvent", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookie}`
        },
        body: JSON.stringify({ title }),
        credentials: "include"
      });

      if (response.ok || response.status === 200) {
        toast.success("Your event deleted!", {
          hideProgressBar: true,
          autoClose: 1500,
          type: 'success',
          position: 'top-center',
        });
      }

    } catch (error) {
      console.error("error: ", error);
      toast.error("Internal server error!", {
        hideProgressBar: true,
        autoClose: 1500,
        type: 'error',
        position: 'top-center',
      });
    }
  }

  const deleteTicket = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const title = target.parentElement?.parentElement?.parentElement?.children[0].firstChild?.textContent;
    console.log(title);

    try {
      const response = await fetch("http://localhost:4000/deleteUserTicket", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookie}`
        },
        body: JSON.stringify({ title }),
        credentials: "include"
      });

      if (response.ok || response.status === 200) {
        toast.success("Your ticket deleted!", {
          hideProgressBar: true,
          autoClose: 1500,
          type: 'success',
          position: 'top-center',
        });
      }

    } catch (error) {
      console.error("error: ", error);
      toast.error("Internal server error!", {
        hideProgressBar: true,
        autoClose: 1500,
        type: 'error',
        position: 'top-center',
      });
    }
  }

  return (
    <>
      <section className="googlefont mt-28">
        <div className="px-24 max-md:px-2">
          <p className="text-4xl font-extrabold text-gray-700 max-md:text-lg"> Events you created </p>

          <div
            className="flex flex-col justify-start gap-10 h-fit max-h-96 my-16 px-10 py-5 rounded-xl overflow-y-scroll custom-scrollbar max-md:px-1">
            {
              totalEventsCreated.length <= 0 ?
                <img
                  src="https://t3.ftcdn.net/jpg/06/25/40/48/240_F_625404869_Ehy3nD6DoS2Z5SDTxGWUWM3mVSsQ51gr.jpg"
                  alt="Image" className="w-64 h-40 mx-auto" />
                :
                totalEventsCreated.map((event, index) => (

                  <div key={index}
                    className="bg-gray-50 hover:bg-gray-100 w-full h-fit px-4 py-2 rounded-md flex justify-center items-center gap-4 cursor-pointer max-md:px-1">
                    <div className="w-full flex justify-between items-center">
                      <div>
                        <p className="text-gray-800 font-bold max-md:text-xs"> {event.title} </p>
                        <h3 className="text-gray-800 font-semibold text-sm max-md:hidden"> {event.location} </h3>
                      </div>
                      <div className="flex justify-center items-center gap-10">
                        <p className="text-gray-800 font-medium max-md:text-xs max-md:hidden"> {event.date} </p>
                        <button onClick={(e) => deleteEvent(e)}>
                          <img src="https://cdn-icons-png.freepik.com/256/12319/12319558.png?uid=R156296459&ga=GA1.1.823769688.1686565282&semt=ais_hybrid"
                            alt="delete" className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
            }
          </div>
        </div>

        <div className="px-24 max-md:px-1">
          <p className="text-4xl font-extrabold text-gray-700 max-md:text-lg"> Events you booked </p>

          <div
            className="flex flex-col justify-start gap-10 h-fit max-h-96 my-16 px-10 py-5 rounded-xl overflow-y-scroll custom-scrollbar max-md:px-1">
            {
              totalEventsBooked.length <= 0 ?
                <img
                  src="https://t3.ftcdn.net/jpg/06/25/40/48/240_F_625404869_Ehy3nD6DoS2Z5SDTxGWUWM3mVSsQ51gr.jpg"
                  alt="Image" className="w-64 h-40 mx-auto" />
                :
                totalEventsBooked.map((ticket, index) => (
                  <div key={index}
                    className="bg-gray-50 hover:bg-gray-100 w-full h-fit px-4 py-2 rounded-md flex justify-center items-center gap-4 cursor-pointer max-md:px-1">
                    <div className="w-full flex justify-between items-center">
                      <div>
                        <p className="text-gray-800 font-bold max-md:text-xs"> {ticket.title} </p>
                        <h3 className="text-gray-800 font-semibold text-sm max-md:hidden"> {ticket.location} </h3>
                      </div>
                      <div className="flex justify-center items-center gap-10">
                        <p className="text-gray-800 font-medium max-md:hidden"> {ticket.date} </p>
                        <button onClick={(e) => deleteTicket(e)}>
                          <img src="https://cdn-icons-png.freepik.com/256/12319/12319558.png?uid=R156296459&ga=GA1.1.823769688.1686565282&semt=ais_hybrid"
                            alt="delete" className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
            }
          </div>
        </div>
      </section>
    </>
  )
}
