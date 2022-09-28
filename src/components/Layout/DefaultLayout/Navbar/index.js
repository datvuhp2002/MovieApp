import React, { useRef } from "react";
import { Navbar as NavbarWeb } from "react-bootstrap";
import classNames from "classnames/bind";
import LogoApp from "../../../../asstes/images/LogoApp.png";
import { Image } from "../../components";
import {
  faArrowRightFromBracket,
  faBars,
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
import OffSetMenu from "./OffSetMenu";

const cx = classNames.bind(styles);
export default function Navbar(props) {
  const scrollY = useScrollY();
  const OffSet = useRef();
  const listItemHeader = [
    { icon: <FontAwesomeIcon icon={faUser} />, title: "Account" },
    { icon: <FontAwesomeIcon icon={faDonate} />, title: "Donate" },
    { icon: <FontAwesomeIcon icon={faFilm} />, title: "Collection" },
    {
      icon: <FontAwesomeIcon icon={faEarthAmerica} />,
      title: "Pair of bilingual sentences",
    },
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: "Exit",
      onClick: "handleLogIn",
    },
  ];
  const handleShowMenuOffSet = () => {
    OffSet.current.style.display = "block";
  };
  const handleCloseMenuOffSet = () => {
    OffSet.current.style.display = "none";
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
        <div className={cx("Menu")}>
          <MenuItems />
          <Login data={listItemHeader} />
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
        className={cx("OffSetMenu")}
        ref={OffSet}
        // onClick={handleCloseMenuOffSet}
      >
        <OffSetMenu data={listItemHeader} />
      </div>
    </>
  );
}
