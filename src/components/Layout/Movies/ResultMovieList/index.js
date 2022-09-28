import React from "react";
import classNames from "classnames/bind";
import styles from "../global.module.scss";
import UseAxios from "../../../../request/UseAxios";
import { MovieCard } from "../../components";
import { ResultsSearch } from "../../../../request";
const cx = classNames.bind(styles);
export default function ResultMovieList(searchResults, input) {
  return (
    <>
      {/* <h2 className={cx("title")}>
        <span>Kết quả của {input.input} </span>
      </h2> */}
      {searchResults.searchResults.map((item, index) => {
        if (item.backdrop_path != null) {
          return <MovieCard key={index} {...item} />;
        }
      })}
    </>
  );
}
