
import TechTalks from "../assets/TechTalks.svg";
import Hackathon from "../assets/hackathon.svg";
import Workshop from "../assets/workshop.svg";

const activities = [
  {
    img: TechTalks,
    heading: ["Tech", "Talks"],
    features: [
      "Expert-led sessions",
      "Latest tech trends",
      "Q&A with speakers",
      "Networking opportunities",
    ],
    accent: "from-[#ff4c4c] to-[#ff6b6b]",
  },
  {
    img: Hackathon,
    heading: ["Work", "shops"],
    features: [
      "Hands-on learning",
      "Real-world projects",
      "Peer collaboration",
      "Skill development",
    ],
    accent: "from-[#ff6b6b] to-[#ff4c4c]",
  },
  {
    img: Workshop,
    heading: ["Hack", "athons"],
    features: [
      "Team challenges",
      "Innovative solutions",
      "Mentorship",
      "Exciting prizes",
    ],
    accent: "from-[#ff4c4c] to-[#ff6b6b]",
  },
];

function Activities() {
  return (
    <section className="section section-alt py-16">
      <div className="flex justify-center text-center items-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-2 relative inline-block">
          <span className="bg-gradient-to-r from-[#ff4c4c] to-[#ff6b6b] bg-clip-text text-transparent drop-shadow-lg">
            Our Community
          </span>
          <span className="block text-white">Activities</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {activities.map((act, idx) => (
          <div
            key={idx}
            className={
              `flex flex-col items-center bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl shadow-xl p-8 pt-7 transition-transform duration-300 hover:scale-105 hover:-translate-y-1 relative overflow-hidden`
            }
            style={{ minHeight: '410px' }}
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-black mb-5 shadow-lg border-2 border-[var(--color-primary)]">
              <img src={act.img} alt="activity" className="w-14 h-14 object-contain" />
            </div>
            <h3 className="text-3xl font-extrabold text-center mb-3 tracking-tight">
              <span className={`bg-gradient-to-r ${act.accent} bg-clip-text text-transparent`}>{act.heading[0]}</span>{' '}
              <span className="text-white">{act.heading[1]}</span>
            </h3>
            <ul className="mt-2 space-y-2 text-[1.08rem] text-[var(--color-text-muted)] font-medium w-full max-w-xs mx-auto">
              {act.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Activities;
