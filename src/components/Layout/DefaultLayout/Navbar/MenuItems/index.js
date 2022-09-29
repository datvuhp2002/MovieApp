import React from "react";
import { publicRoutes } from "../../../../../Pages/Routes";
import { Button } from "../../../components";
import classNames from "classnames/bind";
import styles from "./MenuItems.module.scss";
const cx = classNames.bind(styles);
export default function MenuItems() {
  return (
    <div className={cx("wrapper")}>
      {publicRoutes.map((route, index) => {
        {
          if (route.namePage) {
            return (
              <Button
                header
                toActive={route.path}
                key={index}
                leftIcon={route.icon}
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "#102c48" : "",
                    color: isActive ? "#428bca" : "",
                  };
                }}
                LinkHeader
              >
                {route.namePage}
              </Button>
            );
          }
        }
      })}
    </div>
  );
}
