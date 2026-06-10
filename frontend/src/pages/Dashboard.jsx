import FloatingAIBot from "../components/FloatingAIBot.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { Download, Share2, BarChart3, Clock, Award, Star, TrendingUp } from "lucide-react";

const kpis = [
  {
    label: "Avg. Test Accuracy",
    value: "88%",
    big: true,
    trend: "↑ 4.2%",
    bar: 88,
    icon: <BarChart3 size={18} />,
  },
  {
    label: "Weekly Study Hours",
    value: "12.5h",
    sub: "avg / week · Top 5% of all active learners",
    icon: <Clock size={18} />,
  },
  {
    label: "Courses Completed",
    value: "14",
    green: true,
    sub: "Certificates earned",
    chips: ["JS", "BE", "PY", "+11"],
    icon: <Award size={18} />,
  },
];

const week = [
  { d: "MON", h: 40 },
  { d: "TUE", h: 62 },
  { d: "WED", h: 78 },
  { d: "THU", h: 50 },
  { d: "FRI", h: 100, peak: true },
  { d: "SAT", h: 44 },
  { d: "SUN", h: 36 },
];

const strengths = [
  { nm: "Algorithms", ds: "Top 2% Globally", badge: "ELITE" },
  { nm: "UI Design", ds: "Advanced Logic", badge: "MASTERY" },
];
const improvements = [
  { nm: "System Design", ds: "Requires 4 more modules", action: "Focus Now" },
  { nm: "Unit Testing", ds: "Average score: 62%", action: "Retake Test" },
];

export default function Dashboard() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="app-main">
        <div className="app-head">
          <div>
            <h1>Learner Dashboard</h1>
            <p>Personal analysis for the 2025 Academic Period.</p>
          </div>
          <div className="head-actions">
            <button className="btn btn-ghost">
              <Download size={16} /> Export PDF
            </button>
            <button className="btn btn-primary">
              <Share2 size={16} /> Share Report
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="kpi-grid">
          {kpis.map((k) => (
            <div key={k.label} className="card kpi">
              <div className="top">
                <span className="label">{k.label}</span>
                <span className="icon-box" style={{ width: 34, height: 34 }}>
                  {k.icon}
                </span>
              </div>
              <div className={`big ${k.green ? "green" : ""}`}>
                {k.value}{" "}
                {k.trend && <span className="trend-up">{k.trend}</span>}
              </div>
              {k.bar && (
                <div className="progress">
                  <span style={{ width: `${k.bar}%` }} />
                </div>
              )}
              {k.sub && <div className="sub">{k.sub}</div>}
              {k.chips && (
                <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
                  {k.chips.map((c) => (
                    <span key={c} className="badge">
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Activity + Mastery */}
        <div className="panel-2">
          <div className="card">
            <div className="panel-head">
              <h3>Weekly Activity</h3>
              <span className="badge badge-muted">Last 7 Days</span>
            </div>
            <div className="bars">
              {week.map((b) => (
                <div key={b.d} className={`bar ${b.peak ? "peak" : ""}`}>
                  <div className="fill" style={{ height: `${b.h}%` }} />
                  <span>{b.d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="panel-head">
              <h3>Subject Mastery</h3>
            </div>
            <div className="radar">
              <svg width="220" height="200" viewBox="0 0 220 200">
                {[1, 0.66, 0.33].map((s, i) => (
                  <polygon
                    key={i}
                    points={pentagon(110, 100, 80 * s)}
                    fill="none"
                    stroke="var(--border)"
                  />
                ))}
                <polygon
                  points={pentagon(110, 100, 80, [0.85, 0.7, 0.9, 0.6, 0.8])}
                  fill="var(--green-soft)"
                  stroke="var(--green-bright)"
                  strokeWidth="2"
                />
                <text x="110" y="14" fill="var(--text-dim)" fontSize="10" textAnchor="middle">
                  FRONTEND
                </text>
                <text x="210" y="92" fill="var(--text-dim)" fontSize="10" textAnchor="end">
                  DESIGN
                </text>
                <text x="178" y="190" fill="var(--text-dim)" fontSize="10" textAnchor="middle">
                  BACKEND
                </text>
                <text x="42" y="190" fill="var(--text-dim)" fontSize="10" textAnchor="middle">
                  DATA
                </text>
                <text x="10" y="92" fill="var(--text-dim)" fontSize="10">
                  AI
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Strengths + Improvements */}
        <div className="grid grid-2">
          <div className="card">
            <div className="panel-head">
              <h3>
                <Star size={16} className="green" style={{ verticalAlign: -2, marginRight: 6 }} />
                Your Strengths
              </h3>
            </div>
            {strengths.map((s) => (
              <div key={s.nm} className="list-row">
                <div className="l">
                  <div>
                    <div className="nm">{s.nm}</div>
                    <div className="ds">{s.ds}</div>
                  </div>
                </div>
                <span className="badge">{s.badge}</span>
              </div>
            ))}
          </div>

          <div className="card">
            <div className="panel-head">
              <h3>
                <TrendingUp size={16} style={{ color: "var(--amber)", verticalAlign: -2, marginRight: 6 }} />
                Improvement Areas
              </h3>
            </div>
            {improvements.map((s) => (
              <div key={s.nm} className="list-row">
                <div className="l">
                  <div>
                    <div className="nm">{s.nm}</div>
                    <div className="ds">{s.ds}</div>
                  </div>
                </div>
                <span className="badge badge-amber">{s.action}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <FloatingAIBot />
    </div>
  );
}

function pentagon(cx, cy, r, scale) {
  const pts = [];
  for (let i = 0; i < 5; i++) {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    const rr = scale ? r * scale[i] : r;
    pts.push(`${cx + rr * Math.cos(angle)},${cy + rr * Math.sin(angle)}`);
  }
  return pts.join(" ");
}
