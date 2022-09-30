import React from "react";
import classNames from "classnames/bind";
import styles from "../global.module.scss";
import UseAxios from "../../../../request/UseAxios";
import requests from "../../../../request";
import { MovieCard } from "../../components";
import { useEffect } from "react";
const cx = classNames.bind(styles);
export default function TopMovie(time) {
  let DataTrendingTime = time.time;
  let TopMovieDay = UseAxios(requests.fetchTrendingDay);
  let TopMovieWeek = UseAxios(requests.fetchTrendingWeek);
  let TopMovie;
  {
    DataTrendingTime === "Day"
      ? (TopMovie = TopMovieDay)
      : (TopMovie = TopMovieWeek);
  }

  return (
    <>
      {TopMovie.map((item, index) => {
        return <MovieCard key={index} {...item} />;
      })}
    </>
  );
}
