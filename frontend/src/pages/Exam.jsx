import { useState } from "react";
import { Flag, ChevronLeft, ChevronRight } from "lucide-react";

const cells = [
  { n: 1, s: "answered-soft" },
  { n: 2, s: "answered" },
  { n: 3, s: "" },
  { n: 4, s: "flagged" },
  { n: 5, s: "" },
  { n: 6, s: "answered" },
  { n: 7, s: "current" },
  { n: 8, s: "" },
  { n: 9, s: "answered" },
  { n: 10, s: "" },
  { n: 11, s: "" },
  { n: 12, s: "flagged" },
  { n: 13, s: "" },
  { n: 14, s: "" },
  { n: 15, s: "" },
  { n: 16, s: "" },
  { n: 17, s: "" },
  { n: 18, s: "" },
  { n: 19, s: "" },
  { n: 20, s: "" },
];

const options = ["O(n)", "O(log n)", "O(n log n)", "O(1)"];

export default function Exam() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="exam-shell">
      {/* Map sidebar */}
      <aside className="exam-side">
        <h3>Examination Map</h3>
        <div className="sub">20 Questions Total</div>

        <div className="q-map">
          {cells.map((c) => (
            <div key={c.n} className={`q-cell ${c.s}`}>
              {c.n}
            </div>
          ))}
        </div>

        <div className="legend">
          <div className="lg">
            <span className="ld" style={{ background: "var(--green)" }} /> Answered
          </div>
          <div className="lg">
            <span className="ld" style={{ background: "var(--surface-3)" }} /> Unvisited
          </div>
          <div className="lg">
            <span className="ld" style={{ background: "var(--amber)" }} /> Flagged
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="exam-main">
        <div className="exam-card">
          <div className="q-meta">
            <span className="badge badge-muted">Question 7 of 20</span>
            <span className="muted" style={{ fontSize: 13, fontWeight: 600 }}>
              Score: 4 Points
            </span>
          </div>

          <div className="exam-q">
            What is the time complexity of a binary search algorithm in the average and
            worst case?
          </div>

          {options.map((o, i) => (
            <div
              key={o}
              className={`option ${selected === i ? "selected" : ""}`}
              onClick={() => setSelected(i)}
            >
              <span className="radio" />
              {o}
            </div>
          ))}

          <div className="exam-foot">
            <div className="grp">
              <button className="btn btn-outline">
                <ChevronLeft size={16} /> Previous
              </button>
              <button className="btn btn-ghost">Skip</button>
            </div>
            <div className="grp">
              <button className="btn btn-outline">
                <Flag size={15} /> Flag Question
              </button>
              <button className="btn btn-primary">
                Next Question <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
