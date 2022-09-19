import React from "react";
import classNames from "classnames/bind";
import styles from "../global.module.scss";
import useAxios from "../../../../request/useAxios";
import requests from "../../../../request";
import { MovieCard } from "../../components";
const cx = classNames.bind(styles);
export default function NetflixOriginals() {
  const NetflixOriginals = useAxios(requests.fetchNetflixOriginals);
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
