import { useState } from "react";
import { NavLink  } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../img/logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const LinkOpen = ({ isActive }) =>
    isActive
      ? "block py-2 px-3 text-white rounded md:p-0 md:text-blue-500 bg-blue-600 md:bg-transparent"
      : "block py-2 px-3 text-white rounded md:p-0 md:text-gray-50 md:hover:text-blue-500  md:bg-transparent";

  return (
    <>
      <nav className="bg-gray-900 border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="ij designs Logo" />
          </NavLink>
          <div  className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              class="bg-transparent hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              <svg
                class="w-[31px] h-[31px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`w-full md:block md:w-auto ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <NavLink to="/" className={LinkOpen}>
                  Home
                </NavLink>
              </li>
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 rounded md:border-0 md:p-0 md:w-auto text-white md:hover:text-blue-500 focus:text-white border-gray-700 hover:bg-gray-700 md:hover:bg-transparent"
                >
                  Get to know us
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute z-10 font-normal divide-y rounded-lg shadow w-44 bg-gray-700 divide-gray-600 ${
                    dropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <ul className="py-2 text-sm text-gray-300">
                    <li>
                      <NavLink
                        to="/about"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/pricing"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      >
                        Pricing
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <NavLink to="/projects" className={LinkOpen}>
                  Projects
                </NavLink>
              </li>
              <li>
                <Link
                  smooth
                  to="#Contactus"
                  className="block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
