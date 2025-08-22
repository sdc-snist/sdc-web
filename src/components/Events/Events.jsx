import React from "react";
import PastEvents from "./PastEvents";
import UpcomingEvents from "./UpcomingEvents";
import BackendDevelopment from "./SummerbootcampHero";
import EventGallery from "./EventGallery";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-20">
      <EventGallery />
      {/* <UpcomingEvents /> */}
      <PastEvents />
    </div>
  );
};

export default Events;
