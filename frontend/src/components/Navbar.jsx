import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
///navbar/////
    <div className="bg-gradient-to-b from-sky-200 to-transparent ">
      <header className=" p-1 sm:p-3  ">
        <div className="mx-auto max-w-screen-xl  px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
{/* logo */}
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-blue-600" href="#">
                <span className="sr-only">Home</span>
                <img
                  src={logo}
                  alt="logo"
                  className="h-12 w-12  md:h-14 md:w-14 lg:h-20 lg:w-20"
                />
              </a>
            </div>
{/* search bar here */}
            <div className="relative">
              <label htmlFor="Search" className="sr-only">
                {" "}
                Search{" "}
              </label>

              <input
                type="text"
                id="Search"
                placeholder="Search for..."
                className="w-full max-w-3xl rounded-3xl border border-gray-300 py-1 px-2 shadow-sm text-sm sm:pe-7 md:pe-40 lg:pe-60 xl:pe-96 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />

              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </span>
            </div>
{/* home and about  */}
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                <Link to='/'>
                  <li  className="text-gray-500 transition hover:text-blue-500/75">
                      {" "}Home{" "}
                  </li>
                </Link>
                <Link to='/about'>
                  <li  className="text-gray-500 transition hover:text-blue-500/75">
                      {" "}About{" "}
                  </li>
                </Link>
                </ul>
              </nav>
            </div>
{/* buttons */}
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
              <Link to='/signin'>
                <button className="rounded-md bg-sky-600 hover:bg-sky-100 hover:text-sky-500/75 border border-sky-500 lg:px-3 lg:py-2.5 md:px-3 md:py-2.5 text-xs font-light text-white shadow w-full sm:w-auto px-1.5 py-1 md:text-sm md:font-medium lg:font-medium xl:font-medium   text-center">
                  Sign In
                </button>
                </Link>

                <div className="hidden sm:flex">
                <Link to='/signup'>
                  <button className="rounded-md bg-gray-100  hover:text-white hover:bg-sky-600 border border-sky-500 px-3 py-2.5 text-sm font-medium text-sky-600">
                    Sign Up
                  </button>
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
