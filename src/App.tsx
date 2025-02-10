import { Routes, Route, useLocation } from "react-router-dom";
import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";
import DeleteUser from "./pages/deleteUser";
import UpdateUser from "./pages/updateUser";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import CreateEventPage from "./pages/createEvent";
import EventForm from "./pages/eventForm";
import Footer from "./pages/footer";
import ManageEvents from "./pages/manage-events";
import Tickets from "./pages/tickets";
import FindEvents from "./pages/find-events";
import EventInfo from "./pages/event-info";
import SearchEventPage from "./pages/searchedEvent-page";

export default function App() {
  const location = useLocation();
  
  const isHidden = location.pathname === "/" || location.pathname === "/sign-up" || location.pathname === "/delete-user" || location.pathname === "/update-user" || location.pathname === "/event-form";

  return (
    <>
      {
        !isHidden &&
        <Navbar />
      }

      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/update-user" element={<UpdateUser />} />
        <Route path="/delete-user" element={<DeleteUser />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-event-page" element={<CreateEventPage />} />
        <Route path="/event-form" element={<EventForm />} />
        <Route path="/manage-events" element={<ManageEvents />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/find-events" element={<FindEvents />} />
        <Route path="/event-info" element={<EventInfo />} />
        <Route path="/search-event-page" element={<SearchEventPage />} />
      </Routes>

      {
        !isHidden &&
        <Footer />
      }
    </>
  )
}
