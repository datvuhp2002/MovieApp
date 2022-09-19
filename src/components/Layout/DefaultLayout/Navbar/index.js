import React, { forwardRef } from "react";
import { Navbar as NavbarWeb } from "react-bootstrap";
import classNames from "classnames/bind";
import LogoApp from "../../../../asstes/images/LogoApp.png";
import { Image, Menu } from "../../components";
import {
  faArrowRightFromBracket,
  faDonate,
  faEarthAmerica,
  faFilm,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import Login from "./Login";
import useScrollY from "../../../Hooks/useScrollY";
import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);
export default function Navbar(props) {
  const scrollY = useScrollY();
  const listItemHeader = [
    { icon: <FontAwesomeIcon icon={faUser} />, title: "Account" },
    { icon: <FontAwesomeIcon icon={faDonate} />, title: "Donate" },
    { icon: <FontAwesomeIcon icon={faFilm} />, title: "Collection" },
    {
      icon: <FontAwesomeIcon icon={faEarthAmerica} />,
      title: "Pair of bilingual sentences",
    },
    { icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />, title: "Exit" },
  ];

  return (
    <NavbarWeb
      sticky="top"
      className={cx("wrapper")}
      style={
        scrollY < 70
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "rgba(51,10,103,.93)" }
      }
    >
      <Link to="/#">
        <Image src={LogoApp} className={cx("logo")}></Image>
      </Link>
      <div className={cx("Menu")}>
        <MenuItems />
        <Login data={listItemHeader} />
      </div>
    </NavbarWeb>
  );
}
