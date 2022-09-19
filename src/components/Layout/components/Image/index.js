import { useState } from "react";
import images from "../../../../asstes/images";
import styles from "./Image.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Image = ({
  src,
  alt,
  className,
  fallback: customFallback = images.default,
  w100,
  ...props
}) => {
  const [fallback, setFallback] = useState("");

  function handleError() {
    setFallback(customFallback);
  }
  const classes = cx("wrapper", {
    w100,
    [className]: className,
  });
  return (
    <img
      className={cx("wrapper", classes)}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
};

export default Image;
