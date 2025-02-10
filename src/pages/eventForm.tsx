import { useState } from "react"
import useCreateEventService from "../services/createEventService";

export default function EventForm() {
    const [locationDetails, setlocationDetails] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [start_time, setStartTime] = useState("");
    const [end_time, setEndTime] = useState("");
    const [location, setLocation] = useState("");
    const [apartment, setApartment] = useState("");
    const [region, setRegion] = useState("");
    const [venue, setVenue] = useState("");
    const [price, setPrice] = useState("");
    const [capacity, setCapacity] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const { createEvent } = useCreateEventService({ title, description, category, date, start_time, end_time, location, apartment, region, venue, price, capacity, image });

    const openLocationDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setlocationDetails(!locationDetails);
    }

    const Disabled = () => {
        setIsDisabled(!isDisabled);
    }

    const getFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        let target = e.target as HTMLInputElement
        if (target.files && target.files.length > 0) {
            console.log(target.files[0]);
            setImage(target.files[0]);
        }
    }

    return (
        <>
            <section>
                <img src="https://cdn.evbstatic.com/s3-build/perm_001/6e32ef/django/images/create/auto-creation/auto-create_layout-top.png"
                    alt="bgImg" className="fixed top-0 left-52 -z-10" />

                <div className="w-full">
                    <p className="text-orange-700 font-bold text-2xl cursor-pointer fixed top-4 left-8">
                        eventStream </p>
                </div>

                <div className="w-2/5 mx-auto mt-20 text-start max-md:w-4/5">
                    <h1 className="text-4xl font-bold text-gray-800 max-[950px]:text-2xl"> Create an event with us </h1>

                    <form className="my-8 text-gray-800" onSubmit={createEvent}>

                        <div>
                            <h3 className="text-lg font-medium max-md:text-lg"> What&apos;s the name of your event? </h3>
                            <p className="text-xs font-medium my-3"> This will be your event&apos;s title. Your title will be used to
                                help
                                create
                                your event&apos;s summary,
                                description, category, and tags - so be specific! </p>

                            <input type="text" name="title"
                                className="border-2 border-gray-400 w-full focus:border-gray-800 hover:border-gray-800 px-4 py-3 rounded-lg placeholder:text-sm placeholder:text-gray-700"
                                placeholder="Event Title" value={title} onChange={e => setTitle(e.target.value)} />
                        </div>

                        <div>
                            <h3 className="text-lg font-medium max-md:text-lg"> Write a description for your event? </h3>
                            <p className="text-xs font-medium my-3"> This will be your event&apos;s description which will help us to suggest this event to others. </p>

                            <textarea rows={3} name="description"
                                className="border-2 border-gray-400 w-full focus:border-gray-800 hover:border-gray-800 px-4 py-3 rounded-lg placeholder:text-sm placeholder:text-gray-700"
                                placeholder="Event Description" value={description} onChange={e => setDescription(e.target.value)} />
                        </div>

                        <div>

                            <h3 className="text-lg font-medium mt-12 max-md:text-lg"> Choose category of your event? </h3>
                            <p className="text-xs font-medium my-3"> This will be your event&apos;s category. Your event category will be
                                used to help
                                users to search for your events! </p>

                            <div
                                className="border-2 border-gray-400 w-full focus:border-gray-800 hover:border-gray-800 px-4 py-3 rounded-lg placeholder:text-sm placeholder:text-gray-700">
                                <select name="category" className="w-full outline-none" value={category} onChange={e => setCategory(e.target.value)}>
                                    <option value="Music Event"> Music Event </option>
                                    <option value="Corporate Event"> Corporate Event </option>
                                    <option value="Online Event"> Online Event </option>
                                    <option value="Food and Beverages Event"> Food & Beverages Event </option>
                                    <option value="Performing Arts Event"> Performing Arts Event </option>
                                    <option value="Classes and Workshops Event"> Classes & Workshops Event </option>
                                    <option value="Retail Event"> Retail Event </option>
                                    <option value="Non-Profit Event"> Non-Profit Event </option>
                                    <option value="Festivals and Fairs Event"> Festivals & Fairs Event </option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mt-12 mb-5 max-md:text-lg"> When does your event start and end? </h3>

                            <div>
                                <div className="w-full">
                                    <label htmlFor="date" className="text-gray-700 font-bold text-sm"> Event Date </label> <br />
                                    <input type="date" name="date"
                                        className="border-2 border-gray-400 focus:border-gray-800 hover:border-gray-800 px-4 py-3 rounded-lg w-full" value={date} onChange={e => setDate(e.target.value)}
                                    />
                                </div>

                                <div className="flex justify-center items-center gap-4 my-6">
                                    <div className="w-full">
                                        <label htmlFor="start_time" className="text-gray-700 font-bold text-sm"> Event start time </label>
                                        <br />
                                        <input type="time" name="startTime"
                                            className="border-2 border-gray-400 focus:border-gray-800 hover:border-gray-800 px-4 py-3 rounded-lg w-full" value={start_time} onChange={e => setStartTime(e.target.value)}
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label htmlFor="start_date" className="text-gray-700 font-bold text-sm"> Event end time </label>
                                        <br />
                                        <input type="time" name="endTime"
                                            className="border-2 border-gray-400 focus:border-gray-800 hover:border-gray-800 px-4 py-3 rounded-lg w-full" value={end_time} onChange={e => setEndTime(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-auto">
                            <h2 className="text-lg font-medium mt-12 mb-5 max-md:text-lg"> Where is it located?</h2>

                            <div >
                                <div
                                    className="flex justify-start items-center gap-4 border-2 border-gray-400 w-full my-6 focus:border-gray-800 hover:border-gray-800 px-4 py-3 rounded-lg">
                                    <img src="https://cdn-icons-png.freepik.com/256/402/402326.png?uid=R156296459&ga=GA1.1.823769688.1686565282&semt=ais_hybrid"
                                        alt="location" className="w-5 h-5" />
                                    <input type="text" name="location" className="w-full placeholder:text-gray-700 outline-none"
                                        placeholder="location" value={location} onChange={e => setLocation(e.target.value)} />
                                </div>

                                <button className="flex justify-start items-center gap-3 cursor-pointer w-fit px-4 py-2 rounded-full hover:bg-gray-100" onClick={openLocationDetails}>
                                    <img src="https://cdn-icons-png.freepik.com/256/3935/3935029.png?uid=R156296459&ga=GA1.1.823769688.1686565282&semt=ais_hybrid"
                                        alt="location" className="w-4 h-4" />
                                    <p className="text-sm font-semibold text-gray-600"> Add location details </p>
                                </button>

                            </div>

                            {
                                locationDetails &&

                                <div>
                                    <div className="flex justify-start items-center gap-4 my-6">
                                        <input type="text" name="apartment"
                                            className="border-2 border-gray-400 w-full focus:border-gray-800 hover:border-gray-800 px-4 py-3 rounded-lg placeholder:text-sm placeholder:text-gray-700"
                                            placeholder="Apartment, suite, etc" value={apartment} onChange={e => setApartment(e.target.value)} />

                                        <input type="text" name="region"
                                            className="border-2 border-gray-400 w-full focus:border-gray-800 hover:border-gray-800 px-4 py-3 rounded-lg placeholder:text-sm placeholder:text-gray-700"
                                            placeholder="Region" value={region} onChange={e => setRegion(e.target.value)} />
                                    </div>

                                    <input type="text" name="venue"
                                        className="border-2 border-gray-400 w-full focus:border-gray-800 hover:border-gray-800 px-4 py-3 rounded-lg placeholder:text-sm placeholder:text-gray-700"
                                        placeholder="Venue name" value={venue} onChange={e => setVenue(e.target.value)} />
                                </div>
                            }

                        </div>

                        <div>
                            <h2 className="text-lg font-medium mt-8 max-md:text-lg"> How much do you want to charge for tickets? </h2>
                            <p className="text-xs font-medium my-1"> Our tool can only generate one General Admission ticket for
                                now.
                                You can edit and add more ticket types later. </p>

                            <div className={!isDisabled ? 'flex justify-center items-center gap-4 border-2 border-gray-400 w-44 my-6 focus:border-gray-800 hover:border-gray-800 px-2 py-3 rounded-lg' : 'flex justify-center items-center gap-4 border-2 border-gray-300 w-44 my-6 px-2 py-3 rounded-lg'}
                            >
                                <p className="text-xl font-bold"> $ </p>
                                <input type="number" name="price" disabled={isDisabled}
                                    className={!isDisabled ? 'w-24 outline-none placeholder:text-gray-700' : 'w-24 outline-none placeholder:text-gray-400'}
                                    placeholder="0.00" value={price} onChange={e => setPrice(e.target.value)} />
                            </div>

                            <div className="flex justify-start items-center gap-3">
                                <input type="checkbox" name="free" onClick={Disabled} />
                                <p className="text-xs font-medium text-gray-700"> My tickets are free </p>
                            </div>
                        </div>


                        <div>
                            <h2 className="text-lg font-medium mt-8 max-md:text-lg"> What's the capacity for your event? </h2>
                            <p className="text-xs font-medium my-1"> Event capacity is the total number of tickets you're willing to
                                sell. </p>

                            <input type="number" name="capacity"
                                className="flex justify-center items-center gap-4 border-2 border-gray-400 w-44 my-6 focus:border-gray-800 hover:border-gray-800 px-4 py-3 rounded-lg outline-none placeholder:text-gray-700"
                                placeholder="0" value={capacity} onChange={e => setCapacity(e.target.value)} />
                        </div>

                        <div
                            className="w-full h-fit relative border-2 border-gray-400 focus:border-gray-800 hover:border-gray-800 px-4 py-2 rounded-lg">
                            <div className="w-ful bg-white text-gray-800 font-bold text-lg pointer-events-none cursor-pointer">
                                {!image ? 'Choose an Image' : `choosen File - ${image.name}`}
                            </div>
                            <input type="file" name="imageFile" className="w-full absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => getFile(e)} />
                        </div>

                        <input type="submit" value="Create Event"
                            className="bg-orange-600 w-44 rounded-lg cursor-pointer text-white py-2 my-10" />
                    </form>
                </div>

                <img src="https://cdn.evbstatic.com/s3-build/perm_001/6e32ef/django/images/create/auto-creation/auto-create_layout-top.png"
                    alt="bgImg" className="fixed bottom-0 right-0 rotate-180" />

            </section>
        </>
    )
}
