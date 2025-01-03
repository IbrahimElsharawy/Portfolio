import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Contact = () => {
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
    formData.append("access_key", "196bc5dd-8714-4f0b-8fe6-ae36bce49cc6");

    // Add sender name
    formData.append("from_name", "Youssef Ali");

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
    <div id="contact" className="bg-sky-2 py-16">
      <div className="container max-sm:px-4">
        <div>
          <div className="text-center">
            <p className="text-lg  font-normal	text-secondary tracking-[7px] mb-3">
              Contact Me
            </p>
            <h2 className="font-jost font-normal text-4xl md:text-5xl xl:text-6xl text-primary	">
              Let’s Start A New Project
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16">
            <div className="lg:space-y-4 max-sm:flex-col max-sm:mx-0 max-sm:items-start max-lg:max-w-[800px] max-lg:mx-auto max-lg:flex max-lg:gap-8 max-lg:mb-8 max-lg:justify-between max-sm:text-left max-lg:text-center ">
              <div className="flex  items-center">
                <div className="flex  max-lg:flex-col max-sm:flex-row  max-lg:items-center  gap-6">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center text-white">
                    <FaLocationDot />
                  </div>
                  <div>
                    <p className="text-xl text-black-1 font-normal ">
                      Location
                    </p>
                    <p className="text-black-2">Saudi Arabia, Jeddah, Sharfeya District</p>
                  </div>
                </div>
              </div>

              <div className="flex  items-center">
                <div className="flex max-lg:flex-col max-sm:flex-row   max-lg:items-center gap-6">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center text-white">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-xl text-black-1 font-normal ">Phone</p>
                    <p className="text-black-2">
                      <a href="https://wa.me/+966530241747" target='_blank'>+966530241747 </a>
                      &&
                      <a href="https://wa.me/+201555760024" target='_blank'> +201555760024 </a>

                    </p>


                  </div>
                </div>
              </div>

              <div className="flex  items-center">
                <div className="flex max-lg:flex-col max-sm:flex-row  max-lg:items-center gap-6">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center text-white">
                    <MdEmail />
                  </div>
                  <div>
                    <p className="text-xl text-black-1 font-normal ">Email</p>
                    <p className="text-black-2">                  <a href="mailto:youssefali909080@gmail.com">youssefali909080@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input type="hidden" name="from_name" value="Mission Control" />

                {/* مجموعة الحقول */}
                <div className="grid grid-cols-1 md:grid-cols-2 !mt-0 gap-4">
                  {/* Your Name */}
                  <div>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Your Email */}
                  <div>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Your Phone */}
                  <div>
                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                          value: /^[0-9]{10,15}$/,
                          message: "Invalid phone number",
                        },
                      })}
                      placeholder="Your Phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Your Subject */}
                  <div>
                    <input
                      type="text"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      placeholder="Your Subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Start writing message here */}
                <div>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    rows="6"
                    placeholder="Start writing message here"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition duration-200"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
