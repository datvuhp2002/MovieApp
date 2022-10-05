import React from "react";
import { MovieCard } from "../../components";

export default function GenreItemList(data) {
  return (
    <>
      {data.data.map((item, index) => {
        if (index < 18) {
          return <MovieCard key={index} {...item} type={data.movie_type} />;
        }
      })}
    </>
  );
}
