import PropTypes from "prop-types";
import React from "react";
import "../lineicons/lineicons.css";

const LineIcon = ({ name, style, tag: Tag, ...rest }) => {
  return <Tag className={`lni lni-${name}`} style={style} {...rest} />;
};

const tagPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.string,
  PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
  PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
      PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    ])
  ),
]);

LineIcon.propTypes = {
  tag: tagPropType,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
};

LineIcon.defaultProps = {
  tag: "i",
  style: {},
};

export default LineIcon;
