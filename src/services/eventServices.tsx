
export default function useGetEvents({ setDelhiEvents, setClassesEvents, setFestivalEvents, setOnlineEvents }: any) {

    const getDelhiEvents = async () => {
        try {
            const response = await fetch("https://eventmgmt-backend.onrender.com/eventsByLocation?location=delhi", {
                method: "GET",
                credentials: "include"
            })

            if (response.ok || response.status === 200) {
                const res = await response.json();
                setDelhiEvents(res.allEvents);
            }
        } catch (error) {
            console.log("error: ", error);
        }
    }

    const getOnlineEvents = async () => {
        try {
            const response = await fetch("https://eventmgmt-backend.onrender.com/eventsByCategory?category=Online Event", {
                method: "GET",
                credentials: "include"
            })

            if (response.ok || response.status === 200) {
                const res = await response.json();
                console.log(res.allEvents);

                setOnlineEvents(res.allEvents);
            }
        } catch (error) {
            console.log("error: ", error);
        }
    }

    const getFestivalEvents = async () => {
        try {
            const response = await fetch("https://eventmgmt-backend.onrender.com/eventsByCategory?category=Festivals and Fairs Event", {
                method: "GET",
                credentials: "include"
            })

            if (response.ok || response.status === 200) {
                const res = await response.json();
                console.log(res.allEvents);

                setFestivalEvents(res.allEvents);
            }
        } catch (error) {
            console.log("error: ", error);
        }
    }

    const getClassEvents = async () => {
        try {
            const response = await fetch("https://eventmgmt-backend.onrender.com/eventsByCategory?category=Classes and Workshops Events", {
                method: "GET",
                credentials: "include"
            })

            if (response.ok || response.status === 200) {
                const res = await response.json();
                console.log(res.allEvents);

                setClassesEvents(res.allEvents);
            }
        } catch (error) {
            console.log("error: ", error);
        }
    }

    return { getDelhiEvents, getClassEvents, getFestivalEvents, getOnlineEvents };
}
