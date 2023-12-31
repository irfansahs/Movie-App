"use client";

import React from "react";
import MovieCard from "./MovieCard";

async function Movies() {
  const url = "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8cc2fee956mshf68b35eba5a4af1p1abd2ejsneeaba5fc01bc",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const responseJson = await response.json();

  return (
    <div className=" ">
      <div className="flex flex-row p-4"></div>

      <div className="flex flex-wrap  justify-center  gap-4 ">
        {responseJson?.results?.map((movie: any, index: any) => (
          <MovieCard key={index} data={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
