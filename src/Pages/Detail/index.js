import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetDataID from "../../request/GetDataID";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import Body from "../../components/Layout/DefaultLayout/Body";
import classNames from "classnames/bind";
import styles from "./Detail.module.scss";
import { Image, MovieCard } from "../../components/Layout/components";
import { Poster, Poster_W500 } from "../../request";
const cx = classNames.bind(styles);
export default function Detail() {
  let { idMovie } = useParams();
  const data = GetDataID(idMovie);
  return (
    <div className={cx("wrapper")}>
      <DefaultLayout>
        <Body></Body>
      </DefaultLayout>
    </div>
  );
}
