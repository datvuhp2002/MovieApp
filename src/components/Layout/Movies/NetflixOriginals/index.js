import React from "react";
import classNames from "classnames/bind";
import styles from "../global.module.scss";
import UseAxios from "../../../../request/UseAxios";
import requests from "../../../../request";
import { MovieCard } from "../../components";
const cx = classNames.bind(styles);
export default function NetflixOriginals() {
  const NetflixOriginals = UseAxios(requests.fetchNetflixOriginals);
  return (
    <>
      <h2 className={cx("title")}>
        <span>Netflix Originals</span>
      </h2>
      {NetflixOriginals.map((item, index) => {
        if (index < 12) return <MovieCard key={index} {...item} />;
      })}
    </>
  );
}
