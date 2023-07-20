import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLicense = ({
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
    <path d="M48.4 40.6H14.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h34.2c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.4-2.3zM48.4 21.8H39c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h9.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM48.4 31.2H39c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h9.4c1.2 0 2.3-1 2.3-2.3 0-1.3-1-2.3-2.3-2.3z" />
    <path d="M56 11H8c-3.4 0-6.3 2.8-6.3 6.3v29.5C1.8 50.2 4.6 53 8 53h48c3.4 0 6.3-2.8 6.3-6.3V17.3c0-3.5-2.9-6.3-6.3-6.3zm1.8 35.7c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V17.3c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v29.4z" />
    <path d="M18.3 35.7c3.9 0 7.1-3.2 7.1-7.1 0-3.9-3.2-7.1-7.1-7.1s-7.1 3.2-7.1 7.1c.1 4 3.2 7.1 7.1 7.1zm0-9.6c1.4 0 2.6 1.2 2.6 2.6 0 1.4-1.2 2.6-2.6 2.6s-2.6-1.2-2.6-2.6c.1-1.5 1.2-2.6 2.6-2.6z" />
  </svg>
);
export default SvgLicense;
