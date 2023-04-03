import "./index.css";

const LineIcon = (props) => {
  const { icon } = props;
  return <i className={`lni lni-${icon}`}></i>;
};

export default LineIcon;
