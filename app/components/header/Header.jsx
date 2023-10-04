import React from "react";
import Link from "next/link";
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";

const Header = () => {
  return (
    <div className="navbar bg-gray-300 z-50 shadow-lg mx-auto">
          <div className="mx-auto">
              <Link className="text-gray-900 mr-8 hover:text-orange-500 transition" href="/">Home</Link>
              <Link className="text-gray-900 ml-8 hover:text-orange-500 transition" href="/userevents">My Events</Link>
          </div>
    </div>
  );
};

export default Header;
