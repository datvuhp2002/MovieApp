import { useState, useEffect } from "react";
import axios from "axios";

export default function UseAxios(request) {
  const [Movie, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(request)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return Movie;
}
