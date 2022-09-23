import React from "react";
import classNames from "classnames/bind";
import styles from "./OffSetMenu.module.scss";
import { publicRoutes } from "../../../../../Pages/Routes";
import { Button } from "../../../components";
import Login from "../Login";
const cx = classNames.bind(styles);
export default function OffSetMenu(data) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("Menu")}>
        {publicRoutes.map((route, index) => {
          {
            if (route.namePage) {
              return (
                <Button
                  offSetMenu
                  to={route.path}
                  key={index}
                  rightIcon={route.icon}
                >
                  {route.namePage}
                </Button>
              );
            }
          }
        })}
        <hr />
        <Login data={data.data} offset />
      </div>
    </div>
  );
}
