import React, { forwardRef } from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import LogoApp from "../../../../asstes/images/LogoApp.png";
import { Image, Menu } from "../../components";
import Button from "../../components/Button";
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
import Tippy from "@tippyjs/react/headless";
import { publicRoutes } from "../../../../Pages/Routes";
const cx = classNames.bind(styles);
export default function Navbar(props) {
  const currentUser = false;
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
  const ListItem = forwardRef((props, ref) => {
    return (
      <div className={cx("UserInsign")} ref={ref}>
        <Button header>
          <div className={cx("user")}>
            <p>Dat Vu Trong</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </Button>
      </div>
    );
  });
  console.log(">> ", listItemHeader);
  return (
    <div className={cx("wrapper")}>
      <Link to="/#">
        <Image src={LogoApp} className={cx("logo")}></Image>
      </Link>
      <div className={cx("Menu")}>
        <div className={cx("btn-list")}>
          {publicRoutes.map((route, index) => {
            {
              if (route.namePage) {
                return (
                  <Button
                    header
                    to={route.path}
                    key={index}
                    leftIcon={route.icon}
                  >
                    {route.namePage}
                  </Button>
                );
              }
            }
          })}
        </div>
        <div className={cx("actions")}>
          {currentUser ? (
            <Tippy
              offset={[12, 72]}
              // visible
              interactive
              placement="bottom"
              render={(attrs) => (
                <div className={cx("wrapper")} tabIndex="-1" {...attrs}>
                  <Menu items={listItemHeader} />
                </div>
              )}
            >
              <ListItem />
            </Tippy>
          ) : (
            <Button primaryHeader to="/Login">
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
