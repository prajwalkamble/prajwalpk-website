import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] text-center py-4">
      <div className="container mx-auto p-4 text-md">
        <p className="text-gray-100 dark:text-gray-100">
          &#169; {currentYear} <span className="font-bold">Prajwal Kamble.</span> All rights reserved.
        </p>
        <p className="text-gray-100 dark:text-gray-100 mt-2">
          Developed by <a
            href=""
            className="relative text-[var(--primaryColor)] font-bold before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-[var(--primaryColor)] before:transition-all before:duration-250 hover:before:w-full"
          >
            Prajwal Kamble
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
