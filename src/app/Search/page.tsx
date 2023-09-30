import React from "react";
import Paginator from "@/app/components/Paginator";
import MovieCard from "@/app/components/MovieCard";
import SideBar from "../components/SideBar";
import MainLayout from "../Layouts/MainLayout";

async function Page({ searchParams }: any) {
  const search = searchParams.search || "";
  const type = searchParams.type || "";
  const page = searchParams.page || "1";
  const year = searchParams.year || "";

  const response = await fetch(
    `https://www.omdbapi.com/?s=${search}&type=${type}&y=${year}&page=${page}&apikey=debbe9c`
  );
  const responseJson = await response.json();

  return (
    <MainLayout>
      <div className="flex max-md:flex-col">
        <div className=" m-4">
          <SideBar />
        </div>

        <div className="flex flex-wrap  justify-center  gap-4 ">
          {responseJson?.Search?.map(
            (movie: any, index: any) =>
              (
                <div key={index}>
                  <MovieCard
                    Title={movie.Title}
                    Poster={movie.Poster}
                    Year={movie.Year}
                    imdbID={movie.imdbID}
                  />
                </div>
              ) ?? <p className="text-white">Bulunamadi</p>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Paginator pages={responseJson?.totalResults} />
      </div>
    </MainLayout>
  );
}

export default Page;
