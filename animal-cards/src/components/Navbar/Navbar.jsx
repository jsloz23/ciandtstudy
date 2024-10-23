import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaHome, FaWpforms, FaInfoCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li>
            <Link to="/">
              <FaHome />
            </Link>
          </li>
          <li>
            <Link to="/form">
              <FaWpforms />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaInfoCircle />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
