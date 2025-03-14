import React from "react";
import { MapPin } from "lucide-react";

const events = [
    {
        date: "3 April 2025",
        time: "09:00 AM - 12:20 PM",
        title: "Blockchain Workshop",
        description: "Half-day Workshop with Blockchain and Web 3 experts.",
        location: "SNIST",
    },
    {
        date: "13 May 2025",
        time: "09:00 AM - 12:20 PM",
        title: "Blockchain Workshop",
        description: "Half-day Workshop with Blockchain and Web 3 experts.",
        location: "MICROSOFT, HYD",
    },
    {
        date: "3 April 2025",
        time: "09:00 AM - 12:20 PM",
        title: "Blockchain Workshop",
        description: "Half-day Workshop with Blockchain and Web 3 experts.",
        location: "SNIST",
    },
];

const UpcomingEvents = () => {
    return (
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
                    <div key={index} className="bg-white rounded-lg shadow-2xl w-full max-w-sm transition duration-300 hover:scale-105">
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
                            <button className="w-full bg-black text-white text-xl py-2 shadow-2xl rounded-md hover:bg-gray-800 transition">
                                Register Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Events Button */}
            <div className="mt-8">
                <button
                    className="text-white  text-xl py-2 px-6 rounded-md hover:bg-red-600 transition"
                    style={{ backgroundColor: "#E32614E5" }}
                >
                    View All Events
                </button>
            </div>
        </div>
    );
};

export default UpcomingEvents;
