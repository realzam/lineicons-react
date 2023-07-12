import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStrikethrough = ({
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
    <path d="M60 19.6H34.3V6.3h14.5C50 6.3 51 5.2 51 4s-1-2.3-2.3-2.3H15.2C14 1.8 13 2.8 13 4s1 2.3 2.3 2.3h14.5v13.3H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h25.8V60c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V24.1H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.2-2.3-2.2z" />
  </svg>
);
export default SvgStrikethrough;
