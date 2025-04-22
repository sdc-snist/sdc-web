import React from 'react';
import { FaStar } from 'react-icons/fa';

function Testimonials() {
    const clients = [
      {
        name: "Ananya S.",
        username: "2nd Year CSE",
        rating: 5.0,
        review: "I joined the Summer Tech Camp with zero coding knowledge. Today, I can build websites confidently. The mentors were so patient and the environment was super supportive!",
        profilePhoto: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Rahul M.",
        username: "3rd Year IT",
        rating: 4.8,
        review: "Our team walked in with just an idea and walked out with a prototype! I made friends from other colleges, learned new tech, and actually had fun doing it.",
        profilePhoto: "https://randomuser.me/api/portraits/men/2.jpg"
      },
      {
        name: "Shrika Y.",
        username: "2nd Year ECE",
        rating: 4.9,
        review: "Before the bootcamp, I had no clue what UI/UX meant. Now I’m designing in Figma, prototyping apps, and even got an internship because of my portfolio!",
        profilePhoto: "https://randomuser.me/api/portraits/women/3.jpg"
      },
      {
        name: "Muralidhar R.",
        username: "4th Year CSE",
        rating: 5.0,
        review: "From ChatGPT to Midjourney, we explored everything in 3 days! The speakers were inspiring and now I’m considering a career in AI.",
        profilePhoto: "https://randomuser.me/api/portraits/men/4.jpg"
      },
      {
        name: "Aishwarya T.",
        username: "3rd Year AI & DS",
        rating: 4.7,
        review: "I always thought tech events were just talks. But these were full of energy, real-world insights, and actual hands-on learning. I now network better and feel more confident.",
        profilePhoto: "https://randomuser.me/api/portraits/women/5.jpg"
      },
      {
        name: "Prem Kiran P.",
        username: "Final Year CSE",
        rating: 5.0,
        review: "Every workshop, bootcamp, and hackathon helped me discover something new—about tech and about myself. SDC has truly shaped my college journey.",
        profilePhoto: "https://randomuser.me/api/portraits/men/6.jpg"
      }
    ];

    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our trusted <span className="text-red-500">Members</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Our mission is to empower students by fostering a collaborative learning environment, providing hands-on experiences, and inspiring innovation to help them achieve their full potential.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-500 transform transition duration-500 hover:scale-105">
              <div className="flex items-center justify-between">
                <img src={client.profilePhoto} alt={`${client.name} profile photo`} className="h-12 w-12 rounded-full border-2 border-red-500" />
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-900">{client.rating}</span>
                  <FaStar className="text-green-500 ml-1" />
                </div>
              </div>
              <p className="mt-4 text-gray-900">"{client.review}"</p>
              <div className="mt-4">
                <p className="text-lg font-bold text-gray-900">{client.name}</p>
                <p className="text-sm text-gray-500">{client.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Testimonials;