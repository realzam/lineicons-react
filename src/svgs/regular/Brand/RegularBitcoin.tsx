import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBitcoin = ({
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
    <path d="M47.9 31.9c3.8-2.4 6.3-6.4 6.5-11v-1c-.2-7.8-7-14.1-15.1-14.1h-3.5V4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v1.8h-3.9V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v1.8H11.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h1.8v43.3h-1.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h11.1v2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-2h3.9v2c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-2h3.4c8.1 0 14.9-6.3 15.1-14.1v-1.1c-.3-4.8-2.9-8.8-6.6-11.2zM18.1 10.3h21.1c5.7 0 10.5 4.4 10.6 9.8v.7c-.2 4.9-4.5 8.9-9.7 8.9h-22V10.3zm31.7 33.4c-.2 5.4-4.9 9.8-10.6 9.8H18.1V34.2h22.1c5.1 0 9.5 3.9 9.6 8.8v.7z" />
  </svg>
);
export default SvgBitcoin;
