import React from "react";
import MovieCard from "@/app/components/MovieCard";
import MainLayout from "@/app/Layouts/MainLayout";

async function page({ params }: any) {
  const url = `https://imdb8.p.rapidapi.com/title/${params.category}?currentCountry=US`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8cc2fee956mshf68b35eba5a4af1p1abd2ejsneeaba5fc01bc",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const responseJson = await response.json();
  console.log(responseJson.results);

  return (
    <MainLayout>
      <div className="flex flex-wrap  justify-center  gap-4 ">
        {responseJson?.results?.map((movie: any, index: any) => (
          <MovieCard key={index} data={movie} />
        ))}
      </div>
    </MainLayout>
  );
}

export default page;
