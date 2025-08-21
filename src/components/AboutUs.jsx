
import Speech from "../assets/speech.png";

const AboutUs = () => {
  return (
  <section className="section section-alt py-20">
      {/* About Us Heading */}
      <div className="text-center mb-6">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-2 relative inline-block">
          <span className="pb-2 border-b-4 border-[var(--color-primary)]">About Us</span>
        </h2>
      </div>
      {/* Mission Headline */}
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
          <span className="text-[var(--color-primary)]">SDC</span> — a mission to empower student developers across India
        </h3>
        <p className="text-lg md:text-2xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
          Building a nationwide network of skilled, innovative students ready to tackle real-world challenges.
        </p>
      </div>

      {/* Stats Row */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {[{stat:'1500+',label:'Members'},{stat:'60+',label:'Events'},{stat:'₹10 Cr+',label:'Impact'},{stat:'2000+',label:'Participants'}].map((item, i) => (
          <div key={i} className="card flex flex-col items-center justify-center w-32 h-32 aspect-square p-2 text-center">
            <div className="stat break-words leading-tight">{item.stat}</div>
            <div className="stat-label break-words leading-tight text-base">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Founding Story & Vision */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-16">
        <div className="flex flex-col gap-8 w-full max-w-2xl items-center justify-center">
          <div className="card bg-[var(--color-card)] border-l-8 border-[var(--color-primary)] p-10 w-full max-w-2xl text-left">
            <h3 className="text-2xl font-bold text-white mb-2">The Founding Story</h3>
            <p className="text-[var(--color-text-muted)] text-base">
              Inspired by a passion for technology and community, SDC began as a small group of student developers eager to learn, build, and share. Today, we connect thousands of students, foster innovation, and bridge the gap between academia and industry.
            </p>
          </div>
          <div className="card bg-[var(--color-card)] border-l-8 border-[var(--color-primary)] p-10 w-full max-w-2xl text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
            <p className="text-[var(--color-text-muted)] text-base">
              We envision a future where every student has the opportunity to become a developer, innovator, and leader—empowered by a supportive community and real-world experience.
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={Speech}
            alt="Speaker in seminar"
            className="rounded-2xl shadow-2xl w-full max-w-xl min-w-[320px] h-auto object-cover border-4 border-[var(--color-card)]"
          />
        </div>
      </div>

      {/* Contact & Socials */}
      <div className="text-center mt-12">
        <h4 className="text-xl font-bold text-white mb-2">Contact Us</h4>
        <a href="mailto:team@sdc.com" className="text-[var(--color-primary)] font-semibold text-lg">team@sdc.com</a>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-[var(--color-primary)] font-bold hover:underline">Instagram</a>
          <a href="#" className="text-[var(--color-primary)] font-bold hover:underline">LinkedIn</a>
          <a href="#" className="text-[var(--color-primary)] font-bold hover:underline">YouTube</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
