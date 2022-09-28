import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { API_KEY, BASE_URL } from "../index";
export default function SearchMovie() {
  const [results, SetResult] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
      )
      .then((res) => {
        SetResult(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return results;
}
