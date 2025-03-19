import React from "react";
import { MapPin } from "lucide-react";

const events = [
  {
    date: "Monday 24 March",
    time: "01:00 PM - 3:30 PM",
    title: "Aleph Zero: Blockchain Workshop",
    description: "Sreenidhi Institute of Science & Technology - SNIST",
    location: "Admin Seminar Hall 1",
  },
];

const UpcomingEvents = () => {
  return (
    <>
      <div className="py-12 px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-8">
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
                    href="https://lu.ma/event/evt-vPe8UYwWoogAJde"
                    class="luma-checkout--button"
                    data-luma-action="checkout"
                    data-luma-event-id="evt-vPe8UYwWoogAJde"
                    className="luma-checkout--button bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded inline-block text-center"
                  >
                    Register for Event
                  </a>

                  <script
                    id="luma-checkout"
                    src="https://embed.lu.ma/checkout-button.js"
                  ></script>
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
