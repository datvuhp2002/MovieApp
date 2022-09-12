import React, { forwardRef } from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import LogoApp from "../../../../asstes/images/LogoApp.png";
import { Image, Menu } from "../../components";
import {
  faArrowRightFromBracket,
  faChevronDown,
  faDonate,
  faEarthAmerica,
  faFilm,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import Login from "./Login";
const cx = classNames.bind(styles);
export default function Navbar(props) {
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
    <div className={cx("wrapper")}>
      <Link to="/#">
        <Image src={LogoApp} className={cx("logo")}></Image>
      </Link>
      <div className={cx("Menu")}>
        <MenuItems />
        <Login data={listItemHeader} />
      </div>
    </div>
  );
}
