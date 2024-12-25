import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { TbMenu3 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function PopupMenu() {
  return (
    <Popover className="relative">
      <PopoverTrigger className="border-secondary data-[state=open]:bg-sky-2 data-[state=open]:text-black-1 hover:bg-sky-2 hover:text-black-1 bg-transparent text-white" asChild>
        <Button variant="outline"><TbMenu3 className=""/></Button>
      </PopoverTrigger>
      <PopoverContent  className="absolute bg-sky-2   border-secondary-light text-black-1 !left-[-24px]  w-40">
      <ul className="  flex flex-col gap-2 ">
        <li className="flex gap-3  items-center">
          <span className="animate-ping "><span className="w-1 h-1 block rounded-full bg-black-1"></span></span>
          <NavLink
            className={"hover:text-secondary-light transition-all "}
            to={"#home"}
          >
            Home
          </NavLink>
        </li>
        <li className="flex gap-3  items-center">
        <span className=" animate-ping"><span className="w-1 h-1 block rounded-full bg-black-1"></span></span>

          <NavLink
            className={"hover:text-secondary-light transition-all "}
            to={"#about"}
          >
            About
          </NavLink>
        </li>
        <li className="flex gap-3  items-center">
        <span className=" animate-ping"><span className="w-1 h-1 block rounded-full bg-black-1"></span></span>
          <NavLink
            className={"hover:text-secondary-light transition-all "}
            to={"#works"}
          >
            Works
          </NavLink>
        </li>
        <li className="flex gap-3  items-center">
        <span className=" animate-ping"><span className="w-1 h-1 block rounded-full bg-black-1"></span></span>
          <NavLink
            className={"hover:text-secondary-light transition-all "}
            to={"#service"}
          >
            Service
          </NavLink>
        </li>
        <li className="flex gap-3  items-center">
        <span className=" animate-ping"><span className="w-1 h-1 block rounded-full bg-black-1"></span></span>
          <NavLink
            className={"hover:text-secondary-light transition-all "}
            to={"#contact"}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      </PopoverContent>
    </Popover>
  )
}


export default PopupMenu