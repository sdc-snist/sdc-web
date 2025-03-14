import React from 'react';
import { FaStar } from 'react-icons/fa';

function Testimonials() {
    const clients = [
      {
        name: "Kate Davis",
        username: "friable_captain_8",
        rating: 4.9,
        review: "The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of",
        profilePhoto: "https://placehold.co/50x50"
      },
      {
        name: "Martin Kazlauskas",
        username: "sartorial_statue_59",
        rating: 3.2,
        review: "The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of",
        profilePhoto: "https://placehold.co/50x50"
      },
      {
        name: "Sanjay Sharma",
        username: "voracious_rainbows_68",
        rating: 4.9,
        review: "The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of",
        profilePhoto: "https://placehold.co/50x50"
      },
      {
        name: "Tawanna Afumba",
        username: "intransigent_toejam_15",
        rating: 3.2,
        review: "The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of",
        profilePhoto: "https://placehold.co/50x50"
      },
      {
        name: "Larry King",
        username: "pendulous_unicorn_46",
        rating: 4.9,
        review: "The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of",
        profilePhoto: "https://placehold.co/50x50"
      },
      {
        name: "Fatima Mohamed",
        username: "salubrious_artist_72",
        rating: 3.2,
        review: "The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of",
        profilePhoto: "https://placehold.co/50x50"
      }
    ];

    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our trusted <span className="text-red-500">Members</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Our mission is to drive progress and enhance the lives of our customers by delivering superior products and services that exceed expectations.
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
              <p className="mt-4 text-gray-600 italic">"{client.review}"</p>
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