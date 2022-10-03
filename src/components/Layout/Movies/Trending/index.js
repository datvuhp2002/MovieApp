import React from "react";
import classNames from "classnames/bind";
import styles from "../global.module.scss";
import UseAxios from "../../../../request/UseAxios";
import requests from "../../../../request";
import { MovieCard } from "../../components";
const cx = classNames.bind(styles);
export default function Trending() {
  const Trending = UseAxios(requests.fetchTrending);
  return (
    <>
      <h2 className={cx("title")}>
        <span className="fw-bold">Treding</span>
      </h2>
      {Trending.map((item, index) => {
        if (index < 6) {
          return <MovieCard key={index} {...item} />;
        }
      })}
    </>
  );
}
