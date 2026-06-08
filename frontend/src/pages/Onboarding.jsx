import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Briefcase, TrendingUp, Check } from "lucide-react";

const paths = [
  {
    id: "student",
    icon: <GraduationCap size={22} />,
    title: "Student",
    desc: "Learn skills, pass exams, build projects.",
  },
  {
    id: "seeker",
    icon: <Briefcase size={22} />,
    title: "Job Seeker",
    desc: "Practice interviews, follow roadmaps, get hired.",
  },
  {
    id: "pro",
    icon: <TrendingUp size={22} />,
    title: "Professional",
    desc: "Upskill, track analytics, stay updated.",
  },
];

export default function Onboarding() {
  const [selected, setSelected] = useState("student");
  const navigate = useNavigate();
const handleContinue = () => {
  localStorage.setItem("userRole", selected);

  navigate("/signin");
};
  return (
    <div className="onboard">
      <div className="onboard-inner">
        <h1>Choose your learning path</h1>
        <p className="muted" style={{ marginTop: 8 }}>
          Tailor your experience to your goals.
        </p>

        <div className="path-grid">
          {paths.map((p) => (
            <div
              key={p.id}
              className={`card path-card ${selected === p.id ? "selected" : ""}`}
              onClick={() => setSelected(p.id)}
            >
              {selected === p.id && (
                <span className="check">
                  <Check size={18} />
                </span>
              )}
              <span className="icon-box">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <button
      className="btn btn-primary btn-lg"
      onClick={handleContinue}
        >
        Continue
      </button>
      </div>
    </div>
  );
}
