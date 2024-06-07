import React from "react";
import style from "./Button.module.css"; // Import the CSS file

function Button({
  type = "button",
  variant = "secondary",
  size = "small",
  children,
  onClick,
  disable = false,
}) {
  const buttonClasses = `${style.button} ${style[variant]} ${style[size]} ${
    disable && style.disable
  }`; // Combine classes

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  );
}

export default Button;
