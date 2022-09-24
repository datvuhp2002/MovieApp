import React from "react";
import { Button } from "../../../components";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import Tippy from "@tippyjs/react/headless";
import { Menu } from "../../../components";
import { useState, forwardRef } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);
export default function Login(data, offset = false) {
  // {
  //   offset ? console.log("yes") : console.log("no");
  // }
  const [currentUser, setCurrentUSer] = useState(false);
  const handleLogOut = () => {
    setCurrentUSer(false);
  };
  const handleLogIn = () => {
    setCurrentUSer(true);
  };
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
  let [listData, setListData] = useState(data.data);
  return (
    <div className={cx("actions")}>
      {offset ? (
        <>
          {currentUser ? (
            <Tippy
              offset={[0, 1]}
              // visible
              interactive={true}
              animateFill={true}
              placement="bottom"
              render={(attrs) => (
                <div className={cx("wrapper")} tabIndex="-1" {...attrs}>
                  <Menu items={listData} />
                </div>
              )}
            >
              <ListItem />
            </Tippy>
          ) : (
            <Button primaryHeader onClick={handleLogIn}>
              Login
            </Button>
          )}
        </>
      ) : (
        <>abcc</>
      )}
    </div>
  );
}
