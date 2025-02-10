import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logInType from "../interfaces/logInType";
import Cookies from "js-cookie";

export default function useLogInService({ email, password }: logInType) {
    const navigate = useNavigate();

    const logIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Enter details correctly!", {
                hideProgressBar: true,
                autoClose: 1500,
                type: 'error',
                position: 'top-center',
            });
            return;
        }

        try {
            const response = await fetch("http://localhost:4000/logIn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password }),
                credentials: "include"
            })

            if (response.status === 200 || response.ok) {
                const res = await response.json();
                console.log(res.token);
                
                Cookies.set("authToken", res.token, { expires: 1 / 24, path: "/" });
                toast.success("Congrats! You are logged in", {
                    hideProgressBar: true,
                    autoClose: 1500,
                    type: 'success',
                    position: 'top-center',
                });
                navigate("/home");
            }
            else if (response.status === 404) {
                toast.error("Incorrect email or password!", {
                    hideProgressBar: true,
                    autoClose: 1500,
                    type: 'error',
                    position: 'top-center',
                });
            }
            else {
                const err = await response.json();
                console.error(err);
                toast.error("Login failed!", {
                    hideProgressBar: true,
                    autoClose: 1500,
                    type: 'error',
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

    return { logIn }
}
