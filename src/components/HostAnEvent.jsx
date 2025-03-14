export default function HostYourEvent() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-white text-3xl font-bold mb-4">Host an Event with SDC</h2>
          <p className="text-gray-400 mb-6">
            Partner with us to organize impactful technical events at your institution. Join our network of 100+ colleges across India.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-red-600 rounded-md"></div>
              <div>
                <h3 className="text-white text-lg font-semibold">Technical Support</h3>
                <p className="text-gray-400">Complete event management and technical expertise provided by our team.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-red-600 rounded-md"></div>
              <div>
                <h3 className="text-white text-lg font-semibold">Participant Network</h3>
                <p className="text-gray-400">Access to our community of 10,000+ tech enthusiasts across India.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-red-600 rounded-md"></div>
              <div>
                <h3 className="text-white text-lg font-semibold">Sponsorship Support</h3>
                <p className="text-gray-400">Connection with our network of industry partners and sponsors.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-black text-xl font-semibold mb-4">Submit your Proposal</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Institution Name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" />
            <input type="text" placeholder="Contact Person" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" />
            <input type="text" placeholder="Event Type" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" />
            <input type="date" placeholder="Expected Date" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" />
            <textarea placeholder="Additional Details" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" rows="4"></textarea>
            <button type="submit" className="w-full bg-red-600 text-white p-3 rounded-md font-semibold hover:bg-red-700">Submit your Proposal</button>
          </form>
        </div>
      </div>
    </div>
  );
}
