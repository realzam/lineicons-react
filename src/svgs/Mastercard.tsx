import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMastercard = ({
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
    <path d="M54.5 13.2h-45c-4.3 0-7.7 3.5-7.7 7.7v22.2c0 4.3 3.5 7.7 7.7 7.7h45c4.3 0 7.7-3.5 7.7-7.7V20.9c.1-4.3-3.4-7.7-7.7-7.7zm3.3 29.9c0 1.8-1.5 3.2-3.2 3.2h-45c-1.8 0-3.2-1.5-3.2-3.2V20.9c0-1.8 1.5-3.2 3.2-3.2h45c1.8 0 3.2 1.5 3.2 3.2v22.2z" />
    <path d="M36.9 22.4c-2 0-3.9.6-5.4 1.7-1.4-1-3.1-1.4-4.9-1.4-5.1 0-9.3 4.2-9.3 9.3s4.2 9.3 9.3 9.3c1.7 0 3.4-.5 4.9-1.4 1.6 1.1 3.4 1.7 5.4 1.7 5.3 0 9.6-4.3 9.6-9.6s-4.3-9.6-9.6-9.6zm.2 16.8c-1.3 0-2.5-.4-3.5-.9 1.5-1.7 2.5-3.8 2.5-6.3-.1-2.5-1-4.7-2.5-6.3 1.1-.6 2.2-.9 3.5-.9 3.9 0 7.2 3.2 7.2 7.2-.1 4-3.3 7.2-7.2 7.2z" />
  </svg>
);
export default SvgMastercard;
