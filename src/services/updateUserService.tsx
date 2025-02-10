import { toast } from "react-toastify";
import Cookies from "js-cookie";
import updateUserType from "../interfaces/updateUserType";

export default function useUpdateUserService({ newEmail, newName, currentPassword, cookie }: updateUserType) {

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newEmail && !newName) {
      toast.error("Provide atleast one field to update!", {
        hideProgressBar: true,
        autoClose: 1500,
        type: 'error',
        position: 'top-center',
      })
      return;
    }

    if (!currentPassword) {
      toast.error("Current password required", {
        hideProgressBar: true,
        autoClose: 1500,
        type: 'error',
        position: 'top-center',
      })
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/updateUser", {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookie}`
        },
        body: JSON.stringify({ newEmail, newName, currentPassword }),
        credentials: "include"
      })

      if (response.ok) {
        //signOut ->
        const signOut = await fetch("http://localhost:4000/signOut", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie}`
          },
          credentials: "include",
        })

        if (signOut.status === 200 || signOut.ok) {
          Cookies.remove("authToken");
          window.location.reload();
        }
      }

      switch (Number(response.status)) {
        case 401:
          toast.error("Password not matched!", {
            hideProgressBar: true,
            autoClose: 1500,
            type: 'error',
            position: 'top-center',
          })
          break;

        case 410:
          toast.error("User not authorized!", {
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

  return { updateUser }
}
