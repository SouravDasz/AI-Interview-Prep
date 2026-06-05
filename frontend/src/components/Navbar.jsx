import { Link, NavLink } from "react-router-dom";
import { Bell, Search, Zap } from "lucide-react";

const AVATAR =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces";

export default function Navbar({ search = false, authed = false }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">
            <Zap size={17} />
          </span>
          LearnPro
        </Link>

        <nav className="nav-links">
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/library">Library</NavLink>
          <NavLink to="/roadmaps">Roadmaps</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>

        <div className="nav-right">
          {search && (
            <div className="search-box">
              <Search size={16} />
              <input placeholder="Search courses..." />
            </div>
          )}
          {authed ? (
            <>
              <button className="icon-btn" aria-label="Notifications">
                <Bell size={17} />
              </button>
              <img className="avatar" src={AVATAR} alt="Profile" />
            </>
          ) : (
            <>
              <Link to="/signin" className="btn btn-outline">
                Login
              </Link>
              <Link to="/onboarding" className="btn btn-primary">
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
