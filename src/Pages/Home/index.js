import React from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import DefaultLayout from "../../components/Layout/DefaultLayout";
const cx = classNames.bind(styles);
export default function Home() {
  return (
    <div className={cx("Home")}>
      <DefaultLayout />
    </div>
  );
}
