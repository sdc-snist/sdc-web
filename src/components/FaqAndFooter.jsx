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
                <div className='pt-20'>
                    <h1 className="text-4xl font-bold mb-2">Frequently</h1>
                    <h2 className="text-4xl font-bold mb-4">asked questions</h2>
                    <p className="mt-4 text-gray-600 text-lg">The FAQ section provides answers to common questions about the event, helping participants understand the rules, registration process, and other essential details.</p>
                </div>
                <div className="mt-8">
                    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <div className="flex justify-between items-center" onClick={() => toggleFAQ(0)}>
                            <div>
                                <h3 className="font-semibold text-xl">How can I join SDC?</h3>
                                {openIndex === 0 && <p className="text-gray-600 mt-2">You can join SDC by registering through our website or attending one of our events.</p>}
                            </div>
                            <FaChevronUp className={`text-red-500 ${openIndex === 0 ? '' : 'hidden'}`} />
                            <FaChevronDown className={`text-red-500 ${openIndex === 0 ? 'hidden' : ''}`} />
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <div className="flex justify-between items-center" onClick={() => toggleFAQ(1)}>
                            <div>
                                <h3 className="font-semibold text-xl">Do we get any discounts on SDC events?</h3>
                                {openIndex === 1 && <p className="text-gray-600 mt-2">Yes, members get discounts on SDC events.</p>}
                            </div>
                            <FaChevronUp className={`text-red-500 ${openIndex === 1 ? '' : 'hidden'}`} />
                            <FaChevronDown className={`text-red-500 ${openIndex === 1 ? 'hidden' : ''}`} />
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <div className="flex justify-between items-center" onClick={() => toggleFAQ(2)}>
                            <div>
                                <h3 className="font-semibold text-xl">What are the benefits of being a member?</h3>
                                {openIndex === 2 && <p className="text-gray-600 mt-2">Members get access to exclusive resources, events, and networking opportunities.</p>}
                            </div>
                            <FaChevronUp className={`text-red-500 ${openIndex === 2 ? '' : 'hidden'}`} />
                            <FaChevronDown className={`text-red-500 ${openIndex === 2 ? 'hidden' : ''}`} />
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
                    <div className='ml-20'>
                        <h3 className="font-bold text-xl ">Quick Links</h3>
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
                    <div className="flex space-x-4 mb-8">
                        <a href="https://www.instagram.com/sdc.snist?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-red-600 text-2xl" />
                        </a>
                        <a href="https://www.linkedin.com/company/sdc-snist-student-chapter/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Blcxgm63dTsmhrUGTJumAIA%3D%3D" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-red-600 text-2xl" />
                        </a>
                        <a href="https://twitter.com/SDC_SNIST" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-red-600 text-2xl" />
                            
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default FAQPage;