import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import star from "../assets/star.png";
const Footer = () => {
  return (
    <div className="bg-sky-1 relative">
      <div className="container max-sm:px-4 pt-16">
        <div className="grid gap-8 md:grid-cols-2 justify-center  lg:grid-cols-3">
          <div className="flex items-end justify-center">
            <div className="relative">
              <span className="absolute top-[-35px] lg:top-[-60px] left-[-50px]">
                <img src={star} className="w-10 lg:w-12" alt="" />
              </span>

              <h4 className="font-jost text-primary text-4xl">Youssef Ali</h4>
            </div>
          </div>
          <div className=" max-md:flex-col lg:flex-col justify-center  max-lg:items-center gap-3 flex">
            <h4 className="font-jost text-black-1 text-[22px]">Newsletter</h4>
            <form>
              <div className="bg-white border-[#C8CCD4] border flex min-h-9 rounded-sm overflow-hidden min-w-[220px] lg:max-w-[260px] relative">
                <input
                  placeholder="Submit your email"
                  type="text"
                  className="focus-visible:ring-0 text-sm px-2 font-jost  block focus:outline-none"
                />
                <button className="flex items-center   px-3 absolute right-0 top-0 bottom-0 ">
                  <CiMail className="text-[#80DB66] " />
                </button>
              </div>
            </form>
          </div>

          <div className="flex-col max-lg:hidden  gap-3 flex">
            <h4 className="font-jost text-[22px]">Follow Me</h4>

            <ul className="flex items-center gap-3 text-white">
              <li>
                {/* TODO ADD Links Here */}
                <Link
                  to={""}
                  className="w-8 h-8 rounded-full bg-[#1877F2] flex justify-center items-center"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="w-8 h-8 rounded-full bg-[#1DA1F2] flex justify-center items-center"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="w-8 h-8 rounded-full bg-[#0077B5] flex justify-center items-center"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="w-8 h-8 rounded-full bg-[#405DE6] flex justify-center items-center"
                >
                  <CiInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-col lg:hidden items-center mt-8 justify-center gap-3 flex">
          <h4 className="font-jost text-[22px]">Follow Me</h4>

          <ul className="flex items-center gap-3 text-white">
            <li>
              {/* TODO ADD Links Here */}
              <Link
                to={""}
                className="w-8 h-8 rounded-full bg-[#1877F2] flex justify-center items-center"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="w-8 h-8 rounded-full bg-[#1DA1F2] flex justify-center items-center"
              >
                <FaXTwitter />
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="w-8 h-8 rounded-full bg-[#0077B5] flex justify-center items-center"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="w-8 h-8 rounded-full bg-[#405DE6] flex justify-center items-center"
              >
                <CiInstagram />
              </Link>
            </li>
          </ul>
        </div>
        {/* TODO Add Company link */}
        <div className="text-black-2 text-center pb-8 pt-10 text-sm">
          All rights reserved{" "}
          <Link to="" className="font-semibold">
            Code Craft
          </Link>{" "}
          &copy; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
