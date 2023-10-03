import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="navbar rounded backdrop-blur-sm shadow-lg fixed top-0 w-full z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow backdrop-blur rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/userevents">My Events</Link>
            </li>
            <li>
              <a>Calendar</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className="rounded">
            <Image
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              height={50}
              width={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
