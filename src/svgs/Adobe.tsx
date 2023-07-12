import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAdobe = ({
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
    <path d="M40 6.1h23v51.6L40 6.1zm-16 0H1v51.6L24 6.1zm8 19.3L46.4 58h-9.7l-4.2-10.4H21.9L32 25.4z" />
  </svg>
);
export default SvgAdobe;
