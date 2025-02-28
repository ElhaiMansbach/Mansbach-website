"use client";
import { clsx } from "@/utils/functions";
import defaultStyles from "./index.module.scss";

const Button = (props) => {
  const {
    id = "",
    text = "",
    style = defaultStyles,
    onClick,
    tabIndex = "0",
    type = "button",
    disabled = false,
    ariaLabel = false,
    className,
    styles = defaultStyles,
  } = props;

  const handleOnClick = (e) => {
    if (!disabled) {
      typeof onClick === "function" && onClick(e);
    }
  };

  return (
    <button
      id={id}
      className={clsx(
        styles["button-wrapper"],
        disabled && styles["button-disabled"],
        className
      )}
      type={type}
      onClick={handleOnClick}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      style={{ ...style }}
    >
      <span className={styles["button-text"]}>{text}</span>
    </button>
  );
};

export default Button;
