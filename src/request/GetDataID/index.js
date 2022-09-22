import React from "react";
import { BASE_URL, API_KEY } from "../index";
import { useEffect, useState } from "react";
import axios from "axios";
import UseAxios from "../UseAxios";
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=9195c13a37c697961a3f6920c92c27f0&language=en-US
export default function GetDataID(id) {
  const [Movie, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9195c13a37c697961a3f6920c92c27f0&language=en-US`
      )
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, {});
  return Movie;
}
