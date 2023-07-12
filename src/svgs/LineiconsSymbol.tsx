import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLineiconsSymbol = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 64 64"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      d="M55.522 55.676c2.225-2.247 2.225-5.91 0-8.157L16.742 8.343a5.677 5.677 0 0 0-8.073 0c-2.225 2.248-2.225 5.89 0 8.157l38.779 39.176a5.677 5.677 0 0 0 8.074 0ZM54.486 26.75c2.225-2.248 2.225-5.91 0-8.157L38.76 2.686a5.677 5.677 0 0 0-8.074 0c-2.225 2.247-2.225 5.909 0 8.156L46.43 26.75a5.677 5.677 0 0 0 8.075 0h-.02ZM33.524 61.314c2.225-2.247 2.225-5.909 0-8.157L17.778 37.252a5.677 5.677 0 0 0-8.074 0c-2.225 2.247-2.225 5.909 0 8.157L25.45 61.313a5.677 5.677 0 0 0 8.074 0Z"
    />
  </svg>
);
export default SvgLineiconsSymbol;
