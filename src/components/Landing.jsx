// Shiny text animation CSS class
const shinyClass = "relative inline-block bg-gradient-to-r from-[#ff4c4c] via-white to-[#ff6b6b] bg-[length:300%_100%] bg-clip-text text-transparent animate-shine";


// Typing animation component with square dot cursor
function TypingText({ text, speed = 120, loop = true, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let timeout;
    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else if (loop) {
      timeout = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [index, text, speed, loop]);
  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-2 h-2 align-baseline bg-[var(--color-primary)] ml-1 animate-blink rounded-sm"></span>
    </span>
  );
}


import { Calendar, Mail } from "lucide-react";
import sdcImage from "../assets/sdc1.png";
import useSectionInView from "../hooks/useSectionInView";
import { useEffect, useState } from "react";

function useCountUp(to, duration = 1200, trigger = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const isK = typeof to === 'string' && to.toUpperCase().includes('K');
    const end = isK ? parseInt(to) * 1000 : parseInt(to);
    if (isNaN(end)) return;
    const increment = end / (duration / 16);
    let current = start;
    const step = () => {
      current += increment;
      if (current < end) {
        setCount(Math.floor(current));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    step();
    // eslint-disable-next-line
  }, [to, duration, trigger]);
  if (typeof to === 'string' && to.toUpperCase().includes('K')) {
    return count >= 1000 ? `${Math.floor(count / 1000)}K+` : `${Math.floor(count / 1000)}K+`;
  }
  return count >= to ? `${to}+` : `${count}+`;
}

const Landing = () => {
  const [ref, inView] = useSectionInView();
  return (
    <>
  <section ref={ref} className={`section relative overflow-hidden min-h-[90vh] flex flex-col items-center justify-center pt-0 pb-0 sm:pt-12 sm:pb-12 transition-all duration-1000 ${inView ? 'animate-fade-slide' : 'opacity-0 translate-y-10'}`}> 
        <div className="absolute inset-0 bg-[var(--color-bg)] opacity-100 z-0"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-2 sm:px-8 pb-0">
          <h1
            className="w-full text-center font-extrabold text-white text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] leading-[1.08] mb-0 tracking-tight"
            style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '-0.03em' }}
          >
            We <span className={shinyClass}>empower</span> students<br className="hidden sm:block" />
            with <span className={shinyClass + " italic"}>collaboration</span>,<br className="hidden sm:block" />
            learning & new skills.
          </h1>
          <div className="w-full flex flex-col md:flex-row items-center justify-center mt-2 mb-0">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-1 mt-10 md:mt-0">
              <a
                className="btn bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-black font-bold text-xl px-10 py-4 rounded-xl shadow-xl transition-all duration-200 mt-8"
                style={{ color: '#000' }}
                href="https://docs.google.com/forms/d/e/1FAIpQLSdy6mWBc9lSZockABrJkKhEXVx3beMktihwfx-uHf_tTC6O0g/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Community
              </a>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right text-[var(--color-text-muted)] text-base md:text-lg font-normal md:pl-8 md:order-2 order-1 mt-8 md:mt-0">
              Join a vibrant community where you <span className="text-[var(--color-primary)]">collaborate</span>, <span className="text-[var(--color-primary)]">learn</span>, and <span className="text-[var(--color-primary)]">build new skills</span> for the future.
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-center gap-12 mt-16 mb-0">
            <div className="flex-1 flex flex-col items-center">
              <div className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-2">{useCountUp(1500, 1200, inView)}</div>
              <div className="text-base sm:text-lg md:text-xl text-[var(--color-text-muted)]">Members</div>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-2">{useCountUp(60, 1200, inView)}</div>
              <div className="text-base sm:text-lg md:text-xl text-[var(--color-text-muted)]">Events</div>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-2">{useCountUp('15K', 1200, inView)}</div>
              <div className="text-base sm:text-lg md:text-xl text-[var(--color-text-muted)]">Students Impacted</div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Landing;
