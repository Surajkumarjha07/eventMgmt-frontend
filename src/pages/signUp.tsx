import { useState } from "react";
import useSignUpService from "../services/signUpService";
import { Link } from "react-router-dom";
// import SignUpService from "../services/signUpService";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useSignUpService({ email, name, password });

  return (
    <>
      <section className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">

        <aside className="w-1/2 h-screen bg-white flex justify-center">
          <div className="h-screen ">
            <p className="googlefont text-orange-600 font-bold text-2xl cursor-pointer max-md:text-lg"> eventStream </p>

            <h1 className="googlefont text-6xl font-extrabold w-72 my-10 max-md:text-3xl max-lg:text-4xl"> Create an account </h1>
            <form className="w-96 max-md:w-full max-md:mx-auto max-[780px]:px-4" method="post" onSubmit={signUp}>

              <input type="email" name="email" className="w-full py-3 outline-none border-b focus:border-b-2 focus:border-b-orange-600 focus:placeholder:transition-all focus:placeholder:duration-500 focus:placeholder:ease-in-out focus-within:placeholder:text-xs focus:placeholder:text-orange-600 focus:placeholder:-translate-y-5" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
              <br /><br />

              <input type="text" name="name" className="w-full py-3 outline-none border-b focus:border-b-2 focus:border-b-orange-600 focus:placeholder:transition-all focus:placeholder:duration-500 focus:placeholder:ease-in-out focus-within:placeholder:text-xs focus:placeholder:text-orange-600 focus:placeholder:-translate-y-5" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
              <br /><br />

              <input type="password" name="password" className="w-full py-3 outline-none border-b focus:border-b-2 focus:border-b-orange-600 focus:placeholder:transition-all focus:placeholder:duration-500 focus:placeholder:ease-in-out focus-within:placeholder:text-xs focus:placeholder:text-orange-600 focus:placeholder:-translate-y-5" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

              <input type="submit" value="Sign Up" className="bg-orange-600 w-full cursor-pointer text-white py-2 rounded-sm my-10" />

              <p className="text-gray-800 font-semibold my-4 max-md:text-xs">
                have an account?
                <Link to={"/"}>
                  <span className="text-blue-600 cursor-pointer"> Log In </span>
                </Link>
              </p>

            </form>
          </div>
        </aside>

        <aside className="w-1/2 h-screen bg-red-200 max-md:hidden">
          <img src="https://www.flashphotography.com/assets/img/specEvent2.jpg" alt="SignUp Image" className="h-full w-full" />
        </aside>

      </section>
    </>
  )
}
