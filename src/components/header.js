"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { SearchContext, useSearchContext } from "../context/search";
import SearchMobile from "./search-mobile";

export default function Header() {
  const { setSearchActive } = useSearchContext();

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        nav
          ? "bg-[#fff]"
          : header
          ? "bg-[#38685B] shadow-md py-2"
          : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-30 transition-all duration-300`}
    >
      <div
        className={`xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between ${
          nav ? "" : "h-[70px]"
        }`}
      >
        <div className="flex justify-between items-center px-4">
          <Link href="/" className="cursor-pointer">
            <Image
              src={nav ? "/icons/logo-new.svg" : "/icons/logoo.png"}
              width={194}
              height={54}
              alt="Logo"
              priority
            />
          </Link>
          {/* Nav OPen Menu */}
          <div
            className="cursor-pointer xl:hidden"
            onClick={() => setNav(!nav)}
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl text-white" />
            )}
          </div>
        </div>
        {/* nav */}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            href="/"
            onClick={() => nav ? setNav(!nav) : console.log()}
            className={`cursor-pointer ${
              nav ? "" : "text-white hover:text-[#F5D856]"
            }`}
          >
            Home
          </Link>
          <Link
            href="scrap-rates"
            onClick={() => nav ? setNav(!nav) : console.log()}
            className={`cursor-pointer ${
              nav ? "" : "text-white hover:text-[#F5D856]"
            }`}
          >
            Scrap Rates
          </Link>
          <Link
            href="services"
            onClick={() => nav ? setNav(!nav) : console.log()}
            className={`cursor-pointer ${
              nav ? "" : "text-white hover:text-[#F5D856]"
            }`}
          >
            Services
          </Link>
          <Link
            href="about-us"
            onClick={() => nav ? setNav(!nav) : console.log()}
            className={`cursor-pointer ${
              nav ? "" : "text-white hover:text-[#F5D856]"
            }`}
          >
            About Us
          </Link>
         
          <Link
            href="contact-us"
            onClick={() => nav ? setNav(!nav) : console.log()}
            className={`cursor-pointer ${
              nav ? "" : "text-white hover:text-[#F5D856]"
            }`}
          >
            Contact Us
          </Link>
          <Link
            href=""
            onClick={() => nav ? setNav(!nav) : console.log()}
            className="hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
          >
            Sell Scrapes
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}
