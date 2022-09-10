import { useState } from "react";
import images from "../../../../asstes/images";
import styles from "./Image.module.scss";
import classNames from "classnames";

const Image = ({
  src,
  alt,
  className,
  fallback: customFallback = images.default,
  ...props
}) => {
  const [fallback, setFallback] = useState("");

  function handleError() {
    setFallback(customFallback);
  }
  return (
    <img
      className={classNames(styles.wrapper, className)}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
};

export default Image;
