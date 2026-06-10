import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {
  ArrowRight,
  Play,
  GitBranch,
  ShieldCheck,
  Library as LibraryIcon,
  LineChart,
  Video,
  Trophy,
  ChevronRight,
  Bot
} from "lucide-react";
import FloatingAIBot from "../components/FloatingAIBot.jsx";

const HERO =
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop&crop=faces";

const features = [
  {
    icon: <GitBranch size={20} />,
    title: "Immersive Learning Paths",
    desc: "Curated journeys with interactive notes and personalized milestones for every skill level.",
    meta: "3,402 Active Notes",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "AI-Proctored Adaptive Tests",
    desc: "Advanced assessment engine that evolves based on your answers to push your boundaries.",
    meta: "Next Session 08:42:15",
  },
  {
    icon: <LibraryIcon size={20} />,
    title: "Smart Library",
    desc: "Access diverse media formats seamlessly. Switch between text, audio, and video instantly.",
    meta: "Offline ready",
  },
  {
    icon: <LineChart size={20} />,
    title: "Predictive AI Analytics",
    desc: "Visualize your progress with radar charts and stay motivated with your 7-day streak.",
    meta: "7 Day Streak 🔥",
  },
  {
    icon: <Video size={20} />,
    title: "AI Video Mock Interviews",
    desc: "Practice with our real-time AI interviewers and get instant feedback on your tone.",
    meta: "Live Feedback Active",
  },
  {
    icon: <Trophy size={20} />,
    title: "Gamified Career Roadmap",
    desc: "A connected node-tree structure that maps your current skills to your dream job.",
    meta: "Unlock tiers",
  },
];

export default function Landing() {
const navigate=useNavigate()
  const handleGetStarted = () => {
  const loggedIn = localStorage.getItem("isLoggedIn");
  if (loggedIn === "true") {
    navigate("/dashboard"); // or dashboard
  } else {
    navigate("/onboarding");
  }
};
  return (
    
    <div className="page">
      <Navbar landingPage={true} />
      <main className="page-body">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">AI-Powered Learning</span>
              <h1>
                Take your time and <br />
                <span className="accent">learn from anywhere</span>
              </h1>
              <p className="lead">
                Unlock professional potential with our premium AI-driven platform.
                Tailored learning paths designed for the ambitious, lifelong learner.
              </p>
              <div className="hero-actions">
                <button 
                onClick={handleGetStarted}
                 className="btn btn-primary btn-lg">
                  Learn Now <ArrowRight size={17} />
                </button>
                <div className="mini-progress">
                  <span className="dot">
                    <Play size={15} />
                  </span>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>Resume Learning</div>
                    <div className="progress pp">
                      <span style={{ width: "68%" }} />
                    </div>
                  </div>
                  <span style={{ fontSize: 12, color: "var(--green-bright)" }}>68%</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-ring">
                <img src={HERO} alt="Learner" />
              </div>
              <div className="float-stat top">
                <div className="num">250k+</div>
                <div className="lbl">Free Courses</div>
              </div>
              <div className="float-stat bottom">
                <div className="num">150k+</div>
                <div className="lbl">Active Students</div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section">
          <div className="container">
            <div className="center" style={{ marginBottom: 44 }}>
              <h2 className="section-title">Our Best Features</h2>
              <div className="title-underline" />
            </div>
            <div className="grid grid-3">
              {features.map((f) => (
                <article key={f.title} className="card card-hover feature-card">
                  <div className="ft-head">
                    <span className="icon-box">{f.icon}</span>
                    <h3>{f.title}</h3>
                  </div>
                  <p>{f.desc}</p>
                  <div className="feature-meta">
                    <span className="green">{f.meta}</span>
                    <ChevronRight size={15} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="container" style={{ paddingBottom: 24 }}>
          <div className="stat-row">
            <div className="item">
              <div className="v">1.2M</div>
              <div className="k">Active Learners</div>
            </div>
            <div className="item">
              <div className="v">4,500+</div>
              <div className="k">Courses</div>
            </div>
            <div className="item">
              <div className="v">98%</div>
              <div className="k">Success Rate</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container section">
          <div className="cta-band">
            <div>
              <h2>Ready to start your journey?</h2>
              <p>
                Join over 1 million learners and get unlimited access to 4,500+
                technical courses today.
              </p>
            </div>
            <div className="actions">
              <Link to="/onboarding" className="btn btn-white btn-lg">
                Get Started for Free
              </Link>
              <Link to="/courses" className="btn btn-dark btn-lg">
                Corporate Plans
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FloatingAIBot />
      <Footer />
    </div>
  );
}
