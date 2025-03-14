import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import FaqAndFooter from "./components/FaqAndFooter";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import HostAnEvent from "./components/HostAnEvent";
import Partners from "./components/Partners/Partners";
import UpcomingEvents from "./components/Events/UpcomingEvents";
import Community from "./components/Community";
import PastEvents from "./components/Events/PastEvents";
import ContactUs from "./components/ContactUs";
import Events from "./components/Events/Events";

function Home() {
  return (
    <>
      <Landing />
      <Events/>
      <ContactUs />
      <HostAnEvent />
      <Testimonials />
      <Partners />
      <Community/>
      <FaqAndFooter />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div >
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/host-event" element={<HostAnEvent />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/partners" element={<Partners />} />  
      </Routes>
      </div>
    </Router>
  );
}

export default App;
