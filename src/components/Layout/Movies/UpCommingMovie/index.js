import React from "react";
import classNames from "classnames/bind";
import styles from "../global.module.scss";
import UseAxios from "../../../../request/UseAxios";
import requests from "../../../../request";
import { MovieCard } from "../../components";
const cx = classNames.bind(styles);
export default function UpComming() {
  const UpComming = UseAxios(requests.fetchUpcomming);
  return (
    <>
      <h2 className={cx("title")}>
        <span>Up Comming Movies</span>
      </h2>
      {UpComming.map((item, index) => {
        return <MovieCard key={index} {...item} />;
      })}
    </>
  );
}
