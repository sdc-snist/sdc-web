import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Landing from "./components/Landing";
import FaqAndFooter from "./components/FaqAndFooter";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Community from "./components/Community";
function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <Testimonials />
      <Community />
      <FaqAndFooter/>
    </>
  );
}

export default App;
