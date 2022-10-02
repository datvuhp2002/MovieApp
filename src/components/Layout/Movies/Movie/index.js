import React from "react";
import { MovieCard } from "../../components";

export default function Movie(data) {
  return (
    <>
      {data.data.map((item, index) => {
        if (index < 18) {
          return <MovieCard key={index} {...item} />;
        }
      })}
    </>
  );
}
