import React, { CSSProperties } from "react";

interface LineIconProps {
  name: string;
  style?: CSSProperties;
  [key: string]: any; // for ...rest
}

const LineIcon: React.FC<LineIconProps> = ({ name, style, ...rest }) => {
  return <i className={`lni lni-${name}`} style={style} {...rest}></i>;
};

export default LineIcon;
