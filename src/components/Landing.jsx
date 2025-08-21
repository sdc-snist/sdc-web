
import { Calendar, Mail } from "lucide-react";
import sdcImage from "../assets/sdc1.png";

const Landing = () => {
  return (
  <section className="section relative overflow-hidden min-h-[80vh] flex items-center justify-center pt-1 mt-[-1.5rem] md:mt-0">
      <div className="absolute inset-0 bg-[var(--color-bg)] opacity-100 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 py-6 px-4">
        {/* Left Content */}
        <div className="max-w-2xl space-y-8 text-center lg:text-left">
          <p className="text-[var(--color-primary)] font-bold text-lg uppercase tracking-widest mb-2">Elevate your skills with SDC!</p>
          <h1 className="text-4xl xs:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            <span className="bg-gradient-to-r from-[#ff4c4c] via-[#ff6b6b] to-white bg-clip-text text-transparent">
              Empowering <span className="text-white">student developers</span>
            </span>
            <br className="hidden md:block" />
            <span className="text-white">through collaboration & learning.</span>
          </h1>
          <p className="hidden md:block text-[var(--color-text-muted)] text-lg lg:text-xl mb-6">
            SDC is a community of passionate student developers dedicated to learning, building, and innovating together. We foster collaboration, organize tech events, and provide a platform to grow skills and network with like-minded peers.
          </p>
          {/* Email Input */}
          <div className="flex items-center bg-[var(--color-card)] rounded-full overflow-hidden w-full max-w-md mx-auto lg:mx-0 shadow-lg border border-[var(--color-border)]">
            <Mail className="text-[var(--color-primary)] pl-3 h-10 w-10" />
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full text-white bg-transparent focus:outline-none placeholder-[var(--color-text-muted)]"
            />
            <a className="btn ml-2">Send</a>
          </div>
          <p className="text-[var(--color-primary)] font-bold text-2xl lg:text-3xl mt-4">#LearnDevelopShare</p>
        </div>
        {/* Right Content: Stats Cards */}
        <div className="flex flex-col gap-6 w-full max-w-md">
          <div className="flex gap-6">
            <div className="card flex-1 flex flex-col items-center justify-center">
              <Calendar className="text-[var(--color-primary)] h-8 w-8 mb-2" />
              <div className="stat">50+</div>
              <div className="stat-label">Events</div>
            </div>
            <div className="card flex-1 flex flex-col items-center justify-center">
              <div className="stat">10K+</div>
              <div className="stat-label">Community Members</div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="card flex-1 flex flex-col items-center justify-center">
              <div className="stat">20+</div>
              <div className="stat-label">College Partners</div>
            </div>
            <div className="card flex-1 flex items-center gap-3">
              <img src={sdcImage} className="w-10 h-10 rounded-full border-2 border-[var(--color-primary)]" alt="Member" />
              <div>
                <div className="font-bold text-white text-base">Rahul Misala <span className="bg-[var(--color-primary)] text-white text-xs px-2 py-0.5 rounded-full ml-2">Member</span></div>
                <div className="text-[var(--color-text-muted)] text-xs">Student at SNIST</div>
                <div className="flex text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
