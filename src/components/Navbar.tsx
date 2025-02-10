import { useEffect, useState } from "react"
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar() {
    const [searchVisible, setSearchVisible] = useState(false);
    const [cookie, setCookie] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchedCookie = Cookies.get("authToken");
        if (fetchedCookie) {
            const parsedValue = JSON.parse(atob(fetchedCookie.split(".")[1]));
            setEmail(parsedValue.email);
            setCookie(fetchedCookie);
        }
    }, []);

    const signOut = async () => {
        try {
            const response = await fetch("http://localhost:4000/signOut", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${cookie}`
                },
                credentials: "include",
            });

            if (response.ok) {
                Cookies.remove("authToken");
                window.location.reload();
            }
        } catch (error) {
            console.error("Error signing out:", error);
            toast.error("Something went wrong! Try again later", {
                hideProgressBar: true,
                autoClose: 1500,
                type: 'error',
                position: 'top-center',
            });
        }
    };

    const showSearch = (e: React.MouseEvent | MouseEvent) => {
        const target = e.target as HTMLInputElement;
        if (!target.classList.contains("search-container")) {
            setSearchVisible(false);
            return;
        }
        setSearchVisible(true);
    };

    useEffect(() => {
        document.addEventListener("click", showSearch);

        return () => {
            document.removeEventListener("click", showSearch);
        }
    }, []);

    const getEventsByCategory = async (e: React.MouseEvent | MouseEvent) => {
        const target = e.target as HTMLUListElement;

        const params = new URLSearchParams({
            category: target.innerText.trim()
        })
        navigate(`/search-event-page?${params.toString()}`);
    };

    return (
        <>
            <nav className="border-b border-2 w-screen fixed top-0 left-0 z-50 bg-white py-1">
                <ul className="flex justify-center flex-wrap gap-10 items-center max-[428px]:justify-center max-[1200px]:gap-4">
                    <Link to={"/home"}>
                        <li className="cursor-pointer text-orange-600 font-bold text-2xl max-[778px]:text-sm max-[428px]:w-1/3"> eventStream </li>
                    </Link>
                    <li className="relative w-2/5 max-[778px]:w-[180px]">
                        <input type="search" name="search" id="search"
                            className="search-container w-full h-12 px-5 bg-gray-50 border border-gray-300 outline-none rounded-full max-[778px]:h-8"
                            placeholder="Search events" />

                        {
                            searchVisible &&
                            <>
                                <div className="bg-gray-900/35 w-screen h-screen fixed top-0 bottom-0 right-0 left-0 z-30"/>
                                <div className="w-1/2 h-fit absolute top-12 left-0 bg-white py-4 px-10 rounded-md z-40 max-[1035px]:w-full">
                                    <ul className="flex flex-col justify-center gap-8 text-gray-500 font-semibold max-lg:text-sm z-20">
                                        <li className="cursor-pointer flex justify-start items-center gap-5" onClick={getEventsByCategory}> <img
                                            src="https://t3.ftcdn.net/jpg/02/81/14/10/240_F_281141027_p3QurYdJnzbnf3Aola5uu0X6ElC5zVpf.jpg"
                                            alt="" className="w-5 h-5" /> Music Event </li>
                                        <li className="cursor-pointer flex justify-start items-center gap-5" onClick={getEventsByCategory}> <img
                                            src="https://t3.ftcdn.net/jpg/02/81/14/10/240_F_281141027_p3QurYdJnzbnf3Aola5uu0X6ElC5zVpf.jpg"
                                            alt="" className="w-5 h-5" /> Corporate Event </li>
                                        <li className="cursor-pointer flex justify-start items-center gap-5" onClick={getEventsByCategory}> <img
                                            src="https://t3.ftcdn.net/jpg/02/81/14/10/240_F_281141027_p3QurYdJnzbnf3Aola5uu0X6ElC5zVpf.jpg"
                                            alt="" className="w-5 h-5" /> Online Event </li>
                                        <li className="cursor-pointer flex justify-start items-center gap-5" onClick={getEventsByCategory}> <img
                                            src="https://t3.ftcdn.net/jpg/02/81/14/10/240_F_281141027_p3QurYdJnzbnf3Aola5uu0X6ElC5zVpf.jpg"
                                            alt="" className="w-5 h-5" /> Retail Event </li>
                                        <li className="cursor-pointer flex justify-start items-center gap-5" onClick={getEventsByCategory}> <img
                                            src="https://t3.ftcdn.net/jpg/02/81/14/10/240_F_281141027_p3QurYdJnzbnf3Aola5uu0X6ElC5zVpf.jpg"
                                            alt="" className="w-5 h-5" /> Non-Profit Event </li>
                                        <li className="cursor-pointer flex justify-start items-center gap-5" onClick={getEventsByCategory}> <img
                                            src="https://t3.ftcdn.net/jpg/02/81/14/10/240_F_281141027_p3QurYdJnzbnf3Aola5uu0X6ElC5zVpf.jpg"
                                            alt="" className="w-5 h-5" /> Festivals & Fairs Event </li>
                                    </ul>
                                </div>
                            </>
                        }
                    </li>

                    <ul className="flex justify-start items-center gap-10 max-[1200px]:gap-0 max-[1200px]:mx-auto">
                        {
                            !cookie ?
                                <li className="cursor-pointer text-sm text-center font-medium text-gray-500 hover:text-blue-500 rounded-full px-4 py-2 max-[428px]:text-xs"> Find Events </li> :
                                null
                        }
                        <Link to={"/event-form"}>
                            <li className="cursor-pointer text-sm text-center font-medium text-gray-500 hover:text-blue-500 rounded-full px-4 py-2 max-[428px]:text-xs">
                                <div>
                                    <img src="https://t3.ftcdn.net/jpg/07/23/62/12/240_F_723621285_P7ze76qTA2R19MhKBAt1QeeJrcWdT1tV.jpg"
                                        alt="add" className="w-5 h-5 mx-auto max-[428px]:w-3 max-[428px]:h-3" />
                                    <p> Create an event </p>
                                </div>
                            </li>
                        </Link>

                        {
                            !cookie ?
                                <>
                                    <Link to={"/"}>
                                        <li className="cursor-pointer text-sm text-center font-medium text-gray-500 hover:text-blue-500 rounded-full px-4 py-2 max-[428px]:text-xs"> Log In </li>
                                    </Link>

                                    <Link to={"/sign-up"}>
                                        <li className="cursor-pointer text-sm text-center font-medium text-gray-500 hover:text-blue-500 rounded-full px-4 py-2 max-[428px]:text-xs"> Sign Up </li>
                                    </Link>
                                </>
                                :
                                <>

                                    <Link to={"/tickets"}>
                                        <li className="cursor-pointer text-sm font-medium text-gray-500 hover:text-blue-500 rounded-full px-4 py-2 max-[428px]:text-xs">
                                            <div>
                                                <img src="https://t3.ftcdn.net/jpg/01/09/45/80/240_F_109458037_1Z1WHVQTOxarR5qTBDgaqB8aXwryF7h7.jpg"
                                                    alt="add" className="w-5 h-5 mx-auto max-[428px]:w-3 max-[428px]:h-3" />
                                                <p> Tickets </p>
                                            </div>
                                        </li>
                                    </Link>

                                    <li className="relative group max-[428px]:text-xs">
                                        <div className="flex justify-center items-center gap-4 hover:bg-gray-100 px-5 py-1">
                                            <div className="rounded-full bg-gray-100 px-4 py-4 max-[337px]:px-2 max-[337px]:py-2">
                                                <img src="https://cdn-icons-png.freepik.com/256/15049/15049767.png?uid=R156296459&ga=GA1.1.823769688.1686565282&semt=ais_hybrid"
                                                    alt="profile" className="w-4 h-4 max-[428px]:w-3 max-[428px]:h-3" />
                                            </div>
                                            <p className="font-bold text-gray-500 text-sm max-[1375px]:hidden"> {email} </p>
                                        </div>

                                        <div
                                            className="group-hover:block absolute min-w-fit top-14 right-0 bg-white py-4 px-10 max-[1384px]:w-60 max-lg:text-sm rounded-md hidden">
                                            <ul className="flex flex-col justify-center items-start gap-8 text-gray-500 font-semibold">
                                                <Link to={"manage-events"}>
                                                    <li className="cursor-pointer"> <a> Manage my events </a> </li>
                                                </Link>
                                                <Link to={"/update-user"}>
                                                    <li className="cursor-pointer"> Update account </li>
                                                </Link>
                                                <Link to={"/delete-user"}>
                                                    <li className="cursor-pointer"> Delete account </li>
                                                </Link>
                                                <li className="cursor-pointer" onClick={signOut}> Log out </li>
                                            </ul>
                                        </div>
                                    </li>
                                </>
                        }
                    </ul>
                </ul>
            </nav>
        </>
    )
}
