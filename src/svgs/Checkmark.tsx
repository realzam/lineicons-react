import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheckmark = ({
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
    <path d="M60.6 13.4c-.9-.9-2.3-.9-3.2 0l-34 33L6.6 29.9c-.9-.9-2.3-.8-3.2 0-.9.9-.8 2.3 0 3.2l17.7 17.2c.6.6 1.4.9 2.3.9s1.6-.3 2.3-.9l34.9-33.9c.9-.7.9-2.1 0-3z" />
  </svg>
);
export default SvgCheckmark;
