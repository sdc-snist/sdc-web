function ContactUs() {
    return (
        <div className="bg-white p-8 md:p-16">
            <div className="max-w-7xl mx-auto bg-black p-8 md:flex md:space-x-8 rounded-lg">
                <div className=" bg-[#E32614E5] text-white p-8 md:w-1/3 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="mb-2"><span className="font-bold">Email</span><br />contactscdc@org</p>
                    <p className="mb-2"><span className="font-bold">Location</span><br />SNIST, Hyderabad, 501301</p>
                    <p className="mb-2"><span className="font-bold">Phone</span><br />+91 9876543210</p>
                    <p className="mb-2"><span className="font-bold">Social Media</span><br />Twitter Instagram Linkedin</p>
                </div>
                <div className="bg-black text-white p-8 md:w-2/3 rounded-lg">
                    <h2 className="text-4xl font-bold mb-4">Get <span className="text-red-600">in</span> Touch</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="full-name">Full Name</label>
                            <input className="w-full p-2 border border-gray-300 bg-black text-white rounded" type="text" id="full-name" name="full-name" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="email">Email Address</label>
                            <input className="w-full p-2 border border-gray-300 bg-black text-white rounded" type="email" id="email" name="email" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="subject">Subject</label>
                            <select className="w-full p-2 border border-gray-300 bg-black text-white rounded" id="subject" name="subject">
                                <option>General Enquiry</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="message">Message</label>
                            <textarea className="w-full p-2 border border-gray-300 bg-black text-white rounded" id="message" name="message" rows="4"></textarea>
                        </div>
                        <button className="bg-red-600 text-white py-2 px-4 rounded">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ContactUs;