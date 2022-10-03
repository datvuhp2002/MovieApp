import React from "react";
import styles from "./CastsCard.module.scss";
import classNames from "classnames/bind";
import Image from "../Image";
const cx = classNames.bind(styles);
export default function CastsCard({ profile_path, name, character }) {
  const getBackDropURL = (backdrop_path) => {
    return `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("image")}>
        <figure>
          {profile_path && (
            <Image w100 src={getBackDropURL(profile_path)}></Image>
          )}
        </figure>
      </div>

      <p className={cx("name")}>
        <span>{name}</span>
      </p>

      <p className={cx("character")}>
        <span>{character}</span>
      </p>
    </div>
  );
}
