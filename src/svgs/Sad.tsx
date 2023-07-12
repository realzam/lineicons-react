import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSad = ({
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
    <circle cx={20} cy={22.8} r={4} />
    <circle cx={44} cy={22.8} r={4} />
    <path d="M32 40c-5.5 0-10.7 2-14.7 5.8-.9.8-1 2.3-.1 3.2.8.9 2.3 1 3.2.1 3.2-2.9 7.3-4.6 11.6-4.6s8.5 1.6 11.6 4.6c.4.4 1 .6 1.5.6.6 0 1.2-.2 1.6-.7.8-.9.8-2.3-.1-3.2C42.7 42.1 37.5 40 32 40z" />
  </svg>
);
export default SvgSad;
