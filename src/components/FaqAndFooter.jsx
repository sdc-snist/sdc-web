import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white text-gray-900">
            <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Frequently</h1>
                    <h2 className="text-4xl font-bold mb-4">asked questions</h2>
                    <p className="mt-4 text-gray-600 text-lg">The FAQ section provides answers to common questions about the event, helping participants understand the rules, registration process, and other essential details.</p>
                </div>
                <div className="mt-8">
                    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <div className="flex justify-between items-center" onClick={() => toggleFAQ(0)}>
                            <div>
                                <h3 className="font-semibold text-xl">What is SDC-SNIST and who can join?</h3>
                                {openIndex === 0 && (
                                    <p className="text-gray-600 mt-2">
                                        SDC (Student Developers Community) is a student-led tech community at SNIST that empowers students through hands-on learning, workshops, hackathons, and mentorship.
                                        📌 Anyone from SNIST, regardless of branch or year, who is passionate about tech, design, or innovation can join.
                                    </p>
                                )}
                            </div>
                            <FaChevronUp className={`text-red-500 ${openIndex === 0 ? '' : 'hidden'}`} />
                            <FaChevronDown className={`text-red-500 ${openIndex === 0 ? 'hidden' : ''}`} />
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <div className="flex justify-between items-center" onClick={() => toggleFAQ(1)}>
                            <div>
                                <h3 className="font-semibold text-xl">How do I become a member of SDC?</h3>
                                {openIndex === 1 && (
                                    <p className="text-gray-600 mt-2">
                                        Simply fill out our registration form during recruitment drives or approach any core team member.
                                        🎯 Bonus: Actively participate in events like bootcamps or workshops to increase your chances of getting noticed!
                                    </p>
                                )}
                            </div>
                            <FaChevronUp className={`text-red-500 ${openIndex === 1 ? '' : 'hidden'}`} />
                            <FaChevronDown className={`text-red-500 ${openIndex === 1 ? 'hidden' : ''}`} />
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <div className="flex justify-between items-center" onClick={() => toggleFAQ(2)}>
                            <div>
                                <h3 className="font-semibold text-xl">Do I need to know coding to join or attend events?</h3>
                                {openIndex === 2 && (
                                    <p className="text-gray-600 mt-2">
                                        Not at all! Many of our events, like UI/UX bootcamps and beginner-friendly workshops (Python, Web Dev), are designed for complete beginners.
                                        🌱 We’re here to help you grow from zero to hero.
                                    </p>
                                )}
                            </div>
                            <FaChevronUp className={`text-red-500 ${openIndex === 2 ? '' : 'hidden'}`} />
                            <FaChevronDown className={`text-red-500 ${openIndex === 2 ? 'hidden' : ''}`} />
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <div className="flex justify-between items-center" onClick={() => toggleFAQ(3)}>
                            <div>
                                <h3 className="font-semibold text-xl">Are these events paid or free?</h3>
                                {openIndex === 3 && (
                                    <p className="text-gray-600 mt-2">
                                        Most SDC events are completely free or come at a very minimal cost, just to cover goodies or logistics.
                                        🎁 You also get swags, certificates, and in some cases, real project opportunities or internships.
                                    </p>
                                )}
                            </div>
                            <FaChevronUp className={`text-red-500 ${openIndex === 3 ? '' : 'hidden'}`} />
                            <FaChevronDown className={`text-red-500 ${openIndex === 3 ? 'hidden' : ''}`} />
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <div className="flex justify-between items-center" onClick={() => toggleFAQ(4)}>
                            <div>
                                <h3 className="font-semibold text-xl">What kind of opportunities can I expect as an active member?</h3>
                                {openIndex === 4 && (
                                    <p className="text-gray-600 mt-2">
                                        As an active participant or volunteer, you’ll get:
                                        <ul className="list-disc ml-6 mt-2">
                                            <li>Leadership roles</li>
                                            <li>Internship and project referrals</li>
                                            <li>Mentorship from industry experts</li>
                                            <li>Exposure to national-level events and collaborations</li>
                                        </ul>
                                        🚀 SDC is the perfect platform to build your tech journey and network beyond the classroom.
                                    </p>
                                )}
                            </div>
                            <FaChevronUp className={`text-red-500 ${openIndex === 4 ? '' : 'hidden'}`} />
                            <FaChevronDown className={`text-red-500 ${openIndex === 4 ? 'hidden' : ''}`} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black text-white mt-12 p-8 m-8 rounded-lg">
                <footer className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className='gap-50'>
                        <h3 className="font-bold text-2xl text-[#E32614E5]">Students Developers Community</h3>
                        <p className="mt-4 text-lg">Empowering students through technical education and collaborative learning opportunities across India.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">Quick Links</h3>
                        <ul className="mt-4 space-y-2 text-lg">
                            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Events</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">Resources</h3>
                        <ul className="mt-4 space-y-2 text-lg">
                            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="flex space-x-4">
                        <FaInstagram className="text-pink-600 text-2xl" />
                        <FaLinkedin className="text-blue-600 text-2xl" />
                        <FaTwitter className="text-blue-600 text-2xl" />
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default FAQPage;