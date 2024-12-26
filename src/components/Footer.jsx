import React from "react";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import star from "../assets/star.png";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Footer = () => {
    const [result, setResult] = React.useState("");
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
      setResult("Sending....");
  
      const formData = new FormData();
      formData.append("access_key", "94d7f6ba-1daf-4190-951e-29a3d1c11772");
  
      // Add sender name
      formData.append("from_name", "Ibrahim Sharawy");
  
      // Append form data fields
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const responseData = await response.json();
  
      if (responseData.success) {
        setResult("Form Submitted Successfully");
        reset();
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
      } else {
        console.error("Error", responseData);
        setResult(responseData.message);
      }
    };
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
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="bg-white border-[#C8CCD4] border flex min-h-9 rounded-sm overflow-hidden min-w-[220px] lg:max-w-[260px] relative">
                <input
                  placeholder="Submit your email"
                  type="text"
                  className="focus-visible:ring-0 text-sm px-2 font-jost  block focus:outline-none bg-white"
                  {...register("email", { required: true })}
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
                  to={"https://www.facebook.com/share/1QKMJyiCjG/?mibextid=LQQJ4d"}
                  target="_blank"
                  className="w-8 h-8 rounded-full bg-[#1877F2] flex justify-center items-center"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  to={"https://x.com/youssef18980421?s=21"}
                  target="_blank"
                  className="w-8 h-8 rounded-full bg-[#1DA1F2] flex justify-center items-center"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.linkedin.com/in/youssef-ali-%E4%BC%98%E7%91%9F%E5%A4%AB-7b0404272/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}
                  target="_blank"
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
                to={"https://www.facebook.com/share/1QKMJyiCjG/?mibextid=LQQJ4d"}
                  target="_blank"
                className="w-8 h-8 rounded-full bg-[#1877F2] flex justify-center items-center"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
               to={"https://x.com/youssef18980421?s=21"}
                  target="_blank"
                className="w-8 h-8 rounded-full bg-[#1DA1F2] flex justify-center items-center"
              >
                <FaXTwitter />
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.linkedin.com/in/youssef-ali-%E4%BC%98%E7%91%9F%E5%A4%AB-7b0404272/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}
                  target="_blank"
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
