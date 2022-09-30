import React from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import Body from "../../components/Layout/DefaultLayout/Body";
import styles from "./HotMovies.module.scss";
import Button from "../../components/Layout/components/Button";
import TopMovie from "../../components/Layout/Movies/TopMovie";
import classNames from "classnames/bind";
import { Row } from "react-bootstrap";
import { useState } from "react";
const cx = classNames.bind(styles);
export default function HotMovie() {
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(false);
  const [time, setTime] = useState("Day");
  const handleSelect1 = () => {
    setSelected1(true);
    setSelected2(false);
    setTime("Day");
  };
  const handleSelect2 = () => {
    setSelected2(true);
    setSelected1(false);
    setTime("Week");
  };
  return (
    <DefaultLayout>
      <Body>
        <div className={cx("wrapper")}>
          <h1 className="mb-3">Top Movies</h1>
          <div className={cx("sections")}>
            <Button
              className={selected1 && cx("selected")}
              onClick={handleSelect1}
            >
              <span>Day</span>
            </Button>
            <Button
              className={selected2 && cx("selected")}
              onClick={handleSelect2}
            >
              <span>Week</span>
            </Button>
          </div>
        </div>
        <Row>
          <TopMovie time={time} />
        </Row>
      </Body>
    </DefaultLayout>
  );
}
