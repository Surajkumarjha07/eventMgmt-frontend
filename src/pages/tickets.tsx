import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function Tickets() {
  const [totalTickets, setTotalTickets] = useState<any[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchedCookie = Cookies.get("authToken");
    if (fetchedCookie) {
      const parsedValue = JSON.parse(atob(fetchedCookie.split(".")[1]));
      setName(parsedValue.name);
    }
  }, [])

  const getAllTickets = async () => {
    const response = await fetch("https://eventmgmt-backend.onrender.com/getAllTickets", {
      method: "GET",
      credentials: "include"
    })

    if (response.ok || response.status === 200) {
      const res = await response.json();
      setTotalTickets(res.allTickets);
    }
  }

  useEffect(() => {
    getAllTickets();
  }, [])

  return (
    <>
      <section className="mt-16 w-4/5 bg-white h-fit mx-auto shadow-xl shadow-gray-200">
        <div className="bg-gray-50 w-full h-fit py-20 px-10">
          <div className="flex justify-start items-center gap-4 w-fit">
            <div
              className="bg-white w-32 h-32 rounded-full flex justify-center items-center shadow-lg shadow-gray-200 max-md:w-24 max-md:h-24">
              <img src="https://cdn-icons-png.freepik.com/256/15049/15049767.png?uid=R156296459&ga=GA1.1.823769688.1686565282&semt=ais_hybrid"
                alt="profile" className="w-10 h-10 max-md:w-7 max-md:h-7" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-800 max-md:text-sm"> {name} </p>
              <p className="text-gray-400 font-medium text-sm my-4"> {totalTickets.length} tickets </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end h-fit px-28 py-20 max-md:px-0">
          {
            totalTickets.length <= 0 ?
              <div className="w-2/3">

                <p className="text-gray-700 font-medium text-xl"> Orders </p>

                <div className="my-4 text-center">
                  <p className="text-lg text-gray-500 font-medium"> Looking for your tickets? </p>
                  <p className="text-sm font-medium text-gray-500 mt-3"> You need to add tickets from find tickets section to
                    see them there. </p>
                  <div className="bg-gray-50 w-28 h-28 flex justify-center items-center rounded-full mx-auto my-8">
                    <img src="https://cdn-icons-png.freepik.com/256/9122/9122832.png?uid=R156296459&ga=GA1.1.823769688.1686565282&semt=ais_hybrid"
                      alt="ticket" className="w-16 h-16" />
                  </div>
                  <p className="text-gray-400 font-semibold text-lg"> No upcoming orders </p>
                </div>

                <Link to={"/find-events"}>
                  <button className="bg-orange-600 text-white font-semibold px-6 py-2 rounded-md block mx-auto my-8 cursor-pointer"> Get
                    tickets for event </button>
                </Link>
              </div> :

              <div className="w-2/3 max-[1100px]:w-full max-md:px-2">
                <p className="text-gray-700 font-bold text-3xl mb-10 max-md:text-sm"> Your Tickets </p>

                <div
                  className="flex flex-col justify-start gap-10 h-fit max-h-96 px-10 py-10 rounded-xl overflow-y-scroll custom-scrollbar max-md:w-full max-[1250px]:px-2">
                  {
                    totalTickets.map((ticket, index) => (
                      <div key={index}
                        className="bg-gray-50 hover:bg-gray-100 w-full h-fit px-4 py-2 rounded-md flex justify-center items-center gap-4 cursor-pointer">
                        <div className="w-full flex justify-between items-center gap-4">
                          <div>
                            <p className="text-gray-800 font-bold text-sm hover:underline max-md:text-[12px]"
                            > {ticket.title} </p>
                            <h3 className="text-gray-800 font-semibold text-xs max-md:text-[10px] max-md:hidden">
                              {ticket.location} </h3>
                          </div>
                          <p className="text-gray-800 font-medium text-sm max-md:text-[10px]"> {ticket.date} </p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
          }

        </div >

      </section >
    </>
  )
}
