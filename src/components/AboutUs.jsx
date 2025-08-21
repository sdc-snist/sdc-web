
import sdcGroup from "../assets/sdcGroup.png";

const AboutUs = () => {
  return (
  <section className="section section-alt py-20">
      {/* About Us Heading */}
      <div className="text-center mb-6">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2 leading-tight">
          About Us
        </h2>
      </div>
      {/* Mission Headline */}
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-2xl font-extrabold text-white mb-3">
          <span className="text-[var(--color-primary)] text-4xl md:text-6xl align-middle">SDC</span>
          <span className="align-middle"> — a mission to empower student developers across India</span>
        </h3>
        <p className="text-2xl text-[var(--color-text-muted)] max-w-xl mx-auto">
          Building a nationwide network of skilled, innovative students ready to tackle real-world challenges.
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-center mb-14 px-2">
        {[{stat:'1500+',label:'Members'},{stat:'60+',label:'Events'},{stat:'₹10 Cr+',label:'Impact'},{stat:'2000+',label:'Participants'}].map((item, i) => (
          <div key={i} className="card flex flex-col items-center justify-center w-full h-40 md:w-48 md:h-48 aspect-square p-4 text-center">
            <div className="stat break-words leading-tight text-4xl md:text-6xl">{item.stat}</div>
            <div className="stat-label break-words leading-tight text-base md:text-xl mt-2">{item.label}</div>
          </div>
        ))}
      </div>

      {/* SDC Group Image Full Width */}
      <div className="w-full flex justify-center items-center mb-16 px-4 md:px-12 lg:px-24">
        <img
          src={sdcGroup}
          alt="SDC Group"
          className="rounded-2xl shadow-2xl w-full max-w-6xl h-auto object-cover border-4 border-[var(--color-card)]"
        />
      </div>

      {/* Contact & Socials */}
      {/* <div className="text-center mt-12">
        <h4 className="text-xl font-bold text-white mb-2">Contact Us</h4>
        <a href="mailto:team@sdc.com" className="text-[var(--color-primary)] font-semibold text-lg">team@sdc.com</a>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-[var(--color-primary)] font-bold hover:underline">Instagram</a>
          <a href="#" className="text-[var(--color-primary)] font-bold hover:underline">LinkedIn</a>
          <a href="#" className="text-[var(--color-primary)] font-bold hover:underline">YouTube</a>
        </div>
      </div> */}
    </section>
  );
};

export default AboutUs;
