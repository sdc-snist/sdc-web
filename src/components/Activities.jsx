import Card from "./Card.jsx";
import TechTalks from "../assets/TechTalks.svg";
import Hackathon from "../assets/hackathon.svg";
import Workshop from "../assets/workshop.svg";


function Activities() {
  return (
    <section className="section section-alt py-16">
      <div className="flex justify-center text-center items-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-2 relative inline-block">
          <span className="pb-2 border-b-4 border-[var(--color-primary)]">Our Community Activities</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        <Card
          img={TechTalks}
          heading="Tech Talks"
          desc="Dive into the latest tech trends and insights with our expert-led Tech Talks, designed to expand your knowledge and spark new ideas."
        />
        <Card
          img={Hackathon}
          heading="Workshops"
          desc="Engage in interactive learning experiences, where you'll collaborate with peers and apply your knowledge to real-world projects."
        />
        <Card
          img={Workshop}
          heading="Hackathons"
          desc="Tackle real-world challenges and develop innovative solutions at our Hackathons, where you'll use technology to make a difference."
        />
      </div>
    </section>
  );
}

export default Activities;
