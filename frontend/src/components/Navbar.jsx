import { Link, NavLink, useNavigate} from "react-router-dom";
import { Bell, Search, Zap } from "lucide-react";

const AVATAR =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces";

export default function Navbar({ search = false, authed = false,landingPage = false, }) {
  const navigate = useNavigate();
const isLoggedIn =localStorage.getItem("isLoggedIn") === "true";

const handleGetStarted = () => {
  const loggedIn = localStorage.getItem("isLoggedIn");
  if (loggedIn === "true") {
    navigate("/dashboard"); // or dashboard
  } else {
    navigate("/onboarding");
  }
};
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">
            <Zap size={17} />
          </span>
          LearnPro
        </Link>
        {!landingPage && (
        <nav className="nav-links">
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/library">Library</NavLink>
          <NavLink to="/roadmaps">Roadmaps</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
        )}
        <div className="nav-right">
  {landingPage ? (
    isLoggedIn ? (
      <>
        <img
          className="avatar"
          src={AVATAR}
          alt="Profile"
        />

        <button
      className="btn btn-primary"
      onClick={handleGetStarted}
      >
  Get Started
    </button>
      </>
    ) : (
      <>
        <Link
          to="/onboarding"
          className="btn btn-outline"
        >
          Login
        </Link>

        <button
      className="btn btn-primary"
     onClick={handleGetStarted}
    >
     Get Started
      </button>
      </>
    )
  ) : (
    <>
      {search && (
        <div className="search-box">
          <Search size={16} />
          <input placeholder="Search..." />
        </div>
      )}

      <button className="icon-btn">
        <Bell size={17} />
      </button>

      <img
        className="avatar"
        src={AVATAR}
        alt="Profile"
      />
    </>
  )}
</div>
      </div>
    </header>
  );
}
