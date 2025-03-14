import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import FaqAndFooter from "./components/FaqAndFooter";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import HostAnEvent from "./components/HostAnEvent";
import Partners from "./components/Partners/Partners";

function Home() {
  return (
    <>
      <Landing />
      <Testimonials />
      <HostAnEvent />
      <Partners />
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
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/partners" element={<Partners />} />  
      </Routes>
      </div>
    </Router>
  );
}

export default App;
