import React from "react";
import hash2 from "../assets/Students-Devolopers-Community.png";
import Python from "../assets/Python.jpg";
import uxplosion from "../assets/Ux-Plosion.jpg";
import hash1 from "../assets/Hash1.png";

const pastEvents = [
    {
        date: "6 - 22 June 2024",
        title: "HASH IT OUT - 2.0",
        description: "Second Edition of our flagship event, a 24-hour hackathon.",
        location: "SNIST",
        participants: "500+",
        image: hash2, 
    },
    {
        date: "6 - 22 June 2024",
        title: "UX-PLOSION",
        description: "36-hour coding marathon with over 500 participants from across India.",
        location: "Virtual",
        participants: "500+",
        image: uxplosion, 
    },
    {
        date: "6 - 22 June 2024",
        title: "PYTHON FOR DATA SCIENCE",
        description: "A hands-on workshop introducing students to Python for data science, covering data analysis, visualization, and lot more",
        location: "Virtual",
        participants: "500+",
        image: Python,
    },
    {
        date: "6 - 22 June 2024",
        title: "HASH IT OUT - 1.0",
        description: "State-level hackathon fostering innovation, teamwork, and real-world tech solutions.",
        location: "SNIST",
        participants: "500+",
        image: hash1,
    },
];

const PastEvents = () => {
return (
    <div className="py-12 px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-8">
            <span className="underline decoration-[#E32614E5] underline-offset-4">Past Events</span>
        </h2>

        {/* Events Grid */}
        <div className="flex flex-wrap justify-center gap-6">
            {pastEvents.map((event, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg shadow-2xl overflow-hidden relative w-full max-w-xs transition duration-300 hover:scale-105"
                >
                    {/* Completed Badge */}
                    <div className="absolute top-2 right-2 bg-[#E32614E5] text-white text-s font-semibold px-3 py-1 rounded-full">
                        Completed
                    </div>

                    {/* Image */}
                    <img src={event.image} alt={event.title} className="h-44 w-full object-cover" />

                    {/* Content */}
                    <div className="p-4 text-left space-y-2">
                        <p className="text-sm text-[#E32614E5]">{event.date}</p>
                        <h4 className="font-bold text-lg">{event.title}</h4>
                        <p className="text-sm text-black">{event.description}</p>
                        <div className="flex justify-between text-black text-sm pt-2">
                            <p>Location: {event.location}</p>
                            <p>Participants: {event.participants}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* See All Button */}
        <div className="mt-10">
            <button className="border-2 border-[#E32614E5] text-xl text-[#E32614E5] py-2 px-6 rounded-full hover:bg-[#E32614E5] hover:text-white transition">
                See All
            </button>
        </div>
    </div>
);
};

export default PastEvents;
