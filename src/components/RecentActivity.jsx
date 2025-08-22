import React from "react";

const RecentActivity = () => {
  return (
    <section className="section section-alt min-h-[80vh] py-20 px-2 sm:px-6 flex flex-col items-center">
      <h2
        className="w-full text-center font-extrabold text-white text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] leading-[1.08] mb-12 tracking-tight italic"
        style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '-0.03em' }}
      >
        <span className="text-[var(--color-primary)] not-italic">Recent</span> Activity
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        {/* Instagram Reels Section */}
        <div className="backdrop-blur-md bg-[var(--color-card)]/80 border border-[var(--color-border)] rounded-3xl shadow-2xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:-translate-y-1">
          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">Instagram Reel 1</h3>
          <iframe src="https://www.instagram.com/reel/DM7xfFAp16T/embed" height="400" width="100%" frameBorder="0" allowFullScreen scrolling="no" title="Instagram Reel 1" className="rounded-xl" style={{background:'#000'}}></iframe>
          <a href="https://www.instagram.com/reel/DM7xfFAp16T/" target="_blank" rel="noopener noreferrer" className="mt-4 text-[var(--color-primary)] font-semibold hover:underline">View on Instagram</a>
        </div>
        <div className="backdrop-blur-md bg-[var(--color-card)]/80 border border-[var(--color-border)] rounded-3xl shadow-2xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:-translate-y-1">
          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">Instagram Reel 2</h3>
          <iframe src="https://www.instagram.com/reel/DM0GxnmJY38/embed" height="400" width="100%" frameBorder="0" allowFullScreen scrolling="no" title="Instagram Reel 2" className="rounded-xl" style={{background:'#000'}}></iframe>
          <a href="https://www.instagram.com/reel/DM0GxnmJY38/" target="_blank" rel="noopener noreferrer" className="mt-4 text-[var(--color-primary)] font-semibold hover:underline">View on Instagram</a>
        </div>
        <div className="backdrop-blur-md bg-[var(--color-card)]/80 border border-[var(--color-border)] rounded-3xl shadow-2xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:-translate-y-1">
          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">Instagram Reel 3</h3>
          <iframe src="https://www.instagram.com/reel/DJOAS4YxhBI/embed" height="400" width="100%" frameBorder="0" allowFullScreen scrolling="no" title="Instagram Reel 3" className="rounded-xl" style={{background:'#000'}}></iframe>
          <a href="https://www.instagram.com/reel/DJOAS4YxhBI/" target="_blank" rel="noopener noreferrer" className="mt-4 text-[var(--color-primary)] font-semibold hover:underline">View on Instagram</a>
        </div>
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        {/* LinkedIn Posts Section */}
        <div className="backdrop-blur-md bg-[var(--color-card)]/80 border border-[var(--color-border)] rounded-3xl shadow-2xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:-translate-y-1">
          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">LinkedIn Post 1</h3>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7310361245449089024?collapsed=1" height="400" width="100%" frameBorder="0" allowFullScreen title="LinkedIn Post 1" className="rounded-xl" style={{background:'#fff'}}></iframe>
          <a href="https://www.linkedin.com/posts/sdc-snist-student-chapter_sdc-x-aleph-zero-blockchain-workshop-activity-7310361246904590336-9rFZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx8_9IBmNKAoaYQw1KKUWwq0WhXnKsfLhg" target="_blank" rel="noopener noreferrer" className="mt-4 text-[var(--color-primary)] font-semibold hover:underline">View on LinkedIn</a>
        </div>
        <div className="backdrop-blur-md bg-[var(--color-card)]/80 border border-[var(--color-border)] rounded-3xl shadow-2xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:-translate-y-1">
          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">LinkedIn Post 2</h3>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7359444172224843776?collapsed=1" height="400" width="100%" frameBorder="0" allowFullScreen title="LinkedIn Post 2" className="rounded-xl" style={{background:'#fff'}}></iframe>
          <a href="https://www.linkedin.com/posts/sdc-snist-student-chapter_sdc-ai-agents-workshop-activity-7359444175500578816-PRg-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx8_9IBmNKAoaYQw1KKUWwq0WhXnKsfLhg" target="_blank" rel="noopener noreferrer" className="mt-4 text-[var(--color-primary)] font-semibold hover:underline">View on LinkedIn</a>
        </div>
        <div className="backdrop-blur-md bg-[var(--color-card)]/80 border border-[var(--color-border)] rounded-3xl shadow-2xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:-translate-y-1">
          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">LinkedIn Post 3</h3>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7356248454299312128?collapsed=1" height="400" width="100%" frameBorder="0" allowFullScreen title="LinkedIn Post 3" className="rounded-xl" style={{background:'#fff'}}></iframe>
          <a href="https://www.linkedin.com/posts/sdc-snist-student-chapter_sdc-sdcindia-backenddevelopment-activity-7356248518417661952-ip-s?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx8_9IBmNKAoaYQw1KKUWwq0WhXnKsfLhg" target="_blank" rel="noopener noreferrer" className="mt-4 text-[var(--color-primary)] font-semibold hover:underline">View on LinkedIn</a>
        </div>
      </div>
      <div className="w-full flex justify-center mt-16">
        <a href="https://x.com/SDC_SNIST" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-semibold hover:underline text-xl md:text-2xl">Follow us on X (Twitter)</a>
      </div>
    </section>
  );
};

export default RecentActivity;
