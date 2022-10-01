import React, { useRef } from "react";
import { Navbar as NavbarWeb } from "react-bootstrap";
import classNames from "classnames/bind";
import LogoApp from "../../../../asstes/images/LogoApp.png";
import { Image } from "../../components";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import useScrollY from "../../../Hooks/useScrollY";
import styles from "./Navbar.module.scss";
import { useState } from "react";
import { Button } from "../../components";
import { publicRoutes } from "../../../../Pages/Routes";

const cx = classNames.bind(styles);
export default function Navbar(props) {
  const scrollY = useScrollY();
  let [showOffSet, setShowOffSet] = useState(false);
  const handleShowMenuOffSet = () => {
    setShowOffSet(true);
  };
  const handleCloseMenuOffSet = () => {
    setShowOffSet(false);
  };
  return (
    <>
      <NavbarWeb
        sticky="top"
        className={cx("wrapper", "py-0 px-2")}
        style={
          scrollY < 70
            ? { backgroundColor: "transparent" }
            : { backgroundColor: "rgba(51,10,103,.93)" }
        }
      >
        <Link to="/#">
          <Image src={LogoApp} className={cx("logo")}></Image>
        </Link>
        <div className={cx("Menu", "mx-3")}>
          <MenuItems />
        </div>
        <button
          className={cx("Btn-Menu")}
          type="button"
          onClick={handleShowMenuOffSet}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </NavbarWeb>
      <div
        className={cx("overlay")}
        style={showOffSet ? { display: "block" } : { display: "none" }}
        onClick={handleCloseMenuOffSet}
      ></div>
      <div
        className={cx("wrapperOffSet")}
        style={showOffSet ? { display: "block" } : { display: "none" }}
      >
        <Button
          className={cx("closeBtn", "p-0 pt-2")}
          leftIcon={<FontAwesomeIcon icon={faClose} />}
          onClick={handleCloseMenuOffSet}
        ></Button>
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
        </div>
      </div>
    </>
  );
}
