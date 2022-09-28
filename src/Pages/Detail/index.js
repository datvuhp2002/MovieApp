import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetDataID from "../../request/GetDataID";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import Body from "../../components/Layout/DefaultLayout/Body";
import classNames from "classnames/bind";
import styles from "./Detail.module.scss";
import { Poster } from "../../request";
import DetailMovie from "../../components/Layout/components/DetailMovie";

const cx = classNames.bind(styles);
export default function Detail() {
  const { mediaType, idMovie } = useParams();
  const data = GetDataID(mediaType, idMovie);
  const DropbackImage = `${Poster}${data.backdrop_path}`;
  return (
    <div className={cx("wrapper")}>
      <DefaultLayout>
        <div
          className={cx("image")}
          style={{ backgroundImage: `url(${DropbackImage})` }}
        ></div>
        <Body>
          <DetailMovie data={data} />
        </Body>
      </DefaultLayout>
    </div>
  );
}
