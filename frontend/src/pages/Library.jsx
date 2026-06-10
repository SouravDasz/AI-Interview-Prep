import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {
  Search,
  SlidersHorizontal,
  FileText,
  BookOpen,
  Video,
  Download,
  Clock,
  Save,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import FloatingAIBot from "../components/FloatingAIBot.jsx";

const THUMB1 =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=240&fit=crop";
const THUMB2 =
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=240&fit=crop";
const THUMB3 =
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=240&fit=crop";

const resources = [
  { tag: "PDF", title: "Clean Code Cheatsheet", author: "Robert C. Martin", meta: "5 mins", cta: "Download PDF", thumb: THUMB1, icon: <FileText size={20} /> },
  { tag: "E-BOOK", title: "Python Algorithms E-Book", author: "Magnus Lie Hetland", meta: "420 pgs", cta: "Download EPUB", thumb: THUMB2, icon: <BookOpen size={20} /> },
  { tag: "VIDEO", title: "React Hooks Deep Dive", author: "Dan Abramov", meta: "45 mins", cta: "Save Video", thumb: THUMB3, icon: <Video size={20} /> },
  { tag: "PDF", title: "Tailwind CSS v3 Guide", author: "Adam Wathan", meta: "12 pgs", cta: "Download PDF", icon: <FileText size={20} /> },
  { tag: "PDF", title: "Cybersecurity Essentials", author: "Kevin Mitnick", meta: "8 pgs", cta: "Download PDF", icon: <FileText size={20} /> },
  { tag: "PDF", title: "SQL Optimization Manual", author: "LearnPro Education", meta: "15 mins", cta: "Download PDF", icon: <FileText size={20} /> },
];

const filters = {
  Subject: ["Coding", "Design", "Business"],
  "Media Type": ["PDF Guides", "Video Lectures", "E-Books"],
  Difficulty: ["Beginner", "Intermediate", "Advanced"],
};

export default function Library() {
  return (
    <div className="page">
      <Navbar authed />
      <main className="page-body container" style={{ paddingTop: 36, paddingBottom: 56 }}>
        <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.02em" }}>
          Knowledge Vault
        </h1>
        <p className="muted" style={{ maxWidth: 520, marginTop: 8 }}>
          Access our curated repository of technical guides, industry cheat sheets, and
          comprehensive learning resources.
        </p>

        <div className="lib-search">
          <div className="search-box field" style={{ minWidth: "auto" }}>
            <Search size={16} />
            <input placeholder="Search for assets (e.g., 'React Hooks PDF', 'SQL Cheat Sheet')..." />
          </div>
          <button className="btn btn-primary">Search Library</button>
        </div>

        <div className="chips">
          <span className="dim" style={{ fontSize: 13, fontWeight: 600 }}>
            Popular:
          </span>
          <span className="chip">Python Basics</span>
          <span className="chip">System Design</span>
          <span className="chip">Figma Workflow</span>
        </div>

        <div className="lib-layout">
          {/* Filters */}
          <aside className="filters">
            <h3 style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 16, fontWeight: 700 }}>
              <SlidersHorizontal size={16} /> Filters
            </h3>
            {Object.entries(filters).map(([group, opts]) => (
              <div key={group}>
                <h4>{group}</h4>
                {opts.map((o, idx) => (
                  <label key={o} className="filter-opt">
                    <input type="checkbox" defaultChecked={group === "Subject" && idx === 0} />
                    {o}
                  </label>
                ))}
              </div>
            ))}
            <button className="btn btn-outline btn-block" style={{ marginTop: 18 }}>
              Clear All Filters
            </button>
          </aside>

          {/* Results */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <span className="muted" style={{ fontSize: 14 }}>
                Showing 12 results for "Coding"
              </span>
              <span className="muted" style={{ fontSize: 14 }}>
                Sort by: <strong style={{ color: "var(--text)" }}>Latest Added</strong>
              </span>
            </div>

            <div className="lib-grid">
              {resources.map((r) => (
                <article key={r.title} className="card res-card card-hover">
                  <div className="res-thumb">
                    {r.thumb ? <img src={r.thumb} alt={r.title} /> : r.icon}
                    <span className="res-tag">{r.tag}</span>
                  </div>
                  <div className="res-body">
                    <h4>{r.title}</h4>
                    <div className="author">{r.author}</div>
                    <div className="res-foot">
                      <span className="meta">
                        <Clock size={13} /> {r.meta}
                      </span>
                      <button className="btn btn-primary" style={{ padding: "8px 12px", fontSize: 12.5 }}>
                        {r.cta === "Save Video" ? <Save size={14} /> : <Download size={14} />}
                        {r.cta}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="pagination">
              <button>
                <ChevronLeft size={16} />
              </button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>
      <FloatingAIBot />
      <Footer />
    </div>
  );
}
