import React from "react";
import classNames from "classnames/bind";
import styles from "./Body.module.scss";
// bootstrap
import { Container } from "react-bootstrap";
const cx = classNames.bind(styles);
export default function Body({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Container fuild="md">{children}</Container>
    </div>
  );
}
