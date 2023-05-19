import React from 'react';
import "./Sidebar.css"
import Logo from '../Images/sp.png';
import { FaHome, FaSearch, FaBook, FaPlus, FaHeart} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar py-5 with-line">
           <div className="logo">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <a href="/">
              <span className="fa fa-home"><FaHome /></span>
              <span>Home</span>
            </a>
          </li>

          <li>
            <a href="/">
              <span className="fa fa-search"><FaSearch /></span>
              <span>Search</span>
            </a>
          </li>

          <li>
            <a href="/">
              <span className="fa fas fa-book"><FaBook /></span>
              <span>Your Library</span>
            </a>
          </li>

          {/* Add more menu items as needed */}
        </ul>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <a href="/">
              <span className="fa fas fa-plus-square"><FaPlus /></span>
              <span>Create Playlist</span>
            </a>
          </li>

          <li>
            <a href="/">
              <span className="fa fas fa-heart"><FaHeart /></span>
              <span>Liked Songs</span>
            </a>
          </li>

          {/* Add more menu items as needed */}
        </ul>
      </div>

      <div className="policies mt-5 pt-3">
        <ul>
          <li>
            <a href="/">Legal</a>
          </li>
          <li>
            <a href="/">Privacy Center</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Cookies</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Ads</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
