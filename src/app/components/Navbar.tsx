"use client";

import React from "react";
import Link from "next/link";
import SearchBox from "./SearchBox";

const Navbar = () => {
  const tabs = [
    {
      name: "En popular",
      url: "most_pop_movies",
    },
    {
      name: "En series",
      url: "most_pop_series",
    },
    {
      name: "Upcomings",
      url: "get-coming-soon-tv-shows",
    },
    {
      name: "top_rated_series_250",
      url: "top_rated_series_250",
    },
  ];

  return (
    <>
      <div className="mx-auto bg-cyan-700 w-full  max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 mb-8">
        <ul className=" flex justify-center  items-center gap-x-6 text-white max-md:flex-col ">
          {tabs.map((tab, i) => (
            <Link key={i} href={`/Home/${tab.url}`}>
              {tab.name}
            </Link>
          ))}

          <SearchBox />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
