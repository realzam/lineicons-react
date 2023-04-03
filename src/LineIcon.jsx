import React from "react";

const LineIcon = (props) => {
  const { icon } = props;
  return <i className={`lni lni-${icon}`}></i>;
};

export default LineIcon;
