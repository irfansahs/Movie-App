import React from "react";
import Image from "next/image";
import Ratings from "@/app/components/Ratings";
import MainLayout from "@/app/Layouts/MainLayout";
import Link from "next/link";

async function Page({ params, searchParams }: any) {
  const seasons = searchParams.seasons || "1";

  const response = await fetch(
    `http://www.omdbapi.com/?i=${params.id}&apikey=debbe9c`
  );

  const season = await fetch(
    `https://www.omdbapi.com/?i=${params.id}&Season=${seasons}&apikey=debbe9c`
  );
  const responseJson = await response.json();
  const responseSeason = await season.json();

  const numbers = Array.from(
    { length: responseSeason.totalSeasons },
    (_, index) => index
  );

  return (
    <MainLayout>
      <div className="grid grid-cols-2 bg-slate-50 p-4 gap-4  max-md:grid-cols-1">
        <div className="grid col-span-1 justify-items-center	">
          <h2 className="text-lg font-bold m-2">{responseJson.Title}</h2>
          <div className="m-2">
            <Ratings value={responseJson.imdbRating} />
          </div>
          <div>
            <Image
              width={400}
              height={600}
              src={responseJson.Poster}
              alt="movie"
            ></Image>
          </div>
          <p className="mt-4 text-gray-500">{responseJson.Plot}</p>
        </div>
        <div className="grid col-span-1">
          <div className="flex flex-col p-4  shadow-md ">
            <ul className="   text-gray-700 tracking-wider	leading-8	italic  	">
              <li>
                <span className="font-bold"> Year: </span>
                {responseJson.Year}
              </li>
              <li>Rated: {responseJson.Rated}</li>
              <li>Released: {responseJson.Released}</li>
              <li>Runtime {responseJson.Runtime}</li>
              <li>Genre :{responseJson.Genre}</li>
              <li>Writer : {responseJson.Writer}</li>
              <li> Actors : {responseJson.Actors}</li>
              <li>Language : {responseJson.Language}</li>
              <li>Country :{responseJson.Country}</li>
              <li>Awards : {responseJson.Awards}</li>
              <ul>
                <li>{responseJson.Ratings.Source}</li>
                <li>{responseJson.Ratings.Value}</li>
              </ul>
              <li>{responseJson.Metascore}</li>
              <li>imdbRating : {responseJson.imdbRating}</li>
              <li>{responseJson.imdbVotes}</li>
              <li>{responseJson.imdbID}</li>
              <li> totalSeasons : {responseJson.totalSeasons}</li>
              <li>{responseJson.Response}</li>
            </ul>
          </div>
        </div>

        {numbers.map((index) => (
          <Link
            key={index}
            href={{
              query: { seasons: index+1 },
            }}
          >
            Sezon {index+1}
          </Link>
        ))}

        {responseSeason?.Episodes?.map((movie: any, index: any) => (
          <div key={index} className="flex border p-2">
            <p className="font-bold">
              {movie.Episode} : {movie.Title}
            </p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export default Page;
