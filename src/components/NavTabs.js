import React from "react";
import { Link } from "react-router-dom";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/about"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      {/* <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li> */}
      <li className="nav-item">
        <Link
          to="/discover"
          className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
        >
          Discover
        </Link>
      </li>
      {/* <li className="nav-item">
        <a
          href="#discover"
          onClick={() => props.handlePageChange("Discover")}
          className={props.currentPage === "Discover" ? "nav-link active" : "nav-link"}
        >
          Discover
        </a>
      </li> */}
      <li className="nav-item">
        <Link
          to="/search"
          className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
        >
          Search
        </Link>
      </li>
      {/* <li className="nav-item">
        <a
          href="#search"
          onClick={() => props.handlePageChange("Search")}
          className={props.currentPage === "Search" ? "nav-link active" : "nav-link"}
        >
          Search
        </a>
      </li> */}
    </ul>
  );
}

export default NavTabs;
