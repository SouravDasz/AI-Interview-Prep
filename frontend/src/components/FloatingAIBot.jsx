import { useNavigate } from "react-router-dom";
import "./FloatingAIBot.css";

export default function FloatingAIBot() {
  const navigate = useNavigate();

  return (
    <div
      className="floating-bot"
      onClick={() => navigate("/chat")}
      title="Ask AI Mentor"
    >
      <div className="bot-pulse"></div>

      <div className="robot">
        <div className="robot-head">
          <div className="eyes">
            <span></span>
            <span></span>
          </div>

          <div className="mouth"></div>
        </div>

        <div className="antenna"></div>
      </div>
    </div>
  );
}