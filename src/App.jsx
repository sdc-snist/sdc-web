import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Landing from "./components/Landing";
import FaqAndFooter from "./components/FaqAndFooter";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Community from "./components/Community";
import UpcomingEvents from "./components/UpcomingEvents";
import PastEvents from "./components/PastEvents";
function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <UpcomingEvents />
      <PastEvents />
      <Testimonials />
      <Community />
      <FaqAndFooter/>
    </>
  );
}

export default App;
