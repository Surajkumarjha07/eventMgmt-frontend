import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import useUpdateUserService from "../services/updateUserService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function UpdateUser() {
    const [newEmail, setNewEmail] = useState("");
    const [newName, setNewName] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [cookie, setCookie] = useState("");
    const [visibleContent, setVisibleContent] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchedCookie = Cookies.get("authToken");
        console.log(fetchedCookie);

        if (fetchedCookie) {
            setCookie(fetchedCookie);
        }
        else {
            navigate("/");
        }
    }, [navigate])

    useEffect(() => {
        const authorized = async () => {
            try {
                await fetch("http://localhost:4000/userAuthenticate", {
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

    const { updateUser } = useUpdateUserService({ newEmail, newName, currentPassword, cookie });

    return (
        <>
            {
                visibleContent &&

                <section className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">

                    <aside className="w-1/2 h-screen bg-white flex justify-center">
                        <div className="h-screen ">
                            <p className="googlefont text-orange-600 font-bold text-2xl cursor-pointer max-md:text-lg"> eventStream </p>

                            <h1 className="googlefont text-6xl font-extrabold w-72 my-10 max-md:text-3xl max-lg:text-4xl"> Update account </h1>
                            <form className="w-96 max-md:w-full max-md:mx-auto max-[780px]:px-4" method="post" onSubmit={updateUser}>

                                <input type="email" name="newEmail" className="w-full py-3 outline-none border-b focus:border-b-2 focus:border-b-orange-600 focus:placeholder:transition-all focus:placeholder:duration-500 focus:placeholder:ease-in-out focus-within:placeholder:text-xs focus:placeholder:text-orange-600 focus:placeholder:-translate-y-5" placeholder="New email address" value={newEmail} onChange={e => setNewEmail(e.target.value)} />
                                <br /><br />

                                <input type="text" name="newName" className="w-full py-3 outline-none border-b focus:border-b-2 focus:border-b-orange-600 focus:placeholder:transition-all focus:placeholder:duration-500 focus:placeholder:ease-in-out focus-within:placeholder:text-xs focus:placeholder:text-orange-600 focus:placeholder:-translate-y-5" placeholder="New name" value={newName} onChange={e => setNewName(e.target.value)} />
                                <br /><br />

                                <input type="password" name="currentPassword" className="w-full py-3 outline-none border-b focus:border-b-2 focus:border-b-orange-600 focus:placeholder:transition-all focus:placeholder:duration-500 focus:placeholder:ease-in-out focus-within:placeholder:text-xs focus:placeholder:text-orange-600 focus:placeholder:-translate-y-5" placeholder="Current password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />

                                <input type="submit" value="Update account" className="bg-orange-600 w-full cursor-pointer text-white py-2 rounded-sm my-10" />

                                <p className="text-gray-800 font-semibold my-4 max-md:text-xs">
                                    change your mind?
                                    <Link to={'/home'}>
                                        <span className="text-blue-600 cursor-pointer"> Home </span>
                                    </Link>
                                </p>

                            </form>
                        </div>
                    </aside>

                    <aside className="w-1/2 h-screen bg-red-200 max-md:hidden">
                        <img src="https://www.flashphotography.com/assets/img/specEvent2.jpg" alt="SignUp Image" className="h-full w-full" />
                    </aside>

                </section>
            }
        </>
    )
}
