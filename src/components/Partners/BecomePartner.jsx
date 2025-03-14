const BecomePartner = () => {
  return (
    <div className="bg-black text-white  text-center mt-8 m-8 py-10 rounded-lg">
      <h2 className="text-3xl font-bold">Become our Partner</h2>
      <p className="text-gray-400 pt-3">
        Join our growing network of educational institutions and organizations.
      </p>
      <div className="flex justify-center gap-6 mt-6 m-5">
        <div className="bg-gray-700 px-6 py-3 rounded-lg">100+ Partner Institutions</div>
        <div className="bg-gray-700 px-6 py-3 rounded-lg">25+ Events Conducted</div>
        <div className="bg-gray-700 px-6 py-3 rounded-lg">1.5K+ Students Reached</div>
      </div>
      <button onClick={() => {console.log("clicked")}} type='submit' className="mt-6 bg-red-500  hover:bg-red-700 text-white px-6 py-3 rounded-lg">
        Partner with us
      </button>
    </div>
  );
};

export default BecomePartner;
