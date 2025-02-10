import { useState } from "react";
import { Link } from "react-router-dom";
import useLogInService from "../services/logInService";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { logIn } = useLogInService({ email, password });

  return (
    <>
      <section className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">

        <aside className="w-1/2 h-screen bg-white flex justify-center">
          <div className="h-screen">
            <p className="googlefont text-orange-600 font-bold text-2xl cursor-pointer max-md:text-lg"> eventStream </p>

            <h1 className="googlefont text-6xl text-indigo-950 font-extrabold w-72 my-10 max-md:text-3xl max-lg:text-4xl"> Log In </h1>
            <form className="w-96 max-md:w-full max-md:mx-auto max-[780px]:px-4" method="post" onSubmit={logIn}>

              <input type="email" name="email" className="w-full py-3 outline-none border-b focus:border-b-2 focus:border-b-orange-600 focus:placeholder:transition-all focus:placeholder:duration-500 focus:placeholder:ease-in-out focus-within:placeholder:text-xs focus:placeholder:text-orange-600 focus:placeholder:-translate-y-5" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
              <br /><br />

              <input type="password" name="password" className="w-full py-3 outline-none border-b focus:border-b-2 focus:border-b-orange-600 focus:placeholder:transition-all focus:placeholder:duration-500 focus:placeholder:ease-in-out focus-within:placeholder:text-xs focus:placeholder:text-orange-600 focus:placeholder:-translate-y-5" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

              <input type="submit" value="Log In" className="bg-orange-600 w-full cursor-pointer text-white py-2 rounded-sm my-10" />

              <p className="text-gray-800 font-semibold my-4 max-md:text-xs">
                Don't have an account?
                <Link to={"/sign-up"}>
                  <span className="text-blue-600 cursor-pointer"> Sign Up </span>
                </Link>
              </p>

            </form>
          </div>
        </aside>

        <aside className="w-1/2 h-screen bg-red-200 max-md:hidden">
          <img src="https://th.bing.com/th/id/R.e96757b3e5cd0281268cc6e2c934c908?rik=2deYsKIRxtGN9A&riu=http%3a%2f%2flondon-event-photography.co.uk%2fwp-content%2fuploads%2f2015%2f01%2fJohn-About-Me-Event-Photography-101.jpg&ehk=e1%2bQ1TSrLAfbURHGvDpf%2bnwHw05pnIZJFCGXn%2fXh8E0%3d&risl=1&pid=ImgRaw&r=0" alt="SignUp Image" className="h-full w-full" />
        </aside>

      </section>
    </>
  )
}
