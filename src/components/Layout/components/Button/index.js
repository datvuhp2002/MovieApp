import React from "react";
import classNames from "classnames/bind";
import Styles from "./Button.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(Styles);
export default function Button({
  to,
  href,
  ref,
  primary = false,
  trailer = false,
  contact = false,
  primaryHeader = false,
  outline = false,
  menu = false,
  header = false,
  disabled = false,
  rounded = false,
  text = false,
  small = false,
  large = false,
  className,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passsProps
}) {
  let Comp = "button";
  let _props = { onClick, ...passsProps };
  // remove event listener when btn is disable
  if (disabled) {
    Object.keys(_props).forEach((key) => {
      if (key.startsWith("on") && _props[key] === "function") {
        delete _props[key];
      }
    });
  }
  if (to) {
    _props.to = to;
    Comp = Link;
  } else if (href) {
    _props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    primaryHeader,
    trailer,
    contact,
    outline,
    menu,
    header,
    disabled,
    rounded,
    text,
    [className]: className,
    small,
    large,
  });
  return (
    <Comp className={classes} {..._props}>
      {leftIcon && <span className={cx("Icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("Icon")}>{rightIcon}</span>}
    </Comp>
  );
}
