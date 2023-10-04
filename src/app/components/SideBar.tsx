"use client";

import React from "react";
import { useState } from "react";
import { CascadeSelect } from "primereact/cascadeselect";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { usePathname, useRouter } from "next/navigation";
import queryString from "query-string";

function SideBar() {
  const [searchValue, setSearchValue] = useState("");
  const [year, setYear] = useState("");
  const [selectedType, setSelectedType] = useState("movie");
  const [sortType, setSortType] = useState("year.incr");
  const [genre, setGenre] = useState("");

  const countries = ["movie", "tvSeries"];
  const sort = ["year.incr", "year.decr"];
  const genres = ["War", "Action", "Drama", "Comedy"];

  const router = useRouter();
  const pathname = usePathname();

  function handleSubmit(e: any) {
    e.preventDefault();
    const url = queryString.stringifyUrl(
      {
        url: pathname,
        query: {
          search: searchValue,
          type: selectedType,
          year: year,
          sort: sortType,
          genre: genre,
        },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );
    router.push(url);
  }

  return (
    <div className="flex  justify-center">
      <div className="flex flex-col p-3  shadow w-60 bg-yellow-300">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">Dashboard</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <div className="flex flex-col p-4">
                <CascadeSelect
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.value)}
                  options={countries}
                  optionGroupChildren={["movie", "series"]}
                  className=""
                  breakpoint="767px"
                  placeholder="Select a Type"
                />
                <CascadeSelect
                  value={sortType}
                  onChange={(e) => setSortType(e.value)}
                  options={sort}
                  optionGroupChildren={["year.incr", "year.decr"]}
                  className=""
                  breakpoint="767px"
                  placeholder="Select a Type"
                />
                <CascadeSelect
                  value={genre}
                  onChange={(e) => setGenre(e.value)}
                  options={genres}
                  optionGroupChildren={["comedy", "war", "action"]}
                  className=""
                  breakpoint="767px"
                  placeholder="Select a Genre"
                />

                <InputText
                  className="form-control"
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  placeholder="baslik Girin..."
                ></InputText>

                <InputText
                  className="form-control"
                  value={year}
                  onChange={(event) => setYear(event.target.value)}
                  placeholder="Başlik veya Id girin..."
                ></InputText>
              </div>

              <li></li>

              <li>
                <Button onClick={handleSubmit} label="Search" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
