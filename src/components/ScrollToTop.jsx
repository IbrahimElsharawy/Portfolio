import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
    className={`fixed bottom-8 right-8 p-2 border bg-primary text-white  rounded-full opacity-0 transition-opacity  ${
      isVisible ? "opacity-100" : ""
    }`}
    onClick={scrollToTop}
  >
    <FaArrowUp className="text-xl" />
  </button>
    )
}

export default ScrollToTop