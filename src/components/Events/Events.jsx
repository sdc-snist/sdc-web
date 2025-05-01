import React from "react";
import PastEvents from "./PastEvents";
import UpcomingEvents from "./UpcomingEvents";
import BackendDevelopment from "./SummerbootcampHero";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-20">
      <UpcomingEvents />
      <PastEvents />
    </div>
  );
};

export default Events;
