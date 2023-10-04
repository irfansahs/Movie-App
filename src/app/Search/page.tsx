import React from "react";
import Paginator from "@/app/components/Paginator";
import MovieCard from "@/app/components/MovieCard";
import SideBar from "../components/SideBar";
import MainLayout from "../Layouts/MainLayout";

async function Page({ searchParams }: any) {
  const search = searchParams.search || "batman";
  const type = searchParams.type || "movie";
  const page = searchParams.page || "1";
  const year = searchParams.year || "";
  const sort = searchParams.sort || "year.decr";
  const genre = searchParams.genre || "";

  const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${search}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8cc2fee956mshf68b35eba5a4af1p1abd2ejsneeaba5fc01bc",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const responseJson = await response.json();
  console.log(responseJson);

  return (
    <MainLayout>
      <div className="flex max-md:flex-col">
        <div className=" m-4">
          <SideBar />
        </div>

        <div className="flex flex-wrap  justify-center  gap-4 ">
          {responseJson?.d?.map((movie: any, index: any) => (
            <MovieCard key={index} data={movie} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Paginator pages={responseJson?.totalResults} />
      </div>
    </MainLayout>
  );
}

export default Page;
