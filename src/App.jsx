import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import FaqAndFooter from "./components/FaqAndFooter";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners/Partners";
import Community from "./components/Community";
import ContactUs from "./components/ContactUs";
import HostAnEvent from "./components/HostAnEvent";
import Events from "./components/Events/Events";
import Activities from "./components/Activities";
import AboutUs from "./components/AboutUs";
import React, { useRef } from "react";

function Home() {
  const landingRef = useRef(null);
  const activitiesRef = useRef(null);
  const aboutUsRef = useRef(null);
  const eventsRef = useRef(null);
  const faqRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar
        onLinkClick={handleScroll}
        refs={{ landingRef, eventsRef, aboutUsRef, faqRef }}
      />

      <div ref={landingRef}>
        <Landing />
      </div>

      <div ref={activitiesRef}>
        <Activities />
      </div>

      <div ref={aboutUsRef}>
        <AboutUs />
      </div>

      <div ref={eventsRef}>
        <Events />
      </div>

      <div ref={faqRef}>
        <FaqAndFooter />
      </div>
    </>
  );
}


function App() {
  return (
    <Router>
      <div>
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
