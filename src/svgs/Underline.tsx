import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnderline = ({
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
    <path d="M32 49.5c11.8 0 21.4-9.4 21.4-20.9V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v24.6c0 9-7.6 16.4-16.9 16.4C22.6 45 15 37.7 15 28.6V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v24.6c.2 11.6 9.8 20.9 21.6 20.9zM56.2 57.8H7.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h48.4c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgUnderline;
