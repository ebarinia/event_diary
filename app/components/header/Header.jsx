import React from "react";
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";

// const Header = () => {
//   return (
//     <div className="navbar bg-gray-800/50 rounded-3xl z-50 shadow-lg mt-2 mx-auto">
//           <div className="mx-auto">
//               <Link className="text-white mr-8 hover:text-orange-500 transition" href="/">Home</Link>
//               <Link className="text-white ml-8 hover:text-orange-500 transition" href="/userevents">My Events</Link>
//           </div>
//     </div>
//   );
// };

// export default Header;

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a href="/" className="hover:text-orange-500 transition">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a href="/userevents" className="hover:text-orange-500 transition">
          My Events
        </a>
      </Typography>
    </ul>
  );
  return (
    <div className="max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
          <div className="flex gap-4 justify-center">
            <div className="mr-4 hidden lg:block">{navList}</div>
          </div>
      </Navbar>
      </div>
  );
}

export default Header;
