import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import BannerAuth from "../assets/banner-auth.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div
        className={`min-h-screen grid grid-cols-1 lg:grid-cols-2 
        bg-gradient-to-br 
        ${
          darkMode
            ? "from-[#090909] via-[#0f1d2c] to-[#000000]"
            : "from-white via-[#aed5ff] to-white"
        }`}
      >
        <div className="w-full p-10 flex flex-col">
          {/* Header Auth */}
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="text-2xl font-semibold">
                <Link to="/" className="text-gray-900 dark:text-white">
                  <span className="text-blue-600">SEANO</span> PORTAL
                </Link>
              </h1>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-2 py-2 rounded-lg shadow-xl text-lg transition cursor-pointer
    bg-white text-gray-900 hover:bg-gray-300
    dark:bg-black dark:text-white dark:hover:bg-gray-800"
            >
              {darkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
            </button>
          </div>
          {/* End Header Auth */}

          {/* Form */}
          <div className="flex justify-center h-full flex-col items-center pt-10">
            <div className="w-full xl:w-3/5 max-w-lg">
              <div className="flex flex-col gap-2 mb-6">
                <h1 className="font-medium text-4xl text-gray-900 dark:text-white">
                  Welcome!
                </h1>
                <h2 className="font-light text-gray-700 dark:text-gray-300">
                  Login to Seano Portal to monitor your{" "}
                  <a href="#" className="text-blue-500 font-semibold">
                    USV
                  </a>
                  .
                </h2>
              </div>

              <a
                href="#"
                className="bg-[#111111] text-white w-full justify-center py-2 px-3 rounded-xl flex items-center gap-3 mt-5 hover:bg-[#222222] transition-all transition-duration-300"
              >
                <FcGoogle size={24} />
                Sign In with Google
              </a>

              <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-gray-700"></div>
                <span className="px-4 text-black dark:text-gray-400 text-sm">
                  or
                </span>
                <div className="flex-grow h-px bg-gray-700"></div>
              </div>
            </div>

            <form
              action=""
              className="w-full xl:w-3/5 max-w-lg flex flex-col gap-4"
            >
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="" className="text-black dark:text-white">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full border-1 rounded-xl py-2 px-3 border-gray-700 text-black dark:text-white"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="" className="text-black dark:text-white">
                  Password
                </label>
                <input
                  type="text"
                  className="w-full border-1 rounded-xl py-2 px-3 border-gray-700 text-black dark:text-white"
                />
              </div>
              <button className="bg-blue-600 text-white py-2 rounded-xl mt-4 cursor-pointer hover:bg-blue-700 transition-all transition-duration-300">
                Log In
              </button>
              <p className="text-black dark:text-gray-400 text-sm text-center">
                Don't have an account?{" "}
                <Link to="/auth/register" className="text-blue-600">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
          {/* End Form */}
        </div>
        <div className="justify-center items-center hidden lg:flex">
          <div
            className="relative w-[500px] h-[600px] rounded-2xl filter bg-cover bg-center "
            style={{ backgroundImage: `url(${BannerAuth})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl"></div>

            <div className="absolute bottom-10 left-10">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-semibold text-white">
                  Track your USV
                </h1>
                <p className="text-gray-400 text-sm max-w-xs">
                  Real-time monitoring for your autonomous missions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
