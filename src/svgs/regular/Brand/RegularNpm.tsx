import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNpm = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M32 33.8h-3.5v-6.9H32v6.9zM63 20v20.6H32V44H18.2v-3.5H1V20h62zm-44.8 3.3H4.4v13.8h6.9V26.9h3.5v10.4h3.5l-.1-14zm17.3 0H21.7v17.2h6.9V37h6.9V23.3zm24 0H38.9v13.8h6.9V26.9h3.5v10.4h3.5V26.9h3.5v10.4h3.5v-14h-.3z" />
  </svg>
);
export default SvgNpm;
