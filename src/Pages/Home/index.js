import React from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import TypeOfMovie from "../../components/Layout/components/TypeOfMovie";
import Body from "../../components/Layout/DefaultLayout/Body";
import Movies from "../../components/Layout/Movies";
const cx = classNames.bind(styles);
export default function Home() {
  return (
    <div className={cx("Home")}>
      <DefaultLayout>
        <Body>
          <TypeOfMovie />
          <Movies />
        </Body>
      </DefaultLayout>
    </div>
  );
}
