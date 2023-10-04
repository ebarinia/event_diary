import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="navbar bg-gray-800/50 rounded-3xl z-50 shadow-lg mt-2 mx-auto">
          <div className="mx-auto">
              <Link className="text-white mr-8" href="/">Home</Link>
              <Link className="text-white ml-8" href="/userevents">My Events</Link>
          </div>
    </div>
  );
};

export default Header;
