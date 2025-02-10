import { useNavigate } from "react-router-dom"

export default function EventCard({ img, title, description, date, start_time, location, price, apartment, region, venue }: any) {
    const navigate = useNavigate();
    const queryParams = new URLSearchParams({
        title, description, date, start_time, location, apartment, region, venue, price, img
    })

    const getEventInfo = () => {
        navigate(`/event-info?${queryParams.toString()}`);
    }

    return (
        <>
            <section className="googlefont cursor-pointer w-72 bg-white rounded-lg overflow-hidden hover:shadow-lg hover:shadow-gray-300 my-7 max-md:w-52" onClick={getEventInfo}>
                <img src={`http://localhost:4000/uploads/${img}`} alt="event" />

                <div className="px-4 py-4">
                    <h1 className="text-gray-700 font-bold text-lg max-md:text-sm"> {title}  </h1>
                    <div className="flex justify-start gap-2">
                        <p className="date ? 'text-gray-700 text-sm font-semibold my-1 max-md:text-xs' : 'hidden'"> {date} </p>
                        <p className="(date && start_time) ? 'text-gray-700 text-sm font-semibold my-1 max-md:text-xs' : 'hidden'"> • </p >
                        <p className='text-gray-700 text-sm font-semibold my-1 max-md:text-xs'> {start_time} </p >
                    </div >
                    <p className='text-gray-500 text-sm font-medium my-2 max-md:text-xs'> {location}  </p >

                    <div className="flex justify-start gap-2">
                        <p className='text-gray-500 text-sm font-medium my-2 max-md:text-xs'> {apartment}  </p >
                        <p className='text-gray-500 text-sm font-medium my-2 max-md:text-xs'> {venue}  </p >
                        <p className='text-gray-500 text-sm font-medium my-2 max-md:text-xs'> {region}  </p >
                    </div>
                    <p className="text-gray-600 text-sm font-semibold max-md:text-xs"> {!price ? "" : "$"} {!price ? "Free" : price}  </p>
                </div >

            </section >
        </>
    )
}
