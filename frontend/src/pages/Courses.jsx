import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Search, Zap, Award, Users, ArrowUpRight, Plus } from "lucide-react";
import FloatingAIBot from "../components/FloatingAIBot.jsx";

const continueItems = [
  {
    tag: "Development",
    title: "Full Stack Web Dev",
    mod: "Module 4: React Advanced Patterns",
    pct: 45,
    meta: "12/28 Modules",
  },
  {
    tag: "Data Science",
    title: "Python for ML",
    mod: "Module 7: Neural Networks",
    pct: 82,
    meta: "20/30 Modules",
  },
];

const why = [
  {
    icon: <Zap size={20} />,
    title: "Adaptive Learning",
    desc: "Our AI-driven engine identifies your knowledge gaps and adjusts difficulty in real-time, ensuring you never plateau.",
  },
  {
    icon: <Award size={20} />,
    title: "Industry Certifications",
    desc: "Earn recognized credentials developed in partnership with top technology companies to validate your expertise globally.",
  },
  {
    icon: <Users size={20} />,
    title: "Expert Mentorship",
    desc: "Access a network of industry professionals for 1-on-1 code reviews, career guidance, and live technical workshops.",
  },
];

export default function Courses() {
  return (
    <div className="page">
      <Navbar authed />
      <main className="page-body">
        {/* Search hero */}
        <section className="section" style={{ paddingBottom: 36 }}>
          <div className="container center search-hero">
            <span className="eyebrow">New modules available</span>
            <h1
              style={{
                fontSize: 38,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                margin: "16px 0 4px",
              }}
            >
              Master Your Craft, One Module at a Time
            </h1>
            <div className="field-wrap">
              <div className="search-box" style={{ flex: 1 }}>
                <Search size={16} />
                <input placeholder="What do you want to learn today?" />
              </div>
              <button className="btn btn-primary">Search</button>
            </div>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <Link to="/course" className="btn btn-primary">
                Explore Courses
              </Link>
              <Link to="/roadmaps" className="btn btn-ghost">
                View Roadmaps
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container" style={{ marginBottom: 56 }}>
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

        {/* Continue learning */}
        <section className="container" style={{ marginBottom: 64 }}>
          <div className="panel-head">
            <h3 style={{ fontSize: 20 }}>Continue Learning</h3>
            <Link to="/dashboard" className="green" style={{ fontSize: 14, fontWeight: 600 }}>
              View All Dashboard
            </Link>
          </div>
          <div className="continue-grid">
            {continueItems.map((c) => (
              <div key={c.title} className="card continue-card">
                <div className="cc-top">
                  <span className="badge badge-muted">{c.tag}</span>
                </div>
                <h4>{c.title}</h4>
                <div className="mod">{c.mod}</div>
                <div className="meta">
                  <span>{c.pct}% Complete</span>
                  <span>{c.meta}</span>
                </div>
                <div className="progress">
                  <span style={{ width: `${c.pct}%` }} />
                </div>
                <Link
                  to="/course"
                  className="btn btn-outline btn-block"
                  style={{ marginTop: 16 }}
                >
                  Resume Lesson
                </Link>
              </div>
            ))}
            <Link to="/courses" className="card explore-empty">
              <Plus size={26} />
              <strong style={{ marginTop: 10, color: "var(--text)" }}>Explore More</strong>
              <span style={{ fontSize: 13 }}>Enroll in a new track to expand your skill set</span>
            </Link>
          </div>
        </section>

        {/* Why */}
        <section className="section" style={{ background: "var(--bg-soft)" }}>
          <div className="container">
            <div className="center" style={{ marginBottom: 44 }}>
              <h2 className="section-title">Why LearnPro?</h2>
              <p className="muted" style={{ marginTop: 10 }}>
                Our platform is engineered for deep learning, providing the structure and
                support needed for technical mastery.
              </p>
            </div>
            <div className="grid grid-3">
              {why.map((w) => (
                <div key={w.title} className="card card-hover">
                  <span className="icon-box">{w.icon}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 700, margin: "14px 0 8px" }}>
                    {w.title}
                  </h3>
                  <p className="muted" style={{ fontSize: 14 }}>
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container section">
          <div className="cta-band">
            <div>
              <h2>Ready to start your journey?</h2>
              <p>Join over 1 million learners and get unlimited access to 4,500+ technical courses today.</p>
            </div>
            <div className="actions">
              <Link to="/onboarding" className="btn btn-white btn-lg">
                Get Started for Free <ArrowUpRight size={16} />
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
