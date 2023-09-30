"use client";

import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useParams } from 'next/navigation'


function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("batman");
  const [page, setPage] = useState(1);
  const [year, setYear] = useState("2000");
  
  const params = useParams()




  const getMovieRequest = async (searchValue: any) => {
    
    const url = `https://www.omdbapi.com/?s=${searchValue}&y=${year}&page=${page}&apikey=debbe9c`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      console.log(responseJson.Search);
      console.log(params)
    }
  };

  const handleClick = () => {
    getMovieRequest(searchValue);
  };





  return (
    <div className=" ">

   

      <div className="flex flex-row p-4">
        <Button onClick={handleClick} label="Ara">
          Tikla
        </Button>

        <InputText
        className="form-control"
        value={year}
        onChange={(event) => setYear(event.target.value)}
        placeholder="Type to search..."
      ></InputText>

<InputText
        className="form-control"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Type to search..."
      ></InputText>




      </div>

      <div className="flex flex-wrap  justify-center  gap-4 ">
        {movies?.map((movie: any, index) => (
          <div key={index}>
            <MovieCard
              Title={movie.Title}
              Poster={movie.Poster}
              Year={movie.Year}
              imdbID={movie.imdbID}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
