import { useState, useCallback, useEffect } from "react";
import Image from "../Image";
import classNames from "classnames/bind";
import styles from "./RecommendationsCard.module.scss";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);
const getPosterURL = (poster_path) => {
  return `https://image.tmdb.org/t/p/w500${poster_path}`;
};
const getBackDropURL = (backdrop_path) => {
  return `https://image.tmdb.org/t/p/original${backdrop_path}`;
};

export default function RecommendationsCard({
  poster_path,
  title,
  name,
  id,
  media_type = "movie",
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const onMoveToDetail = () => {
    navigate(`${`/Detail/${media_type}/${id}`}`);
    window.location.reload();
  };
  return (
    <div className={cx("wrapper")}>
      <div onClick={onMoveToDetail}>
        <div className={cx("image")}>
          {poster_path && (
            <Image className="w100" src={getPosterURL(poster_path)}></Image>
          )}
        </div>
        <h3 className={cx("movie")}>
          <span>{title || name}</span>
        </h3>
      </div>
    </div>
  );
}
