import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFacebookOriginal = ({
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
    <path d="M59.5 1h-55C2.5 1 1 2.6 1 4.5v55c0 2 1.6 3.5 3.5 3.5h29.6V38.9h-8v-9.3h8v-6.9c0-8 4.8-12.4 12-12.4 2.4 0 4.8.1 7.2.4V19h-4.8c-3.8 0-4.6 1.8-4.6 4.5v5.9H53l-1.3 9.4h-8v23.8h15.8c2 0 3.5-1.5 3.5-3.5V4.5c-.1-2-1.7-3.5-3.5-3.5z" />
  </svg>
);
export default SvgFacebookOriginal;
