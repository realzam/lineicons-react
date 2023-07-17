import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlagAlt = ({
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
    <path d="m51.9 33.7-3.4-8 3.4-8c.1-.1.1-.3.1-.4v-.5c0-1.2-1-2.3-2.3-2.3H34.3v-2.8c0-1.2-1-2.3-2.3-2.3H16.4V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v56c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V31.7h13.3v1.8c0 1.8 1.5 3.3 3.3 3.3h16.7c1.2 0 2.3-1 2.3-2.3.1-.3 0-.6-.1-.8zm-35.5-6.5V13.9h13.3v13.3H16.4zM34.3 19h12.2l-2.8 6.7 2.8 6.7H34.3V19z" />
  </svg>
);
export default SvgFlagAlt;
