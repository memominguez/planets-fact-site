"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import iconChevron from "@/public/icon-chevron.svg";

const Navbar = () => {
  // https://www.youtube.com/watch?v=pxxthSFvXFA

  const [isClick, setIsClick] = useState(false);

  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsClick(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [pathname]); 

  return (
    <nav className="bg-blackish w-[375px] relative mx-auto z-10 md:w-[768px] 2xl:w-[1440px]">
      <div className="hidden md:flex md:flex-col items-center p-4 2xl:flex-row 2xl:justify-between 2xl:px-10">
        <div className="md:py-4 lg:py-2">
          <Link
            href="/"
            className="text-white text-3xl font-antonio font-medium"
          >
            THE PLANETS
          </Link>
        </div>

        {/* <div className="md:gap-6 lg:gap-3"> */}
        <div className="md:flex md:gap-5 2xl:gap-3">
          <Link
            href="/mercury"
            className="text-white text-sm font-bold font-league_spartan hover:bg-white hover:text-black rounded-lg p-2"
          >
            MERCURY
          </Link>
          <Link
            href="/venus"
            className="text-white text-sm font-bold font-league_spartan hover:bg-white hover:text-black rounded-lg p-2"
          >
            VENUS
          </Link>
          <Link
            href="/earth"
            className="text-white text-sm font-bold font-league_spartan hover:bg-white hover:text-black rounded-lg p-2"
          >
            EARTH
          </Link>
          <Link
            href="/mars"
            className="text-white text-sm font-bold font-league_spartan hover:bg-white hover:text-black rounded-lg p-2"
          >
            MARS
          </Link>
          <Link
            href="/jupiter"
            className="text-white text-sm font-bold font-league_spartan hover:bg-white hover:text-black rounded-lg p-2"
          >
            JUPITER
          </Link>
          <Link
            href="/saturn"
            className="text-white text-sm font-bold font-league_spartan hover:bg-white hover:text-black rounded-lg p-2"
          >
            SATURN
          </Link>
          <Link
            href="/uranus"
            className="text-white text-sm font-bold font-league_spartan hover:bg-white hover:text-black rounded-lg p-2"
          >
            URANUS
          </Link>
          <Link
            href="/neptune"
            className="text-white text-sm font-bold font-league_spartan hover:bg-white hover:text-black rounded-lg p-2"
          >
            NEPTUNE
          </Link>
        </div>
      </div>
      {/* <div className="w-full h-[1px] bg-darkgray"></div> */}

      <div className="flex justify-between items-center p-4 md:hidden">
        <div>
          <Link
            href="/"
            className="text-white text-3xl font-antonio font-medium"
          >
            THE PLANETS
          </Link>
        </div>

        <button className="inline-flex" onClick={toggleNavbar}>
          {isClick ? (
            // Xmark
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            // Hamburger
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
              </g>
            </svg>
          )}
        </button>
      </div>

      {isClick && (
        <div className="top-14 border-t border-slate-500 mt-4 md:hidden">
          <div className="pt-2 pb-3 absolute bg-blackish w-full">
            {/* Mercury link */}
            <Link
              href="/mercury"
              className={
                pathname === "/mercury"
                  ? "block py-4 px-5 border-b border-slate-500 bg-slate-500 bg-opacity-40"
                  : "block py-4 px-5 border-b border-slate-500"
              }
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-6 items-center">
                  <div className="w-[20px] h-[20px] bg-greenblue rounded-full"></div>
                  <p className="text-white font-league_spartan text-base tracking-widest">MERCURY</p>
                </div>
                <Image src={iconChevron} alt="" className="w-[9px] h-[12px]" />
              </div>
            </Link>

            {/* Venus link */}
            <Link
              href="/venus"
              className={
                pathname === "/venus"
                  ? "block py-4 px-5 border-b border-slate-500 bg-slate-500 bg-opacity-40"
                  : "block py-4 px-5 border-b border-slate-500"
              }
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-6 items-center">
                  <div className="w-[20px] h-[20px] bg-yellowish rounded-full"></div>
                  <p className="text-white font-league_spartan text-base tracking-widest">VENUS</p>                
                </div>
                <Image src={iconChevron} alt="" className="w-[9px] h-[12px]" />
              </div>
            </Link>

            {/* Earth link */}
            <Link
              href="/earth"
              className={
                pathname === "/earth"
                  ? "block py-4 px-5 border-b border-slate-500 bg-slate-500 bg-opacity-40"
                  : "block py-4 px-5 border-b border-slate-500"
              }
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-6 items-center">
                  <div className="w-[20px] h-[20px] bg-violetlike rounded-full"></div>
                  <p className="text-white font-league_spartan text-base tracking-widest">EARTH</p>               
                </div>
                <Image src={iconChevron} alt="" className="w-[9px] h-[12px]" />
              </div>
            </Link>

            {/* Mars link */}
            <Link
              href="/mars"
              className={
                pathname === "/mars"
                  ? "block py-4 px-5 border-b border-slate-500 bg-slate-500 bg-opacity-40"
                  : "block py-4 px-5 border-b border-slate-500"
              }
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-6 items-center">
                  <div className="w-[20px] h-[20px] bg-orange2 rounded-full"></div>
                  <p className="text-white font-league_spartan text-base tracking-widest">MARS</p>                  
                </div>
                <Image src={iconChevron} alt="" className="w-[9px] h-[12px]" />
              </div>
            </Link>

              {/* Jupiter link */}
            <Link
              href="/jupiter"
              className={
                pathname === "/jupiter"
                  ? "block py-4 px-5 border-b border-slate-500 bg-slate-500 bg-opacity-40"
                  : "block py-4 px-5 border-b border-slate-500"
              }
            >
               <div className="flex justify-between items-center">
                <div className="flex gap-6 items-center">
                  <div className="w-[20px] h-[20px] bg-orange1 rounded-full"></div>
                  <p className="text-white font-league_spartan text-base tracking-widest">JUPITER</p>                 
                </div>
                <Image src={iconChevron} alt="" className="w-[9px] h-[12px]" />
              </div>
            </Link>

              {/* Saturn link */}
            <Link
              href="/saturn"
              className={
                pathname === "/saturn"
                  ? "block py-4 px-5 border-b border-slate-500 bg-slate-500 bg-opacity-40"
                  : "block py-4 px-5 border-b border-slate-500"
              }
            >
             <div className="flex justify-between items-center">
                <div className="flex gap-6 items-center">
                  <div className="w-[20px] h-[20px] bg-orange3 rounded-full"></div>
                  <p className="text-white font-league_spartan text-base tracking-widest">SATURN</p>                
                </div>
                <Image src={iconChevron} alt="" className="w-[9px] h-[12px]" />
              </div>
            </Link>
            
            {/* Uranus link */}
            <Link
              href="/uranus"
              className={
                pathname === "/uranus"
                  ? "block py-4 px-5 border-b border-slate-500 bg-slate-500 bg-opacity-40"
                  : "block py-4 px-5 border-b border-slate-500"
              }
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-6 items-center">
                  <div className="w-[20px] h-[20px] bg-greenish rounded-full"></div>
                  <p className="text-white font-league_spartan text-base tracking-widest">URANUS</p>                 
                </div>
                <Image src={iconChevron} alt="" className="w-[9px] h-[12px]" />
              </div>
            </Link>

              {/* Neptune link */}
            <Link
              href="/neptune"
              className={
                pathname === "/neptune"
                  ? "block pt-4 pb-8 px-5 bg-slate-500 bg-opacity-40"
                  : "block pt-4 pb-8 px-5"
              }
            >
               <div className="flex justify-between items-center">
                <div className="flex gap-6 items-center">
                  <div className="w-[20px] h-[20px] bg-blueish rounded-full"></div>
                  <p className="text-white font-league_spartan text-base tracking-widest">NEPTUNE</p>                 
                </div>
                <Image src={iconChevron} alt="" className="w-[9px] h-[12px]" />
              </div>
            </Link>
          </div>
        </div>
      )}

      <div className="w-full h-[1px] bg-darkgray"></div>
    </nav>
  );
};

export default Navbar;
