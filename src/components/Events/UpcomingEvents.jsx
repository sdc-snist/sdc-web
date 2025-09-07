import React from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const events = [
  {
    date: "May 12 - 22 , 2025",
    time: "6:30 PM - 8:00 PM",
    title: "Backend Development Summer Bootcamp",
    description: "Dive into the world of backend development with Backend Summer Bootcamp 2025 — a 10-day project-based journey crafted for aspiring developers and curious coders.",
    location: "Virtual",
  },
];

const UpcomingEvents = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="py-12 px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8">
          <span
            className="underline decoration-red-300 underline-offset-4"
            style={{ textDecorationColor: "#E32614E5" }}
          >
            Upcoming Events
          </span>
        </h2>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 ">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-2xl w-full max-w-sm transition duration-300 hover:scale-105
             
              "
            >
              {/* Date & Time */}
              <div
                className="text-white rounded-t-lg p-4 text-left"
                style={{ backgroundColor: "#E32614E5" }}
              >
                <h3 className="font-semibold text-lg">{event.date}</h3>
                <p className="text-sm">{event.time}</p>
              </div>

              {/* Content */}
              <div className="p-4 text-left space-y-2">
                <h4 className="font-bold text-2xl">{event.title}</h4>
                <p className="text- text-black">{event.description}</p>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1 text-red-600" />
                  <span className="text-md text-black">{event.location}</span>
                </div>
              </div>

              {/* Button */}
              <div className="p-4">
                <div className="flex justify-center">
                  <a
                    onClick={() => navigate("/events/backend-development")}
                    class="luma-checkout--button"
                    data-luma-action="checkout"
                    data-luma-event-id="evt-vPe8UYwWoogAJde"
                    className="luma-checkout--button cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded inline-block text-center"
                  >
                    Register for Event
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
