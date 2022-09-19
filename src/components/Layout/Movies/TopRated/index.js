import React from "react";
import classNames from "classnames/bind";
import styles from "../global.module.scss";
import useAxios from "../../../../request/useAxios";
import requests from "../../../../request";
import { MovieCard } from "../../components";
const cx = classNames.bind(styles);
export default function TopRated() {
  const top_rated = useAxios(requests.fetchTopRated);
  return (
    <>
      <h2 className={cx("title")}>
        <span>Top Rated</span>
      </h2>
      {top_rated.map((item, index) => {
        if (index < 12) return <MovieCard topRate key={index} {...item} />;
      })}
    </>
  );
}
