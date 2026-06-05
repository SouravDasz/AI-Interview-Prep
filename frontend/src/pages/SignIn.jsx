import { Link, useNavigate } from "react-router-dom";
import { Zap,  Fingerprint, BrainCircuit, Server, Workflow } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function SignIn() {
  const navigate = useNavigate();
  const go = (e) => {
    e.preventDefault();
    navigate("/onboarding");
  };

  return (
    <div className="auth">
      {/* LEFT */}
      <div className="auth-left">
        <Link to="/" className="brand" style={{ marginBottom: 36 }}>
          <span className="brand-mark">
            <Zap size={17} />
          </span>
          LearnPro
        </Link>
        <h1>
          Master the Future <br />
          of <span className="accent">Tech.</span>
        </h1>
        <p className="muted" style={{ marginTop: 16, maxWidth: 380 }}>
          Join 10M+ learners on the world's most accessible technical platform.
        </p>

        <div className="auth-illus">
          <div className="brain">
            <BrainCircuit size={42} />
          </div>
          <div className="flow-nodes">
            <span className="fn">
              <Server size={20} />
            </span>
            <span className="fn">
              <Workflow size={20} />
            </span>
            <span className="fn">
              <BrainCircuit size={20} />
            </span>
          </div>
          <div className="caption">Continuous Learning Platform</div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="auth-right">
        <h2>Sign In</h2>
        <p className="muted" style={{ marginTop: 6 }}>
          Welcome back to LearnPro.
        </p>

        <div style={{ marginTop: 26 }}>
          <button className="oauth-btn oauth-google" onClick={go}>
            <svg width="17" height="17" viewBox="0 0 48 48">
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.2-.1-2.3-.4-3.5z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 5.1 29.6 3 24 3 16.3 3 9.7 7.3 6.3 14.7z"
              />
              <path
                fill="#4CAF50"
                d="M24 45c5.2 0 9.9-2 13.5-5.2l-6.2-5.3C29.2 36.3 26.7 37 24 37c-5.3 0-9.7-2.6-11.3-7l-6.5 5C9.6 40.6 16.2 45 24 45z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.5l6.2 5.3C40.9 36 44 30.6 44 24c0-1.2-.1-2.3-.4-3.5z"
              />
            </svg>
            Continue with Google
          </button>
          <button className="oauth-btn oauth-github" onClick={go}>
            <FaGithub size={17} /> Continue with GitHub
          </button>
          <button className="oauth-btn oauth-linkedin" onClick={go}>
            <FaLinkedin size={17} /> Continue with LinkedIn
          </button>
        </div>

        <div className="divider">or sign in with instant link</div>

        <form onSubmit={go}>
          <input className="field" type="email" placeholder="Email Address" required />
          <button
            className="btn btn-primary btn-block btn-lg"
            style={{ marginTop: 12 }}
            type="submit"
          >
            Send Magic Link / OTP
          </button>
        </form>

        <button className="biometric" onClick={go}>
          <Fingerprint size={18} /> Fast sign-in via Biometrics
        </button>

        <p className="muted center" style={{ marginTop: 22, fontSize: 14 }}>
          Don't have an account?{" "}
          <Link to="/onboarding" className="green" style={{ fontWeight: 600 }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
