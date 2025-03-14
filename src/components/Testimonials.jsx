import React from 'react';
import { FaStar } from 'react-icons/fa';

function Testimonials() {
    const clients = [
      {
        name: "John Doe",
        username: "john_doe_tech",
        rating: 4.8,
        review: "This community has been a game-changer for my career. The resources and support are unmatched.",
        profilePhoto: "https://randomuser.me/api/portraits/men/10.jpg"
      },
      {
        name: "Jane Smith",
        username: "jane_smith_dev",
        rating: 4.7,
        review: "I've learned so much from the webinars and workshops. Highly recommend joining!",
        profilePhoto: "https://randomuser.me/api/portraits/women/11.jpg"
      },
      {
        name: "Michael Brown",
        username: "michael_brown_coder",
        rating: 4.9,
        review: "The networking opportunities are fantastic. I've connected with so many like-minded professionals.",
        profilePhoto: "https://randomuser.me/api/portraits/men/12.jpg"
      },
      {
        name: "Emily Davis",
        username: "emily_davis_techie",
        rating: 4.6,
        review: "Great community with a wealth of knowledge. The mentorship program is particularly beneficial.",
        profilePhoto: "https://randomuser.me/api/portraits/women/13.jpg"
      },
      {
        name: "David Wilson",
        username: "david_wilson_dev",
        rating: 4.8,
        review: "The collaborative projects have helped me grow my skills and portfolio. Amazing experience!",
        profilePhoto: "https://randomuser.me/api/portraits/men/14.jpg"
      },
      {
        name: "Sophia Martinez",
        username: "sophia_martinez_coder",
        rating: 4.7,
        review: "The community is very welcoming and supportive. I've made great friends and professional connections.",
        profilePhoto: "https://randomuser.me/api/portraits/women/15.jpg"
      }
    ];

    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What <span className="text-red-500"> Students </span>Say about us ?
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