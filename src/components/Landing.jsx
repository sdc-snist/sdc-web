import React from 'react';
import backgroundImage from '../assets/image-2.png';
import { Calendar,Mail } from 'lucide-react';
const Landing = () => {
return (
    <section
        className="b text-white py-16 pt-30 pb-20 px-8 relative overflow-hidden"
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "contain",
        }}
    >
        <div className="absolute inset-0 opacity-20 bg-[url('/grid-bg.png')] bg-cover bg-center z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-2xl space-y-6">
                <p className="text-[#FFEBB5] font-semibold text-lg">Elevate your skills with SDC!</p>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Empowering student developers through collaboration and learning.
                </h1>
                <p className="text-[#FFEBB5] text-base">
                    SDC is a community of passionate student developers dedicated to learning, building, and innovating together.
                    We foster collaboration, organize tech events, and provide a platform to grow skills and network with like-minded peers.
                </p>

                {/* Email Input */}
                <div className="flex items-center bg-white rounded-lg overflow-hidden w-full max-w-md pr-3 transition duration-300 hover:scale-105">
                    <Mail className="text-gray-500 pl-2 h-12 w-12" />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 w-full text-black focus:outline-none"
                    />
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md">Send</button>
                </div>

                {/* Hashtag */}
                <p className="text-red-500 font-semibold text-3xl">#LearnDevelopShare</p>
            </div>

            {/* Right Content */}
            <div className="relative w-full h-96">
                {/* Card 1 */}
                <div
                    className="bg-white text-black p-4 rounded-xl shadow-md flex flex-col items-center absolute transition duration-300 hover:scale-105"
                    style={{
                        top: "40%",
                        left: "10%",
                    }}
                >
                    <div className="flex items-center gap-2">
                        <Calendar className="text-red-500 h-10 w-10" />
                        <p className="text-red-500 text-5xl font-bold">25+</p>
                    </div>
                    <p className="font-semibold text-4xl">Events</p>
                </div>

                {/* Card 2 */}
                <div
                    className="bg-white text-black p-4 pr-8 rounded-xl shadow-md flex flex-col items-center absolute transition duration-300 hover:scale-105"
                    style={{
                        top: "1%",
                        left: "55%",
                    }}
                >
                        <div className="text-black text-lg font-medium">❤️Followers</div>
                        <p className="text-5xl font-bold ">1.5K+</p>
                    
                    <p className="text-xs text-black font-bold">
                        <span className="text-green-500">15%</span> increase in last 2 weeks
                    </p>
                </div>

                {/* Card 3 */}
                <div
                    className="bg-white text-black p-4 rounded-xl shadow-md flex flex-col items-center absolute transition duration-300 hover:scale-105"
                    style={{
                        top: "60%",
                        left: "90%",
                    }}
                >
                    <p className="text-red-500 text-4xl font-bold pl-5 pr-5">100+</p>
                    <p className="font-semibold text-black text-m" >College Partners</p>
                </div>

                {/* Card 4 */}
                <div
                    className="bg-white text-black p-4 rounded-xl shadow-md flex items-center gap-4 absolute transition duration-300 hover:scale-105"
                    style={{
                        top: "90%",
                        left: "30%",
                    }}
                >
                    <div className="bg-gray-300 w-12 h-12 rounded-full"></div>
                    <div>
                        <p className="font-semibold">
                            Mani Krishna{" "}
                            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">
                                Member
                            </span>
                        </p>
                        <p className="text-sm">Student at SNIST</p>
                        <div className="flex text-yellow-400">
                            <span>⭐️⭐️⭐️⭐️⭐️</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
};

export default Landing;

