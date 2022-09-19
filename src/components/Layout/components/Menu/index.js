import React from "react";
import MenuItems from "./Menuitems";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);
export default function Menu(items) {
  const [database, setdatabase] = useState(items.items);
  const renderItems = () => {
    return database.map((item, index) => {
      return <MenuItems key={index} data={item} />;
    });
  };
  return <div className={cx("wrapper")}>{renderItems()}</div>;
}
