type createEventType = {
    title: string,
    description: string,
    category: string,
    date: string,
    start_time: string,
    end_time: string,
    location: string,
    apartment: string,
    region: string,
    venue: string,
    price: string,
    capacity: string,
    image: File | null
}

export default createEventType;