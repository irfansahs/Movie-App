import React from "react";
import Image from "next/image";
import MainLayout from "@/app/Layouts/MainLayout";
import Link from "next/link";

async function Page({ params }: any) {
  const url = `https://imdb8.p.rapidapi.com/title/get-details?tconst=${params.id}`;

  const urlPlot = `https://imdb8.p.rapidapi.com/title/get-plots?tconst=${params.id}`;
  const urlGenre = `https://imdb8.p.rapidapi.com/title/get-genres?tconst=${params.id}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8cc2fee956mshf68b35eba5a4af1p1abd2ejsneeaba5fc01bc",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const responsePlot = await fetch(urlPlot, options);
  const responseGenre = await fetch(urlGenre, options);

  const responseJson = await response.json();
  const responsePlots = await responsePlot.json();
  const responseGenres = await responseGenre.json();

  console.log(responsePlots);

  return (
    <MainLayout>
      <div className="grid grid-cols-2 bg-slate-50 p-4 gap-4  max-md:grid-cols-1">
        <div className="grid col-span-1 justify-items-center	">
          <h2 className="text-lg font-bold m-2">{responseJson.title}</h2>
          <div className="m-2"></div>
          <div>
            <Image
              width={400}
              height={600}
              src={responseJson.image?.url}
              alt="movie"
            ></Image>
          </div>
        </div>
        <div className="grid col-span-1">
          <div className="flex flex-col p-4  shadow-md ">
            <ul className="   text-gray-700 tracking-wider	leading-8	italic">
              <li>
                <p className="mt-4 text-gray-500">
                  Actors :{responseJson.title}
                </p>
                <span className="font-bold"> Year: </span>
                {responseJson.year}
              </li>
              {responseGenres?.map((item: any) => (
                <p key={item}>
                  <p className="font-bold"> {item}</p> 
                </p>
              ))}
              {responsePlots?.plots?.map((plots: any) => (
                <p key={plots}>
                  <p className="font-bold"> {plots?.author}</p> Plot{" "}
                  {plots.text}{" "}
                </p>
              ))}

              <li>Rated: {responseJson.numberOfEpisodes}</li>
              <li>seriesStartYear: {responseJson.seriesStartYear}</li>
              <li>seriesEndYear: {responseJson.seriesEndYear}</li>
              <li>titleType: {responseJson.numberOfEpisodes}</li>
              <li>runningTimeInMinutes: {responseJson.runningTimeInMinutes}</li>

              <li>
                <Link href={`/main_actors`}></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Page;
