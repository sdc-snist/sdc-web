import React from 'react';
import backgroundImage from "../assets/image-2.png"; // Update the path to your background image

const Community = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center p-10 md:p-10 bg-white"
        >
            <div className="container mx-auto bg-black bg-opacity-90 p-20 rounded-lg grid-background space-y-8">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-6 text-white">Join the Community</h1>
                    <p className="text-lg mb-8 text-gray-300">Be part of a network that fosters innovation, knowledge sharing, and career growth!</p>
                    <button className="bg-red-600 mb-7 text-white py-3 px-8 rounded-full text-lg">Join</button>
                </div>
                <div className="flex flex-wrap justify-center mt-8 space-x-4 space-y-4">
                    <img alt="Profile picture of a community member" className="w-24 h-24 rounded-full border border-gray-700 transform transition-transform duration-300 hover:scale-150" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                    <img alt="Profile picture of a community member" className="w-24 h-24 rounded-full border border-gray-700 transform transition-transform duration-300 hover:scale-150" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                    <img alt="Profile picture of a community member" className="w-24 h-24 rounded-full border border-gray-700 transform transition-transform duration-300 hover:scale-150" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                    <img alt="Profile picture of a community member" className="w-24 h-24 rounded-full border border-gray-700 transform transition-transform duration-300 hover:scale-150" src="https://randomuser.me/api/portraits/women/4.jpg"/>
                    <img alt="Profile picture of a community member" className="w-24 h-24 rounded-full border border-gray-700 transform transition-transform duration-300 hover:scale-150" src="https://randomuser.me/api/portraits/men/5.jpg"/>
                    <img alt="Profile picture of a community member" className="w-24 h-24 rounded-full border border-gray-700 transform transition-transform duration-300 hover:scale-150" src="https://randomuser.me/api/portraits/women/6.jpg"/>
                    <img alt="Profile picture of a community member" className="w-24 h-24 rounded-full border border-gray-700 transform transition-transform duration-300 hover:scale-150" src="https://randomuser.me/api/portraits/men/7.jpg"/>
                </div>
            </div>
        </div>
    );
};

export default Community;