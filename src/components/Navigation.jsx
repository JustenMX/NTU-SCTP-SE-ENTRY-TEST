import React from "react";
// import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navbar bg-emerald-800 dark:bg-emerald-900 text-teal-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-emerald-800 dark:text-teal-100"
          >
            <li>
              <a href="/">Homepage</a>
            </li>
            <li>
              <a href="/QuestionOne">Question 1</a>
            </li>
            <li>
              <a href="/QuestionTwo">Question 2</a>
            </li>
            <li>
              <a href="/QuestionThree">Question 3</a>
            </li>
            <li>
              <a href="/QuestionFour">Question 4</a>
            </li>
            <li>
              <a href="/QuestionFive">Question 5</a>
            </li>
            <li>
              <a href="/QuestionSix">Question 6</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          Justen Manni
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}

export default Navigation;
