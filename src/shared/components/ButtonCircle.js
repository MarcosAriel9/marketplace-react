import React from "react";
import FeatherIcon from "feather-icons-react";
import "../../assets/css/custom-styles.css"

export const ButtonCircle = ({ type, onClickFunct, icon = "", size = 15 }) => {
  return (
    <button className={type} onClick={onClickFunct}>
      {icon && (
        <FeatherIcon icon={icon} size={size} style={{ strokeWidth: 2.5 }} />
      )}
    </button>
  );
};
