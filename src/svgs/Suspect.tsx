import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSuspect = ({
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
    <path d="M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3 31.3-14 31.3-31.3S49.2.8 32 .8zm0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8-12 26.7-26.8 26.7z" />
    <path d="M43.7 43H20.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h23.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.2-2.3zM28.9 21.5c0-1.2-1-2.3-2.3-2.3h-10c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h10c1.3 0 2.3-1.1 2.3-2.3zM47.3 19.3h-10c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h10c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgSuspect;
