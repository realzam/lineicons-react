import React, { CSSProperties } from "react";

interface LineIconProps {
  name: string;
  variation?: string;
  style?: CSSProperties;
  [key: string]: any; // for ...rest
}

const LineIcon: React.FC<LineIconProps> = ({
  name,
  variation,
  style,
  ...rest
}) => {
  return (
    <i
      className={`${variation} ${variation}-${name}`}
      style={style}
      {...rest}
    ></i>
  );
};

export default LineIcon;
