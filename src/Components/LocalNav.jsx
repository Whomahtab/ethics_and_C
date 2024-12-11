import React, { useState } from "react";

const ToggleNavIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const LocalNav = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav((prev) => !prev);
  };

  return (
    <div className="w-full lg:mx-auto  lg:w-3/5 border-b  lg:bg-transparent ">
      <div
        className={
          toggleNav
            ? "Ethics-and-Compliance1 bg-white px-3 lg:px-0 inter py-4 relative "
            : "Ethics-and-Compliance2 px-3 lg:px-0 inter py-4 relative lg:border-0 border-b border-gray-300 "
        }
      >
        <div className="localNav-Menu-Items flex w-full justify-between items-center">
          <div className="page-title text-lg font-medium lg:text-[21px]	">
            Ethics and Compliance
          </div>

          <div
            className={`${
              toggleNav ? "iconRotate" : "iconDefault"
            } lg:hidden transition-transform duration-300`}
            onClick={handleToggleNav}
          >
            <ToggleNavIcon />
          </div>
          {/* for desktop */}
          <ul className="hidden  lg:flex  text-xs text-neutral-500 gap-5 ">
            <li className="">
              <a href="">Training</a>
            </li>
            <li className="">
              <a href="">Policies</a>
            </li>
            <li className="">
              <a href="">Third Parties</a>
            </li>
            <li className="">
              <a href="">Speak Up</a>
            </li>
          </ul>
          {/* End..for desktop */}

          <ul
            className={
              toggleNav
                ? "block localNavItems absolute top-[3rem] bg-white px-8 text-sm left-0 w-full font-light pt-6 pb-8 "
                : "hideLocalNavItems hidden"
            }
          >
            <li className="py-2 border-b">
              <a href="">Training</a>
            </li>
            <li className="py-2 border-b">
              <a href="">Policies</a>
            </li>
            <li className="py-2 border-b">
              <a href="">Third Parties</a>
            </li>
            <li className="py-2 border-b">
              <a href="">Speak Up</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LocalNav;

// ul.block.absolute.top-\[5rem\] {
//   background: #fff;
//   width: 100%;
//   left: 0;
//   padding: 0px 30px;
// }
