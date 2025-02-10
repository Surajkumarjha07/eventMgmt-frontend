import { toast } from "react-toastify";
import deleteUserType from "../interfaces/deleteUserType";
import Cookies from "js-cookie";

export default function useDeleteUserService({ password, cookie }: deleteUserType) {

    const deleteUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!password) {
            toast.error("Enter password to delete account!", {
                hideProgressBar: true,
                autoClose: 1500,
                type: 'error',
                position: 'top-center',
            });
            return;
        }

        try {
            const response = await fetch("https://eventmgmt-backend.onrender.com/deleteUser", {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cookie}`
                },
                body: JSON.stringify({ password }),
                credentials: "include"
            })

            if (response.ok) {
                const response = await fetch("https://eventmgmt-backend.onrender.com/signOut", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${cookie}`
                    },
                    credentials: "include",
                })

                if (response.status === 200 || response.ok) {
                    Cookies.remove("authToken");
                    window.location.reload();
                }
            }

            switch (Number(response.status)) {
                case 404:
                    toast.error("Password not matched!", {
                        hideProgressBar: true,
                        autoClose: 1500,
                        type: 'error',
                        position: 'top-center',
                    })
                    break;

                case 500:
                    toast.error("Internal server error!", {
                        hideProgressBar: true,
                        autoClose: 1500,
                        type: 'error',
                        position: 'top-center',
                    })
                    break;
            }

        } catch (error) {
            console.error("Internal Server Error", error);
            toast.error("Something went wrong! Try again later", {
                hideProgressBar: true,
                autoClose: 1500,
                type: 'error',
                position: 'top-center',
            })
        }
    }

    return { deleteUser }
}
