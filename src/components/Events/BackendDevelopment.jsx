import React from 'react';
import SummerbootcampHero from './SummerbootcampHero';
import CountdownTimer from './CountdownTimer';
import fromto from "../../assets/fromto.png";
import roadmap from "../../assets/roadmap.png";

const BackendDevelopment = () => {
    return (
        <div className='min-h-screen bg-[#fcefdc] w-full flex flex-col relative'>
            <SummerbootcampHero />

            <div className='flex flex-col items-center justify-center'>
                <p className='font-hind-madurai font-light text-[28px] w-[1250px] h-[250px] leading-[138%] tracking-[0%] text-center'>
                    Dive into the world of backend development with <span className="text-orange-500 font-light">Backend Summer Bootcamp 2025</span> — a 10-day project-based journey crafted for aspiring developers and curious coders. From JavaScript fundamentals to building full-fledged REST APIs with Node.js, Express, and MongoDB, this bootcamp transforms backend confusion into clarity. You'll learn by doing — coding real-world projects, mastering authentication, and deploying your own backend system. Whether you're starting fresh or upskilling, this summer, build something that matters.
                </p>
            </div>

            <div className='flex flex-col items-center justify-center mt-10 pb-10 bg-orange-500'>
                <div id="timer" className="text-9xl flex items-center font-bold mt-2">
                    <CountdownTimer targetDate={new Date('2025-05-12T00:00:00')} />
                </div>
            </div>

            <div className='flex flex-col items-center justify-center mt-10 mb-25'>
                <button
                    onClick={() => {
                        window.open("https://payments.cashfree.com/forms/backend-development-registration", "_blank");
                    }}
                    className='bg-orange-500 cursor-pointer font-inter text-black border-2 text-3xl font-bold py-2 px-4 rounded-md hover:bg-orange-600 hover:scale-105 transition duration-300'>
                    Register Now
                </button>
            </div>

            <div className='flex flex-col items-center justify-center mt-10'>
                <img src={fromto} alt="Backend Bootcamp Banner" />
            </div>

            <div className='flex flex-col items-center justify-center mt-10 text-5xl font-bold'>
                Roadmap
            </div>

            <div className='flex flex-col items-center justify-center'>
                <img src={roadmap} alt="roadmap" />
            </div>

            {/* <div className="w-full bg-[#fcefdc] text-3xl py-16 px-4 flex justify-center">
                <div className="max-w-5xl w-full grid grid-cols-2 gap-12 text-black">
                    
                    <div className="space-y-20">
                        <div>
                            <h2 className="font-bold text-4xl">Day 1 : JavaScript Basics</h2>
                            <p className="mt-1">Variables (let, const)<br />Functions (regular + arrow)<br />Loops (for, while, forEach)<br />Arrays & Objects</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-4xl">Day 3 : Node.js</h2>
                            <p className="mt-1">Node.js environment<br />CommonJS vs ES Modules<br />Creating a basic server</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-4xl">Day 5 : Web Concepts</h2>
                            <p className="mt-1">Server-Client Communication<br />HTTPS Basics<br />& More…</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-4xl">Day 7 : MongoDB & Mongoose</h2>
                            <p className="mt-1">Callbacks, Promises<br />Async/Await<br />Higher-order functions</p>
                        </div>
                    </div>

                   
                    <div className="space-y-10">
                        <div>
                            <h2 className="font-bold text-4xl">Day 2 : Advanced JavaScript</h2>
                            <p className="mt-1">Callbacks, Promises<br />Async/Await<br />Higher-order functions</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-4xl">Day 4 : Express.js</h2>
                            <p className="mt-1">Express Basics<br />Routing</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-4xl">Day 6 : MiddleWares & Authentication</h2>
                            <p className="mt-1">Middleware<br />Error Handling<br />User auth flow</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-4xl">Day 8 & 9 : Project</h2>
                            <p className="mt-1">Project building</p>
                        </div>
                    </div>

                    <div className="w-full ml-50 text-center text-black font-bold text-4xl">
                        Day 10 : Project Deployment
                    </div>
                </div>
            </div> */}

            <div className='flex flex-col items-center justify-center mt-10 border-2 border-orange-500 bg-[#EDE1CA] ml-100 mr-100 mb-10 p-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-5xl font-bold bg-orange-500 rounded-md p-2'>When ?</h1>
                    <p className='text-3xl font-bold mt-5'>May 12 - 22 , 2025</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='text-5xl font-bold bg-orange-500 rounded-md p-2 mt-10'>Where ?</h1>
                    <p className='text-3xl font-bold mt-5'>Online</p>
                    <p className='text-3xl font-bold'>6:00 PM to 8:00 PM</p>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center mt-10 mb-25'>
                <button
                    onClick={() => {
                        window.open("https://payments.cashfree.com/forms/backend-development-registration", "_blank");
                    }}
                    className='bg-orange-500 cursor-pointer font-inter text-black border-2 text-3xl font-bold py-2 px-4 rounded-md hover:bg-orange-600 hover:scale-105 transition duration-300'>
                    Register Now
                </button>
            </div>
        </div>
    );
};

export default BackendDevelopment;
