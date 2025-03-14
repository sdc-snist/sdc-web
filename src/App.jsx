import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import FaqAndFooter from "./components/FaqAndFooter";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Community from "./components/Community";
import UpcomingEvents from "./components/UpcomingEvents";
import PastEvents from "./components/PastEvents";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <>
      <Navbar/>
      <Landing />
      <Testimonials />
      <HostAnEvent />
      <Partners />
      <UpcomingEvents />
      <PastEvents />
      <Community />
      <ContactUs />
      <FaqAndFooter/>
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
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/partners" element={<Partners />} />  
      </Routes>
      </div>
    </Router>
  );
}

export default App;
