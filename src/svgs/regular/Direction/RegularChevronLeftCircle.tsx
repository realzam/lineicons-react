import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronLeftCircle = ({
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
    <path d="M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.3 32 62.3 62.3 48.7 62.3 32 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.3 46.2 6.3 32 6.3 17.8 17.8 6.3 32 6.3s25.8 11.6 25.8 25.8c0 14.1-11.6 25.7-25.8 25.7z" />
    <path d="M40.2 16.9c-.9-.9-2.3-.9-3.2 0L23.8 30.4c-.9.9-.9 2.3 0 3.2L37 47.1c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2L28.5 32l11.7-11.9c.9-.9.9-2.4 0-3.2z" />
  </svg>
);
export default SvgChevronLeftCircle;
