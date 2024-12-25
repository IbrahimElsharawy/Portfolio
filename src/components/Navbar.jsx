import { NavLink } from "react-router-dom";
import PopupMenu from "./shared/PopupMenu";

function Navbar() {
  return (
    <div className="bg-primary z-[2] relative">
      <div className=" container max-sm:px-4 relative flex items-center md:justify-center min-h-16 ">
      <ul className=" hidden md:flex gap-8 text-white">
        <li>
          <NavLink
            className={"hover:text-secondary-light transition-all "}
            to={"#home"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"hover:text-secondary-light transition-all "}
            to={"#about"}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"hover:text-secondary-light transition-all "}
            to={"#works"}
          >
            Works
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"hover:text-secondary-light transition-all "}
            to={"#service"}
          >
            Service
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"hover:text-secondary-light transition-all "}
            to={"#contact"}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="md:hidden ">
        <PopupMenu />
      </div>
      <div className=" absolute right-0 top-0 bottom-0 flex items-center">
        <button className=" rounded-[5px] border-secondary border max-sm:text-sm text-white px-3 py-2 mr-4 sm:mr-7 uppercase">
          <a href="src/assets/Youssef Ali Youssef CV.pdf" download>download cv</a>
        </button>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
