import { toast } from "react-toastify";
import createEventType from "../interfaces/createEventType"

export default function useCreateEventService({ title, description, category, date, start_time, end_time, location, apartment, region, venue, price, capacity, image }: createEventType) {

    const createEvent = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title || !description || !category || !date || !start_time || !end_time || !location || !capacity || !image) {
            toast.error("Enter details correctly!", {
                hideProgressBar: true,
                autoClose: 1500,
                type: 'error',
                position: 'top-center',
            });
            return;
        }

        const formData = new FormData();
        formData.append("title", title || "");
        formData.append("description", description || "");
        formData.append("category", category || "");
        formData.append("date", date || "");
        formData.append("start_time", start_time || "");
        formData.append("end_time", end_time || "");
        formData.append("location", location || "");
        formData.append("apartment", apartment || "");
        formData.append("region", region || "");
        formData.append("venue", venue || "");
        formData.append("price", price?.toString() || "");
        formData.append("capacity", capacity?.toString() || "");
        formData.append("image", image);

        try {
            const response = await fetch("http://localhost:4000/createEvent", {
                method: "POST",
                body: formData,
                credentials: "include"
            })

            if (response.status === 200 || response.ok) {
                toast.success("Event Created", {
                    hideProgressBar: true,
                    autoClose: 1500,
                    type: 'success',
                    position: 'top-center',
                });
            }

            else if (response.status === 400) {
                toast.error("Please login to create events!", {
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

    return { createEvent }
}
