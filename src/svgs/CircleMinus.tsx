import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCircleMinus = ({
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
    <path d="M42.2 29.7H21.8c-1.2 0-2.2 1-2.2 2.3 0 1.2 1 2.2 2.3 2.2h20.4c1.2 0 2.2-1 2.2-2.3-.1-1.2-1.1-2.2-2.3-2.2z" />
    <path d="M32 1.8C15.3 1.8 1.8 15.3 1.8 32s13.6 30.3 30.3 30.3c16.7 0 30.3-13.6 30.3-30.3C62.3 15.3 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.3 46.2 6.3 32 6.3 17.8 17.8 6.3 32 6.3s25.8 11.6 25.8 25.8c0 14.1-11.6 25.7-25.8 25.7z" />
  </svg>
);
export default SvgCircleMinus;
