import React from "react";
import styles from "../global.module.scss";
import classNames from "classnames/bind";
import { MovieCard } from "../../components";
const cx = classNames.bind(styles);

export default function GenreItemList(data) {
  return (
    <>
      {data.data.map((item, index) => {
        if (index < 18) {
          return <MovieCard key={index} {...item} />;
        }
      })}
    </>
  );
}
