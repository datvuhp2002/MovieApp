import React from "react";
import Image from "../Image";
import classNames from "classnames/bind";
import styles from "./MovieCard.module.scss";
import { Col } from "react-bootstrap";
const cx = classNames.bind(styles);
const getPosterURL = (poster_path) => {
  return `https://image.tmdb.org/t/p/w500/${poster_path}`;
};
export default function MovieCard({
  topRate = false,
  poster_path,
  title,
  name,
  popularity,
  vote_average,
}) {
  return (
    <Col
      xxl={2}
      xl={2}
      lg={3}
      md={4}
      sm={6}
      xs={6}
      className={cx("wrapper", "mb-5")}
    >
      <a className={cx("image")} href="">
        <Image className="w100" src={getPosterURL(poster_path)}></Image>
      </a>
      <h3 className={cx("movie")}>
        <a href="">{title || name}</a>
      </h3>
      {topRate ? (
        <h3 className={cx("vote")}>
          <a href="#">Vote average: {vote_average}</a>
        </h3>
      ) : (
        <h3 className={cx("date")}>
          <a href="#">Popularity: {popularity}</a>
        </h3>
      )}
    </Col>
  );
}
