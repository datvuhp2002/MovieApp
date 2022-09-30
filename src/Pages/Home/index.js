import React from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import Body from "../../components/Layout/DefaultLayout/Body";
import Slide from "../../components/Layout/components/Slide";
import Movies from "../../components/Layout/Movies";
const cx = classNames.bind(styles);
export default function Home() {
  return (
    <div className={cx("wrapper")}>
      <DefaultLayout>
        <Slide />
        <Body>
          <Movies />
        </Body>
      </DefaultLayout>
    </div>
  );
}
