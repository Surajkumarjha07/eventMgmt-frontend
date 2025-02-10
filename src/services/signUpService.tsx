import { toast } from 'react-toastify';
import signUpType from '../interfaces/signUpType';
import { useNavigate } from 'react-router-dom';

export default function useSignUpService({ email, name, password }: signUpType) {

    const navigate = useNavigate();

    const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !name || !password) {
            toast.error("Enter details correctly!", {
                hideProgressBar: true,
                autoClose: 1500,
                type: 'error',
                position: 'top-center',
            });
            return;
        }
        try {
            const response = await fetch("https://eventmgmt-backend.onrender.com/signUp", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, name, password }),
                credentials: "include"
            })

            if (response.status === 200 || response.ok) {
                toast.success("Great! You are registered", {
                    hideProgressBar: true,
                    autoClose: 1500,
                    type: 'success',
                    position: 'top-center',
                });
                navigate("/");
            }

            else if (response.status === 409) {
                toast.error("Email already in use!", {
                    hideProgressBar: true,
                    autoClose: 1500,
                    type: 'error',
                    position: 'top-center',
                })
            }

            else {
                toast.error("Internal server error!", {
                    hideProgressBar: true,
                    autoClose: 1500,
                    type: 'error',
                    position: 'top-center',
                })
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

    return { signUp };
}
