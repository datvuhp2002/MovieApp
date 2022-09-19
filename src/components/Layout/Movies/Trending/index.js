import React from "react";
import classNames from "classnames/bind";
import styles from "../global.module.scss";
import useAxios from "../../../../request/useAxios";
import requests from "../../../../request";
import { MovieCard } from "../../components";
const cx = classNames.bind(styles);
export default function Trending() {
  const Trending = useAxios(requests.fetchTrending);
  return (
    <>
      <h2 className={cx("title")}>
        <span>Treding</span>
      </h2>
      {Trending.map((item, index) => {
        if (index < 6) {
          return <MovieCard key={index} {...item} />;
        }
      })}
    </>
  );
}
