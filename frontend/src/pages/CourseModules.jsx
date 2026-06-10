import Sidebar from "../components/Sidebar.jsx";
import { Link } from "react-router-dom";
import {
  Database,
  Box,
  Code2,
  Hexagon,
  Network,
  TerminalSquare,
  Zap,
  Map,
  ChevronDown,
} from "lucide-react";
import FloatingAIBot from "../components/FloatingAIBot.jsx";

const subjects = [
  { n: 1, icon: <Database size={20} />, name: "DBMS", res: 12, pct: 60 },
  { n: 2, icon: <Box size={20} />, name: "OOPs", res: 15, pct: 60 },
  { n: 3, icon: <Code2 size={20} />, name: "DSA", res: 18, pct: 60 },
  { n: 4, icon: <Hexagon size={20} />, name: "C Programming", res: 10, pct: 60 },
  { n: 5, icon: <Network size={20} />, name: "Computer Networks", res: 14, pct: 60 },
  { n: 6, icon: <TerminalSquare size={20} />, name: "Operating System", res: 12, pct: 60 },
];

const INSTRUCTOR =
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120&h=120&fit=crop&crop=faces";

export default function CourseModules() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="app-main">
        <p className="muted" style={{ fontSize: 14 }}>
          Course: Python Path – Advanced Python Mastery
        </p>
        <h1 style={{ fontSize: 30, fontWeight: 800, margin: "6px 0 8px" }}>
          Advanced Python Mastery
        </h1>
        <p className="muted" style={{ maxWidth: 540, marginBottom: 28 }}>
          Deep dive into memory management, functional programming patterns, and
          high-performance execution.
        </p>

        <div className="course-layout">
          {/* Subjects */}
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>All Subjects</h3>
            {subjects.map((s) => (
              <div key={s.n} className="subject-row">
                <span className="subject-num">{s.n}</span>
                <div className="card subject-card" style={{ width: "100%" }}>
                  <span className="icon-box">{s.icon}</span>
                  <div className="subject-info">
                    <h4>{s.name}</h4>
                    <div className="res">Resources: {s.res}</div>
                    <div className="completion">
                      <span style={{ fontSize: 12, color: "var(--text-dim)" }}>
                        Completion Rate
                      </span>
                      <div className="progress">
                        <span style={{ width: `${s.pct}%` }} />
                      </div>
                      <span className="pct">{s.pct}%</span>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline">View Resources</button>
              </div>
            ))}
          </div>

          {/* Right rail */}
          <aside>
            <div className="card">
              <div className="label" style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--text-dim)", fontWeight: 700, textTransform: "uppercase" }}>
                Your Instructor
              </div>
              <div className="instructor" style={{ marginTop: 14 }}>
                <img src={INSTRUCTOR} alt="Instructor" />
                <div>
                  <div className="nm">Dr. Sarah Chen</div>
                  <div className="role">Senior Software Engineer</div>
                </div>
              </div>
              <p className="quote">
                "Mastering Python isn't just about syntax, it's about thinking in
                structures."
              </p>
            </div>

            <div className="card action-card primary" style={{ marginTop: 16 }}>
              <div>
                <h4>Start Skills Test</h4>
                <p>Measure your Python proficiency</p>
              </div>
              <Zap size={22} color="#eafff4" />
            </div>

            <Link to="/roadmaps" className="card action-card" style={{ marginTop: 16 }}>
              <div>
                <h4>View Python Roadmap</h4>
                <p>See what to explore next</p>
              </div>
              <Map size={22} className="muted" />
            </Link>

            <div className="card" style={{ marginTop: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 700 }}>Your Progress</span>
                <span className="green" style={{ fontWeight: 700 }}>
                  35% Complete
                </span>
              </div>
              <div className="progress" style={{ margin: "12px 0 8px" }}>
                <span style={{ width: "35%" }} />
              </div>
              <span className="muted" style={{ fontSize: 13 }}>
                3 of 9 modules finished
              </span>
            </div>

            <div className="card" style={{ marginTop: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 700 }}>Module 1: System</span>
                <ChevronDown size={16} className="muted" />
              </div>
              <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                <span className="muted" style={{ fontSize: 13 }}>Variables &amp; Naming</span>
                <span className="green" style={{ fontSize: 13, fontWeight: 600 }}>Let's Get Started</span>
                <span className="muted" style={{ fontSize: 13 }}>Conditionals Blocks</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <FloatingAIBot />
    </div>
  );
}
