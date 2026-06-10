import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Mic, VideoIcon, Clock, Lightbulb, Send, User } from "lucide-react";
import FloatingAIBot from "../components/FloatingAIBot.jsx";

export default function MockInterview() {
  return (
    <div className="page">
      <Navbar authed />
      <main className="page-body container" style={{ paddingTop: 28, paddingBottom: 48 }}>
        <div className="role-pills">
          <div className="role-pill">
            <div className="k">Role</div>
            <div className="v">Frontend</div>
          </div>
          <div className="role-pill">
            <div className="k">Difficulty</div>
            <div className="v">Senior</div>
          </div>
        </div>

        <div className="interview-grid">
          {/* Video side */}
          <div>
            <div className="video-feed">
              <span className="live-badge">
                <span className="pulse" /> LIVE FEED
              </span>
              <User size={70} />
              <div className="video-controls">
                <span className="vc">
                  <Mic size={18} />
                </span>
                <span className="vc">
                  <VideoIcon size={18} />
                </span>
              </div>
            </div>

            <div className="card transcript">
              <div className="tag">
                <Mic size={13} /> Live Transcription
              </div>
              <p>
                "So, during my last project at TechCorp, we were facing a tight deadline
                for the React migration. There was a disagreement between the lead
                architect and the UI team regarding the component library strategy..."
              </p>
            </div>
          </div>

          {/* Question side */}
          <div className="card q-card">
            <div className="q-head">
              <span className="badge badge-muted">Question 4 of 12</span>
              <span className="meta" style={{ display: "flex", alignItems: "center", gap: 5, color: "var(--green-bright)", fontWeight: 600 }}>
                <Clock size={14} /> 02:47
              </span>
            </div>

            <strong style={{ fontSize: 15 }}>Behavioral Prompt</strong>
            <div className="q-prompt">
              "Describe a time you had to resolve a conflict within your development team.
              What was the situation, how did you intervene, and what was the ultimate
              outcome?"
            </div>

            <div className="ai-suggest">
              <span className="icon-box" style={{ width: 34, height: 34 }}>
                <Lightbulb size={16} />
              </span>
              <div>
                <div className="t">AI Suggestion</div>
                <div className="d">Focus on the STAR method for this answer.</div>
              </div>
            </div>

            <button className="btn btn-primary btn-block btn-lg">
              Submit Interview for Feedback <Send size={16} />
            </button>
            <button className="btn btn-outline btn-block" style={{ marginTop: 12 }}>
              Skip Question
            </button>
          </div>
        </div>
      </main>
      <FloatingAIBot />
      <Footer />
    </div>
  );
}
