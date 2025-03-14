import "./App.css";
import Landing from "./components/Landing";
import FaqAndFooter from "./components/FaqAndFooter";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Community from "./components/Community";
import UpcomingEvents from "./components/UpcomingEvents";
import PastEvents from "./components/PastEvents";
import ContactUs from "./components/ContactUs";
import Activities from "./components/Activities";
import AboutUs from "./components/Aboutus";
function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Activities />
      <AboutUs />
      <UpcomingEvents />
      <PastEvents />
      <Testimonials />
      <Community />
      <ContactUs />
      <FaqAndFooter />
    </>
  );
}

export default App;
