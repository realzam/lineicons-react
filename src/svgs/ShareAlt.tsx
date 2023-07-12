import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShareAlt = ({
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
    <path d="M13.2 24.2c.4.4 1 .6 1.5.6.6 0 1.2-.2 1.6-.7.9-.9.8-2.3-.1-3.2l-5.7-5.4h11.9c5.4 0 9.8 4.4 9.8 9.8v15c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-15c0-7.9-6.4-14.3-14.3-14.3h-12l5.8-5.4c.9-.8 1-2.3.1-3.2-.8-.9-2.3-1-3.2-.1L4 10.8c-.7.6-1 1.5-1 2.3 0 .9.4 1.7 1 2.4l9.2 8.7z" />
    <path d="M59 38.1c-1.2 0-2.3 1-2.3 2.3v14.5c0 1.6-1.3 2.9-2.9 2.9H10.2c-1.6 0-2.9-1.3-2.9-2.9V40.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v14.5c0 4.1 3.3 7.4 7.4 7.4h43.7c4.1 0 7.4-3.3 7.4-7.4V40.3c.1-1.2-.9-2.2-2.2-2.2z" />
  </svg>
);
export default SvgShareAlt;
