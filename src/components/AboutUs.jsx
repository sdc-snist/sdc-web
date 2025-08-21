
import sdcGroup from "../assets/sdcGroup.png";

const AboutUs = () => {
  return (
  <section className="section section-alt py-20 px-2 sm:px-4">
      {/* About Us Heading */}
  <div className="text-center mb-6 px-1">
        <h2
          className="text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] font-extrabold italic tracking-tight text-white mb-2 leading-tight"
          style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '-0.03em' }}
        >
          About <span className="text-[var(--color-primary)] not-italic">Us</span>
        </h2>
      </div>
      {/* Mission Headline */}
  <div className="text-center mb-10 px-1">
        <h3 className="text-2xl md:text-2xl font-extrabold text-white mb-3">
          <span className="text-[var(--color-primary)] text-4xl md:text-6xl align-middle">SDC</span>
          <span className="align-middle"> — a mission to empower student developers across India</span>
        </h3>
        <p className="text-2xl text-[var(--color-text-muted)] max-w-xl mx-auto">
          Building a nationwide network of skilled, innovative students ready to tackle real-world challenges.
        </p>
      </div>


      {/* Community Description */}
  <div className="mb-14 px-2 sm:px-4 max-w-6xl mx-auto ">
    <p className="text-2xl">
          SDC is a vibrant, inclusive community of student developers, innovators, and tech enthusiasts. We believe in the power of collaboration, hands-on learning, and peer support to unlock every student's potential. Through workshops, events, and real-world projects, we empower our members to grow their skills, build lasting connections, and make a real impact in the tech world. Whether you're just starting out or looking to level up, you'll find inspiration, mentorship, and opportunity at SDC.
        </p>
      </div>

      {/* SDC Group Image Full Width */}
  <div className="w-full flex justify-center items-center mb-16 px-2 sm:px-4 md:px-12 lg:px-24">
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
