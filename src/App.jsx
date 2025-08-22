import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import BackendDevelopment from "./components/Events/BackendDevelopment";
import AiEvent from "./components/Events/AiEvent";
import React, { useRef, useState, useEffect } from "react";
import Loader from "./components/Loader";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import AIagent from "./components/AIagent";

// Home component
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
        <FAQ />
      </div>      
      
  {/* Footer removed from Home, will be rendered globally */}
  </>
  );
}

// App logic wrapper to access location
function AppWrapper() {
  const location = useLocation();

  const hideNavbarOnPaths = ["/aiagent"];
  const hideNavbar = hideNavbarOnPaths.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/aiagent" element={<AiEvent />} />
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/FAQs" element={<FAQ />} />
        <Route
          path="/events/backend-development"
          element={<BackendDevelopment />}
        />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader: SDC anim (1.2s) + last word (1.9s + 0.5s) = 2.4s
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Router>
          <AppWrapper />
        </Router>
      )}
    </>
  );
}

export default App;
