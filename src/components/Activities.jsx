import Card from "./Card.jsx";
import TechTalks from "../assets/TechTalks.svg";
import Hackathon from "../assets/hackathon.svg";
import Workshop from "../assets/workshop.svg";

function Activities() {
  return (
    <>
      <h1 className="text-center text-3xl bold mt-10 ">
        Our Community Activities
        <div className="w-30 h-[5px] bg-red-500 mx-auto my-2"></div>
      </h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <Card
          img={TechTalks}
          heading="Tech Talks"
          desc="Dive into the latest tech trends and insights with our expert-led Tech Talks, designed to expand your knowledge and spark new ideas"
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
    </>
  );
}

export default Activities;
