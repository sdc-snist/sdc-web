import Card from "./Card.jsx";
import TechTalks from "../assets/TechTalks.svg";
import Hackathon from "../assets/hackathon.svg";
import Workshop from "../assets/workshop.svg";

function Activities() {
  return (
    <>
      <div className="flex justify-center text-center items-center mt-10">
        <h2 className="text-4xl items-center font-bold mb-8">
            <span
              className="underline decoration-red-300 underline-offset-4"
              style={{ textDecorationColor: "#E32614E5" }}
            >
              Our Community Activities
            </span>
          </h2>
      </div>
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
