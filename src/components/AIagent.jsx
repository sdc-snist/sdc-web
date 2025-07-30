import { useState, useEffect } from 'react';
import {
  Clock,
  Calendar,
  MapPin,
  Users,
  Star,
  ChevronRight,
  Zap,
  Brain,
  Code,
  Rocket
} from 'lucide-react';
import sdcLogo from '../assets/sdc.png';
import speaker1 from '../assets/sdc.png';
import speaker2 from '../assets/sdc.png';

function InstructorCard({ name, title, company, image, expertise }) {
  return (
    <div className="bg-white border border-red-300 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-6">
      <img src={image} alt={name} className="w-24 h-24 rounded-full border-4 border-red-500" />
      <div>
        <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
        <p className="text-lg text-red-600 font-semibold">{title}</p>
        <p className="text-base text-gray-600">{company}</p>
        <p className="text-base mt-2 text-red-500 italic">{expertise}</p>
      </div>
    </div>
  );
}

function ScheduleItem({ time, title, speaker, type }) {
  const typeColors = {
    workshop: 'bg-red-100 border-red-500',
    talk: 'bg-blue-100 border-blue-500',
    break: 'bg-green-100 border-green-500',
    networking: 'bg-purple-100 border-purple-500',
    closing: 'bg-yellow-100 border-yellow-500',
    registration: 'bg-gray-100 border-gray-500'
  };

  const cardColor = typeColors[type] || 'bg-white border-gray-400';

  return (
    <div className={`border-l-8 p-6 rounded-xl shadow-md ${cardColor}`}>
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Clock className="w-6 h-6 text-gray-700" />
          <span className="text-xl font-semibold text-gray-800">{time}</span>
        </div>
        <div className="text-right">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          {speaker && <p className="text-lg text-red-600 italic">by {speaker}</p>}
        </div>
      </div>
    </div>
  );
}

function AIagent() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isRegistered, setIsRegistered] = useState(false);
  const registrationDeadline = new Date('2025-08-04T21:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = registrationDeadline.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRegister = () => {
    setIsRegistered(true);
    setTimeout(() => {
      alert('Registration successful! You will receive a confirmation email shortly.');
    }, 500);
  };

  const speakers = [
    {
      name: 'Dr. Arjun Sharma',
      title: 'AI Research Scientist',
      company: 'Microsoft Research India',
      image: speaker1,
      expertise: 'Large Language Models & Agent Architectures'
    },
    {
      name: 'Priya Patel',
      title: 'Senior ML Engineer',
      company: 'Google DeepMind',
      image: speaker2,
      expertise: 'Multi-Agent Systems & Reinforcement Learning'
    }
  ];

  const schedule = [
    { time: '9:00 AM', title: 'Registration & Welcome', type: 'registration' },
    { time: '9:30 AM', title: 'Introduction to AI Agents', speaker: 'Dr. Arjun Sharma', type: 'talk' },
    { time: '10:30 AM', title: 'Building Your First Agent', speaker: 'Priya Patel', type: 'workshop' },
    { time: '11:30 AM', title: 'Coffee Break', type: 'break' },
    { time: '12:00 PM', title: 'Advanced Agent Architectures', speaker: 'Dr. Arjun Sharma', type: 'talk' },
    { time: '1:00 PM', title: 'Lunch Break', type: 'break' },
    { time: '2:00 PM', title: 'Hands-on: Multi-Agent Systems', speaker: 'Priya Patel', type: 'workshop' },
    { time: '3:30 PM', title: 'Q&A and Networking', type: 'networking' },
    { time: '4:00 PM', title: 'Closing Ceremony', type: 'closing' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <header className="bg-white shadow-sm border-b-2 border-red-500">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <img src={sdcLogo} alt="SDC India" className="h-16 w-16 rounded-full" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SDC India</h1>
              <p className="text-md text-red-600">Student Developer Community</p>
            </div>
          </div>
          <span className="bg-red-600 text-white px-4 py-2 rounded-full text-lg font-semibold">Limited Seats</span>
        </div>
      </header>

      <section className="bg-red-700 text-white py-24 text-center">
        <h1 className="text-6xl font-bold">Build the Future with <span className="text-yellow-300">AI Agents</span></h1>
        <p className="mt-6 text-2xl">Join us for a hands-on AI Agents workshop at SNIST Campus</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6 text-lg">
          <div className="flex items-center justify-center gap-3"><Calendar className="w-6 h-6" /> August 10, 2025</div>
          <div className="flex items-center justify-center gap-3"><MapPin className="w-6 h-6" /> SNIST, Hyderabad</div>
          <div className="flex items-center justify-center gap-3"><Users className="w-6 h-6" /> Only 50 seats</div>
        </div>
      </section>

      <section className="bg-red-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Registration Ends In:</h2>
        <div className="flex justify-center space-x-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white text-red-600 rounded-xl p-6 min-w-[100px]">
              <div className="text-3xl font-bold">{value}</div>
              <div className="uppercase text-md font-medium">{unit}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xl">Deadline: August 4th, 2025 at 9:00 PM</p>
      </section>

      <section className="bg-white py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Secure Your Spot</h2>
        <p className="text-lg text-gray-600 mb-8">Register now and build real-world AI systems</p>
        <button
          onClick={handleRegister}
          disabled={isRegistered}
          className="bg-red-600 text-white px-8 py-4 text-xl rounded-full font-bold hover:bg-red-700"
        >
          {isRegistered ? 'Registered ✔' : 'Register Now - FREE'}
        </button>
        {!isRegistered && <p className="mt-4 text-red-600 font-semibold text-lg">⚡ Only 15 seats remaining!</p>}
      </section>

      <section className="bg-gray-50 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Meet Your Instructors</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {speakers.map((s, i) => (
            <InstructorCard key={i} {...s} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Workshop Schedule</h2>
        </div>
        <div className="max-w-5xl mx-auto space-y-6">
          {schedule.map((item, i) => (
            <ScheduleItem key={i} {...item} />
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16 text-center">
        <img src={sdcLogo} alt="SDC" className="mx-auto h-16 w-16 rounded-full mb-6" />
        <h3 className="text-2xl font-bold">SDC India</h3>
        <p className="text-md text-gray-400 mt-2">Empowering developers across India</p>
        <div className="mt-6 space-x-8 text-lg">
          <a href="#" className="hover:text-red-400">Contact</a>
          <a href="#" className="hover:text-red-400">About</a>
          <a href="#" className="hover:text-red-400">Community</a>
        </div>
        <p className="text-gray-500 mt-10 text-md">© 2025 SDC India</p>
      </footer>
    </div>
  );
}

export default AIagent;
