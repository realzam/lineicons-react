import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRssFeed = ({
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
    <path d="M5.9 1.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c28.6 0 51.8 23 51.8 51.2 0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3C62.3 26.7 37 1.8 5.9 1.8z" />
    <path d="M5.9 15.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c21.4 0 38.7 17 38.7 37.8 0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3c0-23.5-19.4-42.4-43.3-42.4z" />
    <path d="M5.9 27c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c14.6 0 26.5 11.7 26.5 26 0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3C36.9 40.6 23 27 5.9 27z" />
    <path d="M5.9 39.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c7.7 0 13.9 6.2 13.9 13.8 0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3c0-10.1-8.3-18.4-18.5-18.4z" />
    <path d="M8.3 49.1c-3.6 0-6.6 3-6.6 6.6s2.9 6.6 6.6 6.6 6.6-3 6.6-6.6-3-6.6-6.6-6.6zm0 8.7c-1.1 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1z" />
  </svg>
);
export default SvgRssFeed;
