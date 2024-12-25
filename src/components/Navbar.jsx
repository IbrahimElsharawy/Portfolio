import { NavLink } from "react-router-dom";
import PopupMenu from "./shared/PopupMenu";

function Navbar() {
  return (
    <div className="bg-primary z-[2] relative">
      <div className=" container max-sm:px-4 relative flex items-center md:justify-center min-h-16 ">
      <ul className=" hidden md:flex gap-8 text-white">
        <li>
          <a
            className={"hover:text-secondary-light transition-all "}
            href={"#home"}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className={"hover:text-secondary-light transition-all "}
            href={"#about"}
          >
            About
          </a>
        </li>
        <li>
          <a
            className={"hover:text-secondary-light transition-all "}
            href={"#work"}
          >
            Works
          </a>
        </li>
        <li>
          <a
            className={"hover:text-secondary-light transition-all "}
            href={"#skills"}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className={"hover:text-secondary-light transition-all "}
            href={"#contact"}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="md:hidden ">
        <PopupMenu />
      </div>
      <div className=" absolute right-0 top-0 bottom-0 flex items-center">
        <button className=" rounded-[5px] border-secondary border max-sm:text-sm text-white px-3 py-2 mr-4 sm:mr-7 uppercase">
          <a href="/public/YoussefAliYoussefCV.pdf" download>download cv</a>
        </button>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
